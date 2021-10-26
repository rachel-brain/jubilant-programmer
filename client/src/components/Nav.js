import React from "react";
import Auth from "../utils/auth";
import logo from '../images/Pastry_Master_CMYK_small.png';
import { Link } from "react-router-dom";
import { color, shape } from '../styles';

import styled from 'styled-components';

const Header = styled.header`
	// padding: 20px;
	// background: ${color.backgroundDark};
`;

const StyledNav = styled.nav`
	display: flex;
`;

const NavigationList = styled.ul`
	display: flex;
	vertical-align: top;
	width: 100%;

	${props => props.float && `
		justify-content: end;
	`}
`;

const NavigationItem = styled.li`
	margin: 1rem;
	padding: 1rem;
	border-radius: ${shape.borderRadius};

	a {
		color: ${color.textSunset};
		text-decoration: none;
		font-size: 1.6rem;
	}

	&:hover {
		background: ${color.backgroundMedium};
	}
`;

function AuthNav() {
	if (Auth.loggedIn()) {
		return (
			<NavigationList float="right">
				<NavigationItem>
					<a href="/" onClick={() => Auth.logout()}>
						Logout
					</a>
				</NavigationItem>
			</NavigationList>
		);
	} else {
		return (
			<NavigationList float="right">
				<NavigationItem>
					<Link to="/signup">
						Signup
					</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/login">
						Login
					</Link>
				</NavigationItem>
			</NavigationList>
		);
	}
}

function Nav() {
  return (
    <Header>
		<StyledNav>
		<img src={ logo } height={200} width={260} alt='pastry master logo' />
			<NavigationList>
				<NavigationItem>
					<Link to="/">
						Home
					</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/about">
						About
					</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/products">
						Products
					</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/delivery">
						Delivery
					</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/testimonials">
						Testimonials
					</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/who">
						Who we are
					</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/contact">
						Contact us
					</Link>
				</NavigationItem>
			</NavigationList>
			<AuthNav />
		</StyledNav>
    </Header>
  );
}

// export default AuthNav;

export default Nav;