import * as THREE from "three"
// console.log(THREE)

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)

// Material
const material = new THREE.MeshBasicMaterial({color: 'red'})
// const material = new THREE.MeshBasicMaterial({color: 'red', wireframe: true})
const mesh = new THREE.Mesh(geometry, material)

// Add mesh to the scene
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Set Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x = 2
// camera.position.y = 1
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)