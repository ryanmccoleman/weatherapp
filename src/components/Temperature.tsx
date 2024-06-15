import styled from "@emotion/styled";
export type TemperatureType = {
  celsius: number;
  farenheit: number;
};
const TemperatureBox = styled.div`
  span {
    font-size: 52px;
  }
  margin-right: 25px;
  padding-top: 9px;
`;

export type Units = "metric" | "imperial";

interface TemperatureProps {
  temperature: TemperatureType;
  units: Units;
}
const Temperature = (props: TemperatureProps) => {
  const { temperature, units } = props;
  return (
    <TemperatureBox>
      {units === "imperial" ? (
        <span>{temperature.farenheit}&deg;F</span>
      ) : (
        <span>{temperature.celsius}&deg;C</span>
      )}
    </TemperatureBox>
  );
};

export default Temperature;
