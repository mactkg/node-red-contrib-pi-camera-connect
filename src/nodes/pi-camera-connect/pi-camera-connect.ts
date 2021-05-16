import { NodeInitializer } from "node-red";
import { StillCamera } from "pi-camera-connect";
import { PiCameraConnectNode, PiCameraConnectNodeDef } from "./modules/types";

const nodeInit: NodeInitializer = (RED): void => {
  function PiCameraConnectNodeConstructor(
    this: PiCameraConnectNode,
    config: PiCameraConnectNodeDef
  ): void {
    RED.nodes.createNode(this, config);

    this.on("input", async (msg, send, done) => {
      const streamCamera = new StillCamera({
        width: config.width,
        height: config.height,
      });

      const image = await streamCamera.takeImage();
      msg.payload = image;
      send(msg);
      done();
    });
  }

  RED.nodes.registerType("pi-camera-connect", PiCameraConnectNodeConstructor);
};

export = nodeInit;
