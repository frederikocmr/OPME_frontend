import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from '../../components/Container';
import { Header, UsersList, StyledLink } from './styles';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          login: 'mojombo',
          avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        },
        {
          id: 2,
          login: 'defunkt',
          avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        },
        {
          id: 3,
          login: 'pjhyett',
          avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        },
        {
          id: 4,
          login: 'wycats',
          avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
        },
        {
          id: 5,
          login: 'ezmobius',
          avatar_url: 'https://avatars0.githubusercontent.com/u/5?v=4',
        },
        {
          id: 6,
          login: 'ivey',
          avatar_url: 'https://avatars0.githubusercontent.com/u/6?v=4',
        },
        {
          id: 7,
          login: 'evanphx',
          avatar_url: 'https://avatars0.githubusercontent.com/u/7?v=4',
        },
        {
          id: 17,
          login: 'vanpelt',
          avatar_url: 'https://avatars1.githubusercontent.com/u/17?v=4',
        },
        {
          id: 18,
          login: 'wayneeseguin',
          avatar_url: 'https://avatars0.githubusercontent.com/u/18?v=4',
        },
        {
          id: 19,
          login: 'brynary',
          avatar_url: 'https://avatars0.githubusercontent.com/u/19?v=4',
        },
        {
          id: 20,
          login: 'kevinclark',
          avatar_url: 'https://avatars3.githubusercontent.com/u/20?v=4',
        },
        {
          id: 21,
          login: 'technoweenie',
          avatar_url: 'https://avatars3.githubusercontent.com/u/21?v=4',
        },
        {
          id: 22,
          login: 'macournoyer',
          avatar_url: 'https://avatars3.githubusercontent.com/u/22?v=4',
        },
        {
          id: 23,
          login: 'takeo',
          avatar_url: 'https://avatars3.githubusercontent.com/u/23?v=4',
        },
        {
          id: 25,
          login: 'caged',
          avatar_url: 'https://avatars3.githubusercontent.com/u/25?v=4',
        },
        {
          id: 26,
          login: 'topfunky',
          avatar_url: 'https://avatars3.githubusercontent.com/u/26?v=4',
        },
        {
          id: 27,
          login: 'anotherjesse',
          avatar_url: 'https://avatars3.githubusercontent.com/u/27?v=4',
        },
        {
          id: 28,
          login: 'roland',
          avatar_url: 'https://avatars2.githubusercontent.com/u/28?v=4',
        },
        {
          id: 29,
          login: 'lukas',
          avatar_url: 'https://avatars2.githubusercontent.com/u/29?v=4',
        },
        {
          id: 30,
          login: 'fanvsfan',
          avatar_url: 'https://avatars2.githubusercontent.com/u/30?v=4',
        },
        {
          id: 31,
          login: 'tomtt',
          avatar_url: 'https://avatars2.githubusercontent.com/u/31?v=4',
        },
        {
          id: 32,
          login: 'railsjitsu',
          avatar_url: 'https://avatars2.githubusercontent.com/u/32?v=4',
        },
        {
          id: 34,
          login: 'nitay',
          avatar_url: 'https://avatars2.githubusercontent.com/u/34?v=4',
        },
        {
          id: 35,
          login: 'kevwil',
          avatar_url: 'https://avatars2.githubusercontent.com/u/35?v=4',
        },
        {
          id: 36,
          login: 'KirinDave',
          avatar_url: 'https://avatars2.githubusercontent.com/u/36?v=4',
        },
        {
          id: 37,
          login: 'jamesgolick',
          avatar_url: 'https://avatars2.githubusercontent.com/u/37?v=4',
        },
        {
          id: 38,
          login: 'atmos',
          avatar_url: 'https://avatars3.githubusercontent.com/u/38?v=4',
        },
        {
          id: 44,
          login: 'errfree',
          avatar_url: 'https://avatars2.githubusercontent.com/u/44?v=4',
        },
        {
          id: 45,
          login: 'mojodna',
          avatar_url: 'https://avatars2.githubusercontent.com/u/45?v=4',
        },
        {
          id: 46,
          login: 'bmizerany',
          avatar_url: 'https://avatars2.githubusercontent.com/u/46?v=4',
        },
      ],
      loading: false,
    };
  }

  render() {
    const { users, loading } = this.state;

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
      </Container>
    );
  }
}
