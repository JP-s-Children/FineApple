import React from 'react';
import styled from '@emotion/styled';
import { Container } from '@mantine/core';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
	margin: 3px auto 0;
	padding: 14px 0px;
	width: 100%;
	min-width: 1280px;
	border-bottom: 1px solid var(--opacity-border-color);
	background-color: var(--body-bg-color);
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	position: sticky;
	top: 0;
	z-index: 99;
`;

const Wrapper = styled(Container)`
	width: 1024px;
	min-width: 1024px;
	display: flex;
	justify-content: space-between;
	font-size: 0.75rem;
	padding: 0px;
`;

const Title = styled(Link)`
	font-size: 18px;
	font-weight: 600;
	color: var(--font-color);
	text-decoration: none;
	margin-left: 20px;

	:hover {
		color: var(--hover-font-color);
	}
`;

const MenuWrapper = styled.div`
	display: flex;
	gap: 15px;
`;

const Menu = styled(Title)`
	padding-top: 0.2rem;
	font-size: 14px;
	font-weight: 400;
`;

/**
 * @param {{
 * title: {path: string, content: string}
 * menuList: Array<{path: string, content: string}>
 * }} props
 */
const Header = ({ title, menuList }) => (
	<HeaderContainer>
		<Wrapper>
			<Title to={title.path}>{title.content}</Title>
			<MenuWrapper>
				{menuList.map(({ path, content }) => (
					<Menu key={content} to={path}>
						{content}
					</Menu>
				))}
			</MenuWrapper>
		</Wrapper>
	</HeaderContainer>
);

export default Header;
