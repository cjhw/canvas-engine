import { useEffect, useRef } from "react";
import "./App.css";
import { Application, Graphics, Container, RendererType } from "./lib";
import { drawAuxiliaryLine } from "./utils";

const width = 1200;
const height = 700;

function App() {
  const appRef = useRef<Application>();
  useEffect(() => {
    appRef.current = new Application({
      rendererType: RendererType.Canvas,
      view: document.getElementById("canvas") as HTMLCanvasElement,
      backgroundColor: "#aaaaaa",
    });

    console.log("canvas render engine");

    drawAuxiliaryLine("auxiliaryCanvas");
  }, []);

  useEffect(() => {
    // 测试代码

    const path = new Graphics()
      .lineStyle(3, "purple")
      .beginFill("pink", 0.6)
      .moveTo(100, 100)
      .lineTo(300, 100)
      .arc(300, 300, 200, Math.PI * 1.5, Math.PI * 2)
      .bezierCurveTo(500, 400, 600, 500, 700, 500)
      .lineTo(600, 300)
      .arcTo(700, 100, 800, 300, 150)
      .quadraticCurveTo(900, 100, 1100, 200)
      .closePath();

    appRef.current?.stage.addChild(path);
  }, []);

  return (
    <div className="app-container" style={{ position: "relative" }}>
      <canvas
        width={width}
        height={height}
        id="auxiliaryCanvas"
        style={{ position: "absolute", pointerEvents: "none" }}
      ></canvas>
      <canvas id="canvas" width={width} height={height}></canvas>
    </div>
  );
}

export default App;
