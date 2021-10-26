import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, shape } from '../styles';

import { P } from '../components/Text';

const FooterWrapper = styled.div`
	padding: 2px 5px;
	margin-top: 15px;
	background: ${color.backgroundDark};

	p {
		color: ${color.textPastry};
		text-decoration: none;
		font-size: 1.4rem;
		line-height: 300%;
	}
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<P> © Pastry Master 2021</P>
		</FooterWrapper>
	);
}

export {
	Footer
}