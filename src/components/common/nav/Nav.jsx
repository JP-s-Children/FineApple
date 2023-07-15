import React from 'react';
import styled from '@emotion/styled';
import { Flex, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MAIN_PATH } from '../../../constants/routes';
import { MenuList, ThemeButton, UserMenu, Logo } from '..';

const NavContainer = styled.nav`
	display: flex;
	align-items: center;
	height: 60px;
	min-width: 1280px;
	width: 100vw;
	background-color: var(--footer-bg-color);
	border-bottom: 1px solid var(--opacity-border-color);
	color: var(--font-color);
`;

const Wrapper = styled(Group)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
`;

const LogoLink = styled(Link)`
	display: inline-flex;
	justify-content: center;
	align-items: center;
`;

const Nav = () => (
	<NavContainer>
		<Flex justify="space-between" miw="1024px" m="0 auto">
			<Wrapper>
				<LogoLink to={MAIN_PATH}>
					<Logo clickable={true} />
				</LogoLink>
				<MenuList />
			</Wrapper>
			<Wrapper>
				<ThemeButton />
				<UserMenu />
			</Wrapper>
		</Flex>
	</NavContainer>
);

export default Nav;
