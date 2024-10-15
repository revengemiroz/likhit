"use client";
import React, { useEffect } from "react";
import * as THREE from "three";

const ThreeDMap = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add a plane with OpenStreetMap texture
    const geometry = new THREE.PlaneGeometry(100, 100, 32);
    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      (texture) => {
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = -Math.PI / 2; // Rotate plane to horizontal
        scene.add(plane);
      }
    );

    // Set camera position
    camera.position.set(0, 50, 50);
    camera.lookAt(0, 0, 0);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // No additional JSX needed as the canvas is added directly to the body
};

export default ThreeDMap;
