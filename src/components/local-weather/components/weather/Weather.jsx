import Temperature from "../../../temperature";
import styled from 'styled-components';
import WeatherItem from "./components/weather-item";

const Wrapper = styled.div`
	text-align: center;
`

const StyledTemperature = styled(Temperature)`
	color: white;
	font-size: 5rem;
`

const MainWeather = styled.div`
	color: rgba(255, 255, 255, 0.7);
	font-size: 1.5rem;
	letter-spacing: 0.5rem;
	margin-top: 0.25rem;
`

const VerticalDivider = styled.div`
	margin: 0 3.2rem;
	width: 0.2rem;
	background-color: rgba(255, 255, 255, 0.7);
`

const HumidityAndWind = styled.div`
	display: flex;
	margin-top: 3rem;
	color: rgba(255, 255, 255, 0.7);
`

const Weather = () => {
	return (
		<Wrapper>
			<StyledTemperature value="11.84" />
			<MainWeather>Rain</MainWeather>
			<HumidityAndWind>
				<WeatherItem title="HUMIDITY">83%</WeatherItem>
				<VerticalDivider />
				<WeatherItem title="WIND">11.83 K/M</WeatherItem>
			</HumidityAndWind>
		</Wrapper>
	)
};

export default Weather;
