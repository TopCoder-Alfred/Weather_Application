import styled from 'styled-components';

const BackgroundImage = styled.div`
	background-image: url(${({ imgUrl }) => imgUrl});
	background-position: center;
	background-size: cover;
`;

export default BackgroundImage;
