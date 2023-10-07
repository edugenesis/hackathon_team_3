import { useDispatch, useSelector } from "react-redux";
import { useFrame } from "@react-three/fiber";
import { useMemo, useEffect } from "react";
import * as T from "three";
import GUI from "lil-gui";
import {changeActivePlayer} from "../../../features/game/slice";

const displayGui = true;

const lambda = 4;
const dt = 0.015;

const p1Camera = {
  x: 0,
  y: 8,
  z: 10,
  rotationX: -0.2,
  rotationY: 0,
  rotationZ: 0,
};

const p2Camera = {
  x: 0,
  y: 8,
  z: -10,
  rotationX: -0.75,
  rotationY: 0,
  rotationZ: 1,
};

export const Camera = () => {
  const dispatch = useDispatch();
  const camObj = useMemo(() => new T.Object3D(), []);

  const players = useSelector((state) => state.game.players);
  const activePlayer = useSelector((state) => state.game.activePlayer);
  const activePlayerIndex = players.indexOf(activePlayer);

  const boardCameraPosition = useMemo(() => {
    return activePlayerIndex === 0 ? p1Camera : p2Camera;
  }, [activePlayerIndex])

  let conf = {
    debugging: false,
    x: 0,
    y: 7,
    z: 10,
    rotationX: -0.2,
    rotationY: 0,
    rotationZ: 0,
    switch: () => {
      conf.debugging = false;
      dispatch(changeActivePlayer())
    },
  };

  useEffect(() => {
    if(!displayGui){
      return;
    }
    const gui = new GUI();
    gui.add(conf, "debugging");
    gui.add(conf, "x");
    gui.add(conf, "y");
    gui.add(conf, "z");
    gui.add(conf, "rotationX");
    gui.add(conf, "rotationY");
    gui.add(conf, "rotationZ");
    gui.add(conf, "switch");
  }, []);

  useFrame(({ camera }) => {
    const config = conf.debugging ? conf : boardCameraPosition;
    camObj.position.x = T.MathUtils.damp(
      camObj.position.x,
      config.x,
      lambda,
      dt,
    );
    camObj.position.y = T.MathUtils.damp(
      camObj.position.y,
      config.y,
      lambda,
      dt,
    );
    camObj.position.z = T.MathUtils.damp(
      camObj.position.z,
      config.z,
      lambda,
      dt,
    );

    camObj.rotation.x = T.MathUtils.damp(
      camObj.rotation.x,
      Math.PI * config.rotationX,
      lambda,
      dt,
    );
    camObj.rotation.y = T.MathUtils.damp(
      camObj.rotation.y,
      Math.PI * config.rotationY,
      lambda,
      dt,
    );
    camObj.rotation.z = T.MathUtils.damp(
      camObj.rotation.z,
      Math.PI * config.rotationZ,
      lambda,
      dt,
    );

    camera.position.x = camObj.position.x;
    camera.position.y = camObj.position.y;
    camera.position.z = camObj.position.z;

    camera.rotation.x = camObj.rotation.x;
    camera.rotation.y = camObj.rotation.y;
    camera.rotation.z = camObj.rotation.z;
  });

  return <primitive object={camObj} />;
};
