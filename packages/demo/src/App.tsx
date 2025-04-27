import Snowfall from "react-snowfall/src";
import { useSettingsStore } from "./settings";
import logo from "./logo.png";
import "./App.css";

const snowflake = document.createElement("img");
snowflake.src = logo;

const images = [snowflake];

const App = () => {
  const { color, snowflakeCount, radius, speed, wind, useImages, opacity } =
    useSettingsStore();

  return (
    <div className="app">
      <Snowfall
        color={color}
        snowflakeCount={snowflakeCount}
        radius={radius}
        speed={speed}
        wind={wind}
        images={useImages ? images : undefined}
        opacity={opacity}
      />
    </div>
  );
};

export default App;
