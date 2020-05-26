import React from "react"
import { Layout } from "../components/Layout"
import { Profile } from "../components/Profile"
import { InfoVoice } from "../components/InfoVoice"
import { InfoOutput } from "../components/InfoOutput"
import { InfoContact } from "../components/InfoContact"
import * as THREE from "three"
import { OBJLoader } from "../node_modules/three/examples/jsm/loaders/OBJLoader.js"

const PagesIndex: React.FC = () => {
  const screen = React.useRef<HTMLDivElement>(null);
  const requestRef = React.useRef<number>();

  const initWebGL = async (renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera): Promise<() => void> => {
    const clock = new THREE.Clock();
    if (screen.current === null) return () => ({})
    const width = screen.current.clientWidth;
    camera.aspect = width / 100
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
        }, undefined, (event: ErrorEvent) => { reject(event) });
      })
    }

    const model = await loadModel("/welcome.obj")
    model.rotation.set(Math.PI / 2, 0, 0);
    scene.add(model);

    let time = 0
    let colorTime = 0

    const render = (): void => {
      const delta = clock.getDelta()
      model.rotation.set(Math.PI / 2, 0, time);
      time += (Math.PI / 100) * delta
      colorTime -= delta
      if (colorTime <= 0) {
        directionalLight.color = new THREE.Color(Math.floor(Math.random() * 0xFFFFFF))
        colorTime = 1
      }
      renderer.render(scene, camera);
    }

    const animate = (): void => {
      requestRef.current = requestAnimationFrame(animate);
      render();
    }

    return animate
  }

  React.useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    const camera = new THREE.PerspectiveCamera(45, 800 / 100, 1, 2000);
    const onResize = () => {
      if (screen.current === null) return;
      const width = screen.current.clientWidth
      renderer.setSize(width, 100);
      camera.aspect = width / 100
    }

    (async () => {
      const animate = await initWebGL(renderer, camera)
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
    }
  }, [])

  return (
    <Layout>
      <div className="bg-gray-100 pt-10">
        <div className="mx-auto max-w-6xl">
          <div ref={screen}></div>
          <div className="marquee"><span>nazoのホームページへようこそ！楽しんでいってください！</span></div>
          <div className="p-2 bg-gray-100 rounded">
            <div className="flex flex-col md:flex-row">
              <Profile></Profile>
              <div className="md:w-2/3">
                <div className="p-4">
                  <InfoVoice></InfoVoice>
                  <InfoOutput></InfoOutput>
                  <InfoContact></InfoContact>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PagesIndex
