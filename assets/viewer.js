/* 3D viewers. The models are glTF files and the hand is a pair of data files, all loaded from assets/models,
   so the site must be opened through a web address (GitHub Pages or a local server).
   Every model is drawn as a wireframe: a near-black fill with coloured edges.
   Drag to turn, or use the arrow keys when a canvas has focus. Drawing pauses while a canvas is off screen. */
(() => {
  const reduced = () => document.documentElement.classList.contains("reduce-motion");
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const FILL = 0x05050c;          // near black, so the far side of every model stays hidden
  const FIT_RADIUS = 0.72;        // the model is scaled so a sphere this size holds it at any turn

  const toWireframe = (root, color) => {
    const fill = new THREE.MeshBasicMaterial({ color: FILL, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    const wire = new THREE.MeshBasicMaterial({ color, wireframe: true });
    const meshes = [];
    root.traverse(obj => { if (obj.isMesh) meshes.push(obj); });
    meshes.forEach(mesh => {
      mesh.material = fill;
      mesh.add(new THREE.Mesh(mesh.geometry, wire));
    });
  };

  // Centres the model and scales it by its diagonal, so no turn of it can reach past the edge of its frame.
  const fit = group => {
    const box = new THREE.Box3().setFromObject(group);
    const center = box.getCenter(new THREE.Vector3());
    const radius = box.getSize(new THREE.Vector3()).length() / 2;
    const scale = FIT_RADIUS / Math.max(radius, 1e-6);
    group.scale.setScalar(scale);
    group.position.copy(center).multiplyScalar(-scale);
  };

  // A solid, shaded finish in one colour: the model keeps its shape but loses the wireframe.
  const solidMesh = (root, color) => {
    // The renderer writes sRGB, so the colour is given in linear light to come out exactly as written
    const c = new THREE.Color(color);
    const mat = new THREE.MeshLambertMaterial({ color: new THREE.Color(c.r ** 2.2, c.g ** 2.2, c.b ** 2.2), side: THREE.DoubleSide });
    root.traverse(obj => { if (obj.isMesh) obj.material = mat; });
  };
  const loadModel = (url, color, solid) => new Promise((resolve, reject) => {
    new THREE.GLTFLoader().load(url, gltf => {
      if (solid) solidMesh(gltf.scene, solid); else toWireframe(gltf.scene, color);
      resolve(gltf.scene);
    }, undefined, reject);
  });

  // The hand: a near-black fill with red edges, read from its manifest and raw vertex data.
  const loadHand = async () => {
    const manifest = await (await fetch("assets/models/hand.json")).json();
    const bytes = await (await fetch("assets/models/hand.bin")).arrayBuffer();
    const fill = new THREE.MeshBasicMaterial({ color: FILL, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    const wire = new THREE.MeshBasicMaterial({ color: 0xff2442, wireframe: true });
    const hand = new THREE.Group();
    manifest.parts.forEach(part => {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(bytes, part.positions.offset, part.positions.count), 3));
      geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(bytes, part.indices.offset, part.indices.count), 1));
      hand.add(new THREE.Mesh(geometry, fill));
      hand.add(new THREE.Mesh(geometry, wire));
    });
    return hand;
  };

  const createViewer = (canvas, opts) => {
    const frameBox = canvas.parentElement;
    const showStatus = text => {
      let note = frameBox.querySelector(".viewer-status");
      if (!note) {
        note = document.createElement("p");
        note.className = "viewer-status";
        frameBox.appendChild(note);
      }
      note.textContent = text;
    };

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: !opts.dark });
    } catch (err) {
      showStatus("This device cannot show 3D.");
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setClearColor(0x000000, opts.dark ? 1 : 0);

    const scene = new THREE.Scene();
    if (opts.solid) {
      scene.add(new THREE.HemisphereLight(0xffffff, 0x1a1040, 0.7));
      const sun = new THREE.DirectionalLight(0xffffff, 0.7);
      sun.position.set(3, 4, 5);
      scene.add(sun);
    }
    const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 100);
    camera.position.set(0, 0, opts.dist || 4.4);

    const group = new THREE.Group();
    scene.add(group);
    if (opts.load) {
      opts.load().then(obj => {
        group.add(obj);
        if (opts.fit) fit(group);
      }).catch(() => showStatus("This 3D model could not load. Open the site from a web address to see it."));
    }

    const state = { yaw: 0, pitch: opts.pitch || 0.1, dragging: false, lx: 0, ly: 0 };
    canvas.tabIndex = 0;
    canvas.addEventListener("pointerdown", e => {
      state.dragging = true;
      state.lx = e.clientX;
      state.ly = e.clientY;
      canvas.setPointerCapture(e.pointerId);
      canvas.classList.add("grabbing");
    });
    const release = () => {
      state.dragging = false;
      canvas.classList.remove("grabbing");
    };
    canvas.addEventListener("pointerup", release);
    canvas.addEventListener("pointercancel", release);
    canvas.addEventListener("pointermove", e => {
      if (!state.dragging) return;
      state.yaw += (e.clientX - state.lx) * 0.01;
      state.pitch = clamp(state.pitch + (e.clientY - state.ly) * 0.005, -0.5, 0.8);
      state.lx = e.clientX;
      state.ly = e.clientY;
    });
    canvas.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") state.yaw -= 0.15;
      else if (e.key === "ArrowRight") state.yaw += 0.15;
      else if (e.key === "ArrowUp") state.pitch = clamp(state.pitch - 0.1, -0.5, 0.8);
      else if (e.key === "ArrowDown") state.pitch = clamp(state.pitch + 0.1, -0.5, 0.8);
      else return;
      e.preventDefault();
    });

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    new ResizeObserver(resize).observe(canvas);
    resize();

    let visible = true;
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(canvas);

    let t = 0;
    (function frame() {
      requestAnimationFrame(frame);
      if (!visible) return;
      t += 0.016;
      const still = reduced();
      if (!state.dragging && !still) state.yaw += opts.spin;
      group.rotation.set(state.pitch, state.yaw, 0);
      if (opts.hover) group.position.y = still ? 0 : Math.sin(t * 1.8) * 0.12;
      renderer.render(scene, camera);
    })();
  };

  const hand = document.getElementById("hand");
  if (hand) createViewer(hand, { load: loadHand, dark: true, spin: 0.01, hover: true, dist: 6.5, pitch: 0.12 });
  const hero = document.getElementById("gtr-hero");
  if (hero) createViewer(hero, { load: () => loadModel("assets/models/gtr-r35.glb", 0xf4f2ea, 0xff2442), fit: true, spin: 0.005, dist: 3.5, pitch: 0.1, solid: true });
  const gtr = document.getElementById("gtr-models");
  if (gtr) createViewer(gtr, { load: () => loadModel("assets/models/gtr-r35.glb", 0xf4f2ea), fit: true, spin: 0.005, dist: 3.5, pitch: 0.1 });
  const breu = document.getElementById("breu");
  if (breu) createViewer(breu, { load: () => loadModel("assets/models/breu-character.glb", 0x5ce6ff), fit: true, spin: 0.006, dist: 3.5, pitch: 0.05 });
})();
