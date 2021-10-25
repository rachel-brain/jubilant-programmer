import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, shape } from '../styles';

const FooterWrapper = styled.div`
	padding: 2px 5px;
	background: ${color.backgroundDark};

	a {
		color: ${color.textPastry};
		text-decoration: none;
		font-size: 1.2rem;
	}
`;

const Footer = ({
	location,
	text
}) => {
	return (
		<FooterWrapper>
			<Link to={location}>{text} © Pastry Master 2021</Link>
		</FooterWrapper>
	);
}

export {
	Footer
}