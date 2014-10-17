var VIEW_ANGLE = 45,
    WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 1000;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  VIEW_ANGLE,
  ASPECT,
  NEAR,
  FAR
);
scene.add(camera);
camera.position.z = 300;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

var radius = 50,
    segments = 16,
    rings = 16;
var sphere = new THREE.Mesh(
  new THREE.SphereGeometry(
    radius,
    segments,
    rings
  ),
  new THREE.MeshLambertMaterial({
    color: 0xCC0000
  })
);
scene.add(sphere);

var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);

var frames = 0;
function render() {
  requestAnimationFrame(render);
  scale = (Math.sin(frames/20)+1.3)/2;
  sphere.scale.set(scale, scale, scale);
  renderer.render(scene, camera);
  frames++;
}
render();
