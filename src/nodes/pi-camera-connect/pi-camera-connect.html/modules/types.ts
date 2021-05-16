import { EditorNodeProperties } from "node-red";
import { PiCameraConnectOptions } from "../../shared/types";

export interface PiCameraConnectEditorNodeProperties
  extends EditorNodeProperties,
    PiCameraConnectOptions {}
