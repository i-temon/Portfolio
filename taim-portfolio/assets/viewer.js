/* Hand viewer: opaque white wireframe on black. The hand floats, turns on its own, tilts toward the cursor and can be dragged. */
(() => {
  const canvas = document.getElementById("hand");
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  } catch (err) {
    canvas.replaceWith(Object.assign(document.createElement("p"), { textContent: "This 3D view needs WebGL." }));
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000);

  // Decode a base64 string (from assets/hand.js) into a typed array.
  const decode = (b64, Type) => {
    const bin = atob(b64), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new Type(bytes.buffer);
  };

  // A black fill sits just behind the white wires, so edges on the far side of the hand stay hidden.
  const scene = new THREE.Scene();
  const model = new THREE.Group();
  const fill = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
  const wire = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  HAND.parts.forEach(part => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(decode(part.p, Float32Array), 3));
    geometry.setIndex(new THREE.BufferAttribute(decode(part.i, Uint16Array), 1));
    model.add(new THREE.Mesh(geometry, fill), new THREE.Mesh(geometry, wire));
  });
  scene.add(model);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
  camera.position.z = 6.5;
  new ResizeObserver(() => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }).observe(canvas);

  // Pointer: x/y are -1..1 across the canvas; yaw/pitch come from dragging.
  const pointer = { x: 0, y: 0, yaw: 0, pitch: 0, dragging: false, lastX: 0, lastY: 0 };
  canvas.addEventListener("pointerdown", e => {
    Object.assign(pointer, { dragging: true, lastX: e.clientX, lastY: e.clientY });
    canvas.setPointerCapture(e.pointerId);
  });
  ["pointerup", "pointercancel"].forEach(type => canvas.addEventListener(type, () => { pointer.dragging = false; }));
  canvas.addEventListener("pointerleave", () => { pointer.x = pointer.y = 0; });
  canvas.addEventListener("pointermove", e => {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = ((e.clientY - r.top) / r.height) * 2 - 1;
    if (!pointer.dragging) return;
    pointer.yaw += (e.clientX - pointer.lastX) * 0.012;
    pointer.pitch = Math.max(-0.8, Math.min(0.8, pointer.pitch + (e.clientY - pointer.lastY) * 0.006));
    pointer.lastX = e.clientX;
    pointer.lastY = e.clientY;
  });

  // Render loop: only while the canvas is on screen, and calm for visitors who prefer less motion.
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let visible = true, t = 0;
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(canvas);
  (function frame() {
    requestAnimationFrame(frame);
    if (!visible) return;
    t += 0.016;
    if (!pointer.dragging && !still) pointer.yaw += 0.012;           // turntable spin
    model.position.y = still ? 0 : Math.sin(t * 1.8) * 0.12;          // hover
    model.rotation.set(pointer.pitch + pointer.y * 0.25, pointer.yaw + pointer.x * 0.4, 0);
    renderer.render(scene, camera);
  })();
})();
