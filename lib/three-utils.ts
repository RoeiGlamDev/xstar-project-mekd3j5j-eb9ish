import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene
export const createScene = (): THREE.Scene => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background to black
    return scene;
};

// Function to create a camera
export const createCamera = (fov: number, aspect: number, near: number, far: number): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 1, 5); // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1); // Set clear color to black
    return renderer;
};

// Function to add a light to the scene
export const addLight = (scene: THREE.Scene): void => {
    const light = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(light);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Directional light
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
};

// Function to create a basic geometry
export const createBox = (size: number, color: string): THREE.Mesh => {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshStandardMaterial({ color: color }); // Use standard material for better lighting
    return new THREE.Mesh(geometry, material);
};

// Default export
export default {
    createScene,
    createCamera,
    createRenderer,
    addLight,
    createBox,
};