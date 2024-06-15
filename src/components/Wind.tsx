import windIcon from "../icons/icons8-wind-50.png";
import type { Units } from "./Temperature";
import styled from "@emotion/styled";
export type WindType = {
  speed: number;
  direction: string;
};

const WindBox = styled.div`
  font-weight: bold;
`;

interface WindProps {
  wind: WindType;
  units: Units;
}
const Wind = (props: WindProps) => {
  const { wind, units } = props;
  return (
    <WindBox>
      <img src={windIcon} alt="Wind Icon" />
      <p>
        {wind.speed} {units === "imperial" ? "mph" : "km/h"} {wind.direction}
      </p>
    </WindBox>
  );
};

export default Wind;
