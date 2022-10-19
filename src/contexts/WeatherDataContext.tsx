import { createContext, FC, PropsWithChildren, useState } from "react";

type WeatherDataContextProps = {
  weatherInfo: Record<string, any>;
  setWeatherInfo: (weatherInfo: Record<string, any>) => void;
};

const WeatherDataContext = createContext<WeatherDataContextProps>({
  weatherInfo: {},
  setWeatherInfo: (weatherInfo) => {
    return weatherInfo;
  },
});

export const WeatherDataContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [weatherInfo, setWeatherInfo] = useState({});
  return (
    <WeatherDataContext.Provider value={{ weatherInfo, setWeatherInfo }}>
      {children}
    </WeatherDataContext.Provider>
  );
};
