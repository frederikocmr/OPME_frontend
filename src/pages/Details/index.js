import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaCircleNotch } from 'react-icons/fa';

import api from '../../services/api';
import Container from '../../components/Container';
import { User, RepoList, Button, Loading } from './styles';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      repositories: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const username = decodeURIComponent(match.params.username);

    this.setState({ loading: true });

    try {
      const [repositories, details] = await Promise.all([
        api.get(`/users/${username}/repos`),
        api.get(`/users/${username}/details`),
      ]);

      this.setState({
        repositories: repositories.data,
        details: details.data,
        loading: false,
      });
    } catch (error) {
      if (error.message.indexOf('400')) {
        // eslint-disable-next-line no-alert
        alert(
          'A quantidade de consultas à API do Github ultrapassou o limite!' +
            '\nTente novamente daqui uma hora!'
        );
      }
    }
  }

  render() {
    const { details, repositories, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          <FaCircleNotch />
        </Loading>
      );
    }

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
            <strong>URL: </strong>
            <a href={details.profile_url}>{details.profile_url}</a>
          </p>
        </User>

        <RepoList>
          {repositories.map(repo => (
            <li key={String(repo.id)}>
              <div>
                <strong>{repo.name}</strong>
                <p>#{repo.id}</p>
                <p>{repo.url}</p>
              </div>
            </li>
          ))}
        </RepoList>
      </Container>
    );
  }
}

Details.propTypes = propTypes;

export default Details;
