import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from '../../components/Container';
import { Header, UsersList, StyledLink } from './styles';

export default function Users() {
  return (
    <Container>
      <Header>
        <FaGithub /> <h1>Usuários</h1>
      </Header>
      <UsersList>
        <StyledLink to="/details/freds">
          <li>
            <img
              src="https://avatars0.githubusercontent.com/u/1?v=4"
              alt="user"
            />
            <div>
              <strong> Teste </strong>
              <p>Teste</p>
            </div>
          </li>
        </StyledLink>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/1?v=4"
            alt="user"
          />
          <div>
            <strong> Teste </strong>
            <p>Teste</p>
          </div>
        </li>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/1?v=4"
            alt="user"
          />
          <div>
            <strong> Teste </strong>
            <p>Teste</p>
          </div>
        </li>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/1?v=4"
            alt="user"
          />
          <div>
            <strong> Teste </strong>
            <p>Teste</p>
          </div>
        </li>
      </UsersList>
    </Container>
  );
}
