import styled from 'styled-components';
import { color, shape } from '../styles';

const Input = styled.input `
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid ${color.secondary};
	border-radius: ${shape.borderRadius};
    box-sizing: border-box;
	background: ${color.backgroundMedium};
	color: ${color.secondary};
    font-weight: 4;
	letter-spacing: 0.1rem;

	&:hover {
		cursor: pointer;
	}
`;

export {
    Input
}