import { useState } from "react";
import { useInterval } from "../hooks/user-interval";

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime + 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>Você esta: {mainTime}</h2>

      <div className="controls"></div>
      <div className="details">
        <p>Cliclos concluidos:</p>
        <p>Horas trabalhadas:</p>
        <p>Pomodoros concluidos:</p>
      </div>
    </div>
  );
}
