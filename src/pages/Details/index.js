import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import Container from '../../components/Container';
import { User, RepoList, Button } from './styles';

export default function Details() {
  return (
    <Container>
      <User>
        <Link to="/">
          <Button>
            <FaArrowLeft /> Voltar
          </Button>
        </Link>
        <img src="https://avatars0.githubusercontent.com/u/1?v=4" alt="user" />
        <h1>login</h1>
        <p>userid</p>
      </User>

      <RepoList>
        <li>
          <div>
            <strong>repo</strong>
            <p>repo</p>
          </div>
        </li>
        <li>
          <div>
            <strong>repo</strong>
            <p>repo</p>
          </div>
        </li>
      </RepoList>
    </Container>
  );
}
