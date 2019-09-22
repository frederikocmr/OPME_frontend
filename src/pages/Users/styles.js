import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 20px;

  h1 {
    font-size: 40px;
    font-weight: bold;
  }

  svg {
    margin-right: 10px;
    font-size: 40px;
  }
`;

export const UsersList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  li {
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    background-color: #ffffff;
    border-radius: 4px;

    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }

  img {
    border: 2px solid #eee;
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }

  div {
    flex: 1;
    padding: 15px 20px;
    text-align: left;
    border-radius: 0 0 5px 5px;

    strong {
      font-size: 16px;
      color: #333;
      text-transform: uppercase;

      span {
        color: #333;
      }
    }

    p {
      font-size: 14px;
      line-height: 20px;
      color: #999;
      margin-top: 5px;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
