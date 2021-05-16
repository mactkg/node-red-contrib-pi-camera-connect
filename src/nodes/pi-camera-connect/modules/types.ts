import { Node, NodeDef } from "node-red";
import { PiCameraConnectOptions } from "../shared/types";

export interface PiCameraConnectNodeDef
  extends NodeDef,
    PiCameraConnectOptions {}

// export interface PiCameraConnectNode extends Node {}
export type PiCameraConnectNode = Node;
