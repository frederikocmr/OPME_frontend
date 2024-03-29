import styled from 'styled-components';

export const User = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 160px;
    border-radius: 30%;
    margin-top: 20px;
    -webkit-box-shadow: 2px 17px 65px -20px rgba(179, 179, 179, 1);
    -moz-box-shadow: 2px 17px 65px -20px rgba(179, 179, 179, 1);
    box-shadow: 2px 17px 65px -20px rgba(179, 179, 179, 1);
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const Button = styled.button`
  font-size: 1em;
  background-color: #fff;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #eee;
  border-radius: 3px;
  text-align: center;

  svg {
    margin-right: 5px;
  }
`;

export const RepoList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: #fff;
    margin-top: 10px;

    -webkit-box-shadow: 2px 17px 65px -20px rgba(179, 179, 179, 1);
    -moz-box-shadow: 2px 17px 65px -20px rgba(179, 179, 179, 1);
    box-shadow: 2px 17px 65px -20px rgba(179, 179, 179, 1);

    &:hover {
      cursor: pointer;

      -webkit-box-shadow: 2px 17px 30px -20px #000;
      -moz-box-shadow: 2px 17px 30px -20px #000;
      box-shadow: 2px 17px 30px -20px #000;
    }
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
