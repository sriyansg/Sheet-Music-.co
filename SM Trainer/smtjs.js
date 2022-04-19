const { Renderer, Stave } = Vex.Flow;
const div = document.getElementById("output")
const renderer = new Renderer(div, Renderer.Backends.SVG);
renderer.resize(500, 250);
const context = renderer.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new Stave(10, 40, 400);

// Add a clef and time signature.
stave.addClef('treble').addTimeSignature('4/4');

// Connect it to the rendering context and draw!
stave.setContext(context).draw();
