import { Renderer } from "./renderer/Renderer";
import { RendererType } from "./enums";
import { IApplicationOptions } from "@/types";
import { CanvasRenderer } from "./renderer/CanvasRenderer";

export const getRenderer = (options: IApplicationOptions): Renderer => {
  const { rendererType: renderType } = options;
  switch (renderType) {
    case RendererType.Canvas:
      return new CanvasRenderer(options);
    default:
      return new CanvasRenderer(options);
  }
};
