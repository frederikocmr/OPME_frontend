import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`;

const Loading = styled.div`
  justify-content: center;
  display: flex;
  font-size: 40px;
  align-items: center;
  height: 100vh;

  svg {
    margin-right: 10px;
    animation: ${rotate} 2s linear infinite;
  }
`;

export default Loading;
