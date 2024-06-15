import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import useWeatherData from "./useWeatherData";
import WeatherContent from "./WeatherContent";
import searchIcon from "./icons/icons8-search-24.png";
import clearIcon from "./icons/icons8-clear-50.png";

const WidgetContainer = styled.div`
  background: linear-gradient(to right, #525252, #383636);
  color: white;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 500px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
  border-radius: 5px;
  padding: 5px 5px 5px 10px;
  background-color: #fffacd;
`;

const LocationBox = styled.div`
  position: relative;
  width: 400px;
`;

const LocationInput = styled.input`
  color: black;
  border-radius: 20px;
  width: 100%;
  height: 20px;
  padding: 8px 0 8px 16px;
`;

const SubmitButton = styled.button`
  background: url(${searchIcon}) no-repeat center;
  background-size: 80%;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  border-radius: 5px;
`;

const ClearButton = styled.button`
  background: url(${clearIcon}) no-repeat center;
  background-size: 50%;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: absolute;
  right: 30px;
  top: 0;
  padding: 10px;
  border-radius: 5px;
`;

const Widget = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedLocation, setSubmittedLocation] = useState("");
  const { data, loading, error } = useWeatherData(submittedLocation);
  const handleClear = () => {
    setInputValue("");
  };
  const handleSubmit = () => {
    setSubmittedLocation(inputValue);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <WidgetContainer>
      <LocationBox>
        <LocationInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter city, region and country for local weather..."
        />
        {inputValue && <ClearButton onClick={handleClear}></ClearButton>}
        <SubmitButton onClick={handleSubmit} />
      </LocationBox>
      {error && <ErrorMessage>*{error}</ErrorMessage>}
      {data && (
        <WeatherContent
          location={{
            city: data.location.name,
            country: data.location.country,
            region: data.location.region,
          }}
          temperature={{
            celsius: data.current.temp_c,
            farenheit: data.current.temp_f,
          }}
          wind={{
            speed: data.current.wind_kph,
            direction: data.current.wind_dir,
          }}
          condition={data.current.condition}
        />
      )}
    </WidgetContainer>
  );
};

export default Widget;
