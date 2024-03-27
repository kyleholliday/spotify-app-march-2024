import styled from 'styled-components/macro';

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLoginButton = styled.a`
  display: inline-block;
  background-color: #1db954;
  color: #ffffff;
  border-radius: 30px;
  font-weight: 700;
  font-size: 18px;
  padding: 14px 20px;

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://holliday-spotify-app-1268cb18a08c.herokuapp.com/login';

const Login = () => (
  <StyledLoginContainer>
    <StyledLoginButton href={LOGIN_URI}>Log in to Spotify</StyledLoginButton>
  </StyledLoginContainer>
);

export default Login;
