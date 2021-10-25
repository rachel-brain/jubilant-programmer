import styled from 'styled-components';
import logo from '../images/Pastry_Master_CMYK_small.png';
import { Link } from 'react-router-dom';
import { color, shape } from '../styles';

const HeaderWrapper = styled.div`
	padding: 10px 20px;
	background: ${color.backgroundDark};
`;

const Header = ({
	location,
	text
}) => {
	return (
		<HeaderWrapper>
			<Link to={location}>{text}
      <img src={ logo } height={200} width={260} alt='pastry master logo' />
      </Link>
		</HeaderWrapper>
	)
}

export {
	Header
}