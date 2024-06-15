import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Temperature, { TemperatureType } from "./components/Temperature";
import Wind, { WindType } from "./components/Wind";
import Condition, { ConditionType } from "./components/Condition";

const WeatherContainer = styled.div`
  color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
`;

const WeatherHeader = styled.div`
  position: relative;
`;

const WeatherRow = styled.div`
  display: flex;
`;

const UnitsToggle = styled.button`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px;
  border-radius: 15px;
  font-size: 10px;
  cursor: pointer;
`;

const LocationText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
`;

type Location = {
  city: string;
  country: string;
  region: string;
};

interface WeatherContentProps {
  location: Location;
  temperature: TemperatureType;
  wind: WindType;
  condition: ConditionType;
}

const WeatherContent = (props: WeatherContentProps) => {
  const { location, temperature, wind, condition } = props;
  const [units, setUnits] = useState<"imperial" | "metric">("imperial");

  const toggleUnits = () => {
    if (units === "imperial") {
      setUnits("metric");
    } else {
      setUnits("imperial");
    }
  };
  return (
    <WeatherContainer>
      <WeatherHeader>
        <LocationText>
          {location.city}, {location.region}, {location.country}
        </LocationText>
        <UnitsToggle onClick={toggleUnits}>Toggle Units</UnitsToggle>
      </WeatherHeader>
      <WeatherRow>
        <Temperature temperature={temperature} units={units} />
        <Condition condition={condition} />
        <Wind wind={wind} units={units} />
      </WeatherRow>
    </WeatherContainer>
  );
};
export default WeatherContent;
