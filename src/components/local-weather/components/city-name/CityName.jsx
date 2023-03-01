import styled from 'styled-components';

const Container = styled.div`
	margin-top: 1rem;
	color: white;
	font-weight: 500;
	font-size: 2rem;
	&::after {
		content: '';
		display: block;
		margin-top: 0.5rem;
		height: 0.2rem;
		background: white;
		border-radius: 0.2rem;
		width: 50%;
		transform: translateX(50%);
	}
`;

const CityName = ({ name }) => {
	return <Container>{name}</Container>;
};

export default CityName;
