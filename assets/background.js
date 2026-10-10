/* The animated backdrop: a halftone print in cobalt, navy and paper, with a red slash of light that flares on each drop.
   It is drawn on the graphics card, at half resolution for speed. site.js passes it the beat and the drop each frame. */
(() => {
  const canvas = document.getElementById("bg");
  if (!canvas) return;
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, depth: false, stencil: false, preserveDrawingBuffer: true });
  if (!gl) return;

  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(shader));
    return shader;
  };

  const vertex = compile(gl.VERTEX_SHADER, `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `);

  const fragment = compile(gl.FRAGMENT_SHADER, `
    precision highp float;
    uniform vec2 uRes;
    uniform float uT;
    uniform float uBeat;
    uniform float uDrop;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }
    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = p * 2.02 + vec2(3.1, 1.7);
        a *= 0.5;
      }
      return v;
    }
    void main() {
      vec2 uv = gl_FragCoord.xy / uRes.y;
      float t = uT * 0.11;
      vec2 q = vec2(fbm(uv * 1.5 + vec2(t, -0.6 * t)), fbm(uv * 1.5 + vec2(-0.4 * t, 0.8 * t) + 5.2));
      float n = fbm(uv * 2.1 + 2.4 * q + vec2(0.0, t));
      vec3 navy = vec3(0.03, 0.08, 0.36);
      vec3 cobalt = vec3(0.09, 0.23, 1.0);
      vec3 paper = vec3(0.96, 0.95, 0.92);
      vec3 red = vec3(1.0, 0.14, 0.26);
      vec3 col = mix(navy, cobalt, smoothstep(0.2, 0.8, n));
      vec2 cell = fract(gl_FragCoord.xy / 10.0) - 0.5;
      float dots = 1.0 - smoothstep(0.30, 0.38, length(cell));
      col = mix(col, paper, dots * (0.06 + 0.12 * uBeat) * smoothstep(0.5, 0.85, n));
      float d = abs((uv.x * 0.8 + uv.y) - 1.25 - 0.04 * sin(uT * 0.35));
      col = mix(col, red, (1.0 - smoothstep(0.0, 0.03, d)) * (0.18 + 0.7 * uDrop));
      col *= 1.0 + 0.07 * uBeat;
      gl_FragColor = vec4(col, 1.0);
    }
  `);

  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
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
    requestAnimationFrame(frame);
    const still = reduced();
    const s = window.BEAT_STATE || { beat: 0, drop: 0 };
    gl.uniform1f(uT, still ? 0 : (now - start) / 1000);
    gl.uniform1f(uBeat, still ? 0 : s.beat);
    gl.uniform1f(uDrop, still ? 0 : s.drop);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
  requestAnimationFrame(frame);
})();
