import styled, { keyframes } from 'styled-components';

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }

  li {
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    background-color: #ffffff;
    border-radius: 4px;
    -webkit-box-shadow: 2px 17px 65px -20px rgba(179, 179, 179, 1);
    -moz-box-shadow: 2px 17px 65px -20px rgba(179, 179, 179, 1);
    box-shadow: 2px 17px 65px -20px rgba(179, 179, 179, 1);
    &:hover {
      background-color: #eee;
      cursor: pointer;
      -webkit-box-shadow: 2px 17px 65px -20px #000;
      -moz-box-shadow: 2px 17px 65px -20px #000;
      box-shadow: 2px 17px 65px -20px #000;
    }
  }

  img {
    border: 2px solid #eee;
    max-width: 100%;
    border-radius: 5px 5px 0 0;
    height: 200px;
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`;

export const LoadingBottom = styled.div`
  justify-content: center;
  display: flex;
  font-size: 30px;
  align-items: center;
  height: 30px;

  svg {
    margin-right: 10px;
    animation: ${rotate} 2s linear infinite;
  }
`;
