import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getCurrentUserPlaylists } from '../spotify';
import PlaylistsGrid from '../components/PlaylistsGrid';
import SectionWrapper from '../components/SectionWrapper';
import Loader from '../components/Loader';

const Playlists = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <main>
      <SectionWrapper title="Playlists" breadcrumb="true">
        {playlists && playlists.items ? (
          <PlaylistsGrid playlists={playlists.items} />
        ) : (
          <Loader />
        )}
      </SectionWrapper>
    </main>
  );
};

export default Playlists;
