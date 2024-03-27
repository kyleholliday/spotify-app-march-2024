import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { accessToken, logout } from './spotify';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import {
  Login,
  Profile,
  TopArtists,
  TopTracks,
  Playlists,
  Playlist,
} from './pages';

const StyledLogoutButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 30px;
  z-index: 10;
  @media (min-width: 768px) {
    right: 24px;
  }
`;

// Scroll to top of page when changing routes
// https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          {!token ? (
            <Login />
          ) : (
            <>
              <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
              <Router>
                <ScrollToTop />
                <Routes>
                  <Route path="/top-artists" element={<TopArtists />} />
                  <Route path="/top-tracks" element={<TopTracks />} />
                  <Route path="/playlists/:id" element={<Playlist />} />
                  <Route path="/playlists" element={<Playlists />} />
                  <Route path="/" element={<Profile />} />
                </Routes>
              </Router>
            </>
          )}
        </header>
      </div>
    </>
  );
}

export default App;
