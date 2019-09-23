import React, { Component } from 'react';
import { FaGithub, FaCircleNotch } from 'react-icons/fa';
import BottomScrollListener from 'react-bottom-scroll-listener';

import api from '../../services/api';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import { Header, UsersList, StyledLink, LoadingBottom } from './styles';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      nextPage: 0,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    this.getUsers();
    this.setState({ loading: false });
  }

  handleOnDocumentBottom = () => {
    this.getUsers();
  };

  getUsers = async () => {
    const { nextPage, users } = this.state;

    const { data } = await api.get(`/users`, {
      params: {
        since: nextPage,
      },
    });

    users.push(...data.users);

    const next = data.next.split('=')[1];

    this.setState({
      users,
      nextPage: next,
    });
  };

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          <FaCircleNotch />
        </Loading>
      );
    }

    return (
      <Container>
        <Header>
          <FaGithub /> <h1>Users</h1>
        </Header>
        <UsersList>
          {users.map(user => (
            <StyledLink
              key={user.id}
              to={`/details/${encodeURIComponent(user.login)}`}
            >
              <li>
                <img src={user.avatar_url} alt="user" />
                <div>
                  <strong> {user.login} </strong>
                  <p>#{user.id}</p>
                </div>
              </li>
            </StyledLink>
          ))}
        </UsersList>

        <BottomScrollListener onBottom={this.handleOnDocumentBottom} />
        <LoadingBottom>
          <FaCircleNotch />
        </LoadingBottom>
      </Container>
    );
  }
}
