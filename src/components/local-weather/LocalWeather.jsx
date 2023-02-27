import styled from 'styled-components';
import BackgroundImage from '../background-image';
import Weather from './components/weather';

const Layout = styled.div`
	display: flex;
	color: white;
	padding: 6.4rem 9.6rem;
	justify-content: space-between;
`

const LocalWeather = () => {
	return <BackgroundImage imgUrl='../../../assets/images/background-img1.jpg'>
		<Layout>
			<Weather />
			<div>CityName</div>
		</Layout>
	</BackgroundImage>;
};

export default LocalWeather;
