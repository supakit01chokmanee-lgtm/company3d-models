import * as THREE from 'https://unpkg.com/three@0.166.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.166.1/examples/jsm/controls/OrbitControls.js';
const scene = new THREE.Scene();

scene.background = new THREE.Color(0xf2f2f2);

const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.set(3,3,6);

const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("viewer").appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.08;
const grid = new THREE.GridHelper(20,20);

scene.add(grid);
const axes = new THREE.AxesHelper(3);

scene.add(axes);
const light=new THREE.HemisphereLight(0xffffff,0x444444,3);

scene.add(light);

function animate(){

requestAnimationFrame(animate);

controls.update();

renderer.render(scene,camera);

}
window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
