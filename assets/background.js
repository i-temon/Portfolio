/* Painted backdrop: an original, slowly moving domain-warped noise shader in teal, deep teal, red and cream.
   It brightens lightly on each beat and swirls on the drop. It holds still when reduced motion is on. */
(() => {
  const canvas = document.getElementById("bg");
  if (!canvas) return;
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, depth: false, stencil: false });
  if (!gl) { canvas.remove(); return; }

  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  };

  const vertex = compile(gl.VERTEX_SHADER, `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `);

  const fragment = compile(gl.FRAGMENT_SHADER, `
    precision mediump float;
    uniform vec2 uRes;
    uniform float uT;
    uniform float uBeat;
    uniform float uDrop;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                 mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = p * 2.03 + vec2(1.7, 9.2);
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uRes.y;
      vec2 p = uv * 2.4;
      float t = uT * 0.04;
      float swirl = 3.2 + 2.4 * uDrop;

      vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - vec2(t, 0.0)));
      vec2 r = vec2(fbm(p + swirl * q + vec2(1.7, 9.2) + vec2(0.0, t * 0.6)),
                    fbm(p + swirl * q + vec2(8.3, 2.8) - vec2(t * 0.4, 0.0)));
      float f = fbm(p + 2.6 * r);

      vec3 teal = vec3(0.17, 0.68, 0.66);
      vec3 deep = vec3(0.04, 0.26, 0.32);
      vec3 red = vec3(0.86, 0.12, 0.22);
      vec3 cream = vec3(0.95, 0.93, 0.86);

      vec3 col = mix(teal, deep, smoothstep(0.3, 0.8, f));
      col = mix(col, red, smoothstep(0.5, 0.95, length(r) * 0.8) * 0.9);
      col = mix(col, cream, smoothstep(0.72, 0.92, f) * 0.45);
      col *= 1.0 + 0.085 * uBeat + 0.25 * uDrop;
      col += (hash(gl_FragCoord.xy + fract(uT)) - 0.5) * 0.03;
      gl_FragColor = vec4(col, 1.0);
    }
  `);

  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.useProgram(program);

  // One oversized triangle covers the screen.
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(program, "uRes");
  const uT = gl.getUniformLocation(program, "uT");
  const uBeat = gl.getUniformLocation(program, "uBeat");
  const uDrop = gl.getUniformLocation(program, "uDrop");
  const SCALE = 0.5;

  const resize = () => {
    canvas.width = Math.max(1, Math.round(innerWidth * SCALE));
    canvas.height = Math.max(1, Math.round(innerHeight * SCALE));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uRes, canvas.width, canvas.height);
  };
  addEventListener("resize", resize);
  resize();

  const reduced = () => document.documentElement.classList.contains("reduce-motion");
  const start = performance.now();
  const frame = now => {
    const state = window.BEAT_STATE || { beat: 0, drop: 0 };
    const still = reduced();
    gl.uniform1f(uT, still ? 0 : (now - start) / 1000);
    gl.uniform1f(uBeat, still ? 0 : state.beat);
    gl.uniform1f(uDrop, still ? 0 : state.drop);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
})();
