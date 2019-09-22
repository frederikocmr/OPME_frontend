import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import Container from '../../components/Container';
import { User, RepoList, Button } from './styles';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        id: 35873365,
        login: 'frederikocmr',
        profile_url: 'https://api.github.com/users/frederikocmr',
        avatar_url: 'https://avatars0.githubusercontent.com/u/35873365?v=4',
        login_creation: '2018-01-27T16:41:07Z',
      },
      repositories: [
        {
          id: 122229486,
          name: 'AngularAdmin',
          url: 'https://api.github.com/repos/frederikocmr/AngularAdmin',
        },
        {
          id: 119603832,
          name: 'AngularFirebaseApp',
          url: 'https://api.github.com/repos/frederikocmr/AngularFirebaseApp',
        },
        {
          id: 205736603,
          name: 'car-bot-ia',
          url: 'https://api.github.com/repos/frederikocmr/car-bot-ia',
        },
        {
          id: 137438833,
          name: 'ComputacaoGraficaC',
          url: 'https://api.github.com/repos/frederikocmr/ComputacaoGraficaC',
        },
        {
          id: 161072009,
          name: 'ControleEstoquePHP',
          url: 'https://api.github.com/repos/frederikocmr/ControleEstoquePHP',
        },
        {
          id: 209412748,
          name: 'FIPE',
          url: 'https://api.github.com/repos/frederikocmr/FIPE',
        },
        {
          id: 150365842,
          name: 'IndicadorDeCarros_Watson_ChatBot',
          url:
            'https://api.github.com/repos/frederikocmr/IndicadorDeCarros_Watson_ChatBot',
        },
        {
          id: 145254591,
          name: 'InquilioApp',
          url: 'https://api.github.com/repos/frederikocmr/InquilioApp',
        },
        {
          id: 135861950,
          name: 'Ionic_Test_App',
          url: 'https://api.github.com/repos/frederikocmr/Ionic_Test_App',
        },
        {
          id: 145501626,
          name: 'Java8CRUD',
          url: 'https://api.github.com/repos/frederikocmr/Java8CRUD',
        },
        {
          id: 203695610,
          name: 'MERN_Stack',
          url: 'https://api.github.com/repos/frederikocmr/MERN_Stack',
        },
        {
          id: 204107451,
          name: 'Node_Challenge',
          url: 'https://api.github.com/repos/frederikocmr/Node_Challenge',
        },
        {
          id: 205578747,
          name: 'Node_Complete_Backend',
          url:
            'https://api.github.com/repos/frederikocmr/Node_Complete_Backend',
        },
        {
          id: 135636922,
          name: 'ProjetoCppQt',
          url: 'https://api.github.com/repos/frederikocmr/ProjetoCppQt',
        },
        {
          id: 147443138,
          name: 'Rainbow-Android-SDK-Samples',
          url:
            'https://api.github.com/repos/frederikocmr/Rainbow-Android-SDK-Samples',
        },
        {
          id: 206222990,
          name: 'ReactJS_App',
          url: 'https://api.github.com/repos/frederikocmr/ReactJS_App',
        },
        {
          id: 205977980,
          name: 'ReactJS_Base_App',
          url: 'https://api.github.com/repos/frederikocmr/ReactJS_Base_App',
        },
        {
          id: 200392744,
          name: 'ReactNativeCattleManagement',
          url:
            'https://api.github.com/repos/frederikocmr/ReactNativeCattleManagement',
        },
        {
          id: 207063553,
          name: 'ReactNative_App',
          url: 'https://api.github.com/repos/frederikocmr/ReactNative_App',
        },
      ],
      loading: false,
    };
  }

  render() {
    const { details, repositories, loading } = this.state;

    return (
      <Container>
        <User>
          <Link to="/">
            <Button>
              <FaArrowLeft /> Return
            </Button>
          </Link>

          <img src={details.avatar_url} alt={details.login} />
          <h1>{details.login}</h1>
          <p>
            <strong>ID:</strong> {details.id}
          </p>
          <p>
            <strong>Created at: </strong>
            {new Date(details.login_creation).toLocaleString()}
          </p>
          <p>
            <strong>URL:</strong> {details.profile_url}
          </p>
        </User>

        <RepoList>
          {repositories.map(repo => (
            <li>
              <div>
                <strong>{repo.name}</strong>
                <p>#{repo.id}</p>
              </div>
            </li>
          ))}
        </RepoList>
      </Container>
    );
  }
}
