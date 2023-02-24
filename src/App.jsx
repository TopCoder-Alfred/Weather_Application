import styled from 'styled-components';
import LocalWeather from './components/local-weather/LocalWeather';
import GlobalStyles from './GlobalStyles';

const BackgroundImage = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	display: grid;
	place-items: center;
	background-image: url('../assets/images/background-img.jpg');
	background-size: cover;
	background-position: center;
`;
const Container = styled.div`
	border-radius: 3.2rem;
	/* box-shadow: 0 0 16px rgb(0 0 0 / 50%); */
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3);
	background-color: white;
	width: 80rem;
`;

const Layout = styled.div`
	display: flex;
	padding: 3.6rem 0;
`;

const VerticalDivider = styled.div`
	width: 0.3rem;
	background-color: rgba(0, 0, 0, 0.1);
`;

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BackgroundImage>
				<Container>
					<LocalWeather />
					<Layout>
						<div>OtherCity</div>
						<VerticalDivider />
						<div>Forecast</div>
					</Layout>
				</Container>
			</BackgroundImage>
		</>
	);
};

export default App;
