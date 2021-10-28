import styled from 'styled-components';

const commonHeadingStyles = `
	font-weight: bold;
	margin-bottom: 1rem;
	line-height: 150%;
	font-family: 'Nunito Sans', sans-serif;
`;

const H1 = styled.h1`
	${commonHeadingStyles}
	font-size: 3rem;
`;

const H2 = styled.h2`
	${commonHeadingStyles}
	font-size: 2.4rem;
`;

const H3 = styled.h3`
	${commonHeadingStyles}
	font-size: 2rem;
`;

const H4 = styled.h4`
	${commonHeadingStyles}
	font-size: 1.8rem;
`;

const P = styled.p`
	font-size: 2rem;
	line-height: 120%;
	font-family: 'Nunito Sans', sans-serif;
`;

const LI = styled.li`
	font-size: 2rem;
	line-height: 120%;
	font-family: 'Nunito Sans', sans-serif;
`;

const label = styled.label`
	font-size: 2rem;
	line-height: 120%;
	font-family: 'Nunito Sans', sans-serif;
	`;

export {
	H1,
	H2,
	H3,
	H4,
	P,
	LI,
	label
}