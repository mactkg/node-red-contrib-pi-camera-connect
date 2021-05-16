import { EditorRED } from "node-red";
import { PiCameraConnectEditorNodeProperties } from "./modules/types";

declare const RED: EditorRED;

RED.nodes.registerType<PiCameraConnectEditorNodeProperties>(
  "pi-camera-connect",
  {
    category: "function",
    color: "#a6bbcf",
    icon: "font-awesome/fa-camera",
    defaults: {
      name: { value: "" },
      width: { value: 1280, required: true },
      height: { value: 720, required: true },
    },
    inputs: 1,
    outputs: 1,
    label: function () {
      return this.name || "camera";
    },
    paletteLabel: "pi camera connect",
  }
);
