// Waves.jsx
import styled from 'styled-components';
import wavesUrl from './waves.svg';

const sizes = {
  laptop: 1920,
}

const media = {
  laptop: `(min-width: ${sizes.laptop})`,
}

const WavesContainer = styled.div`
  position: relative;
  top: 88%;
  right: 0;
  width: 100%;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
`

const Waves = () => (
  <WavesContainer className="waves-container">
    <img src={wavesUrl} alt="Waves" style={{ width: '100%', height: '65px' }} />
  </WavesContainer>
);

export default Waves;
