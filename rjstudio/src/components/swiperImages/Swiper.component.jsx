import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const SwiperImages = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/path/to/your/image.jpg', (texture) => {
      // Geometry
      const geometry = new THREE.PlaneGeometry(2, 2);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    });

    // Clean up
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};
