
import React from "react";
import * as THREE from "three";
import { OBJLoader } from "../node_modules/three/examples/jsm/loaders/OBJLoader.js";

let time = 0;
let colorTime = 0;

export const Logo: React.FC = () => {
  const screen = React.useRef<HTMLDivElement>(null);
  const requestRef = React.useRef<number>();

  const initWebGL = async (renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera): Promise<() => void> => {
    const clock = new THREE.Clock();
    if (screen.current === null) return () => ({});
    const width = screen.current.clientWidth;
    camera.aspect = width / 100;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, 100);
    screen.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    camera.position.set(0, 0, 4);

    const ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);

    const directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0, 0, 1).normalize();
    scene.add(directionalLight);

    const loadModel = (path: string): Promise<THREE.Group> => {
      return new Promise<THREE.Group>((resolve: (group: THREE.Group) => void, reject: (event: ErrorEvent) => void): void => {
        const loader = new OBJLoader();
        loader.load(path, (model: THREE.Group): void => {
          resolve(model);
        }, undefined, (event: ErrorEvent) => { reject(event); });
      });
    };

    const model = await loadModel("/welcome.obj");
    model.rotation.set(Math.PI / 2, 0, 0);
    scene.add(model);

    const render = () => {
      const delta = clock.getDelta();
      model.rotation.set(Math.PI / 2, 0, time);
      time += (Math.PI / 100) * delta;
      colorTime -= delta;
      if (colorTime <= 0) {
        directionalLight.color = new THREE.Color(Math.floor(Math.random() * 0xFFFFFF));
        colorTime = 1;
      }
      renderer.render(scene, camera);
    };

    const animate = (): void => {
      requestRef.current = requestAnimationFrame(animate);
      render();
    };

    return animate;
  };

  React.useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    const camera = new THREE.PerspectiveCamera(45, 800 / 100, 1, 2000);

    const onResize = () => {
      if (screen.current === null) return;
      const width = screen.current.clientWidth;
      renderer.setSize(width, 100);
      camera.aspect = width / 100;
    };

    (async () => {
      const animate = await initWebGL(renderer, camera);
      requestRef.current = requestAnimationFrame(animate);
      window.addEventListener("resize", onResize);
    })();

    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
      window.addEventListener("resize", onResize);
      if (screen.current !== null) {
        screen.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={screen}></div>
  );
};
