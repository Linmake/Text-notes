// Waves.jsx
import styled from 'styled-components';
import wavesUrl from '../assets/waves.svg';

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
`

const Waves = () => (
  <WavesContainer className="waves-container">
    <img src={wavesUrl} alt="Waves" style={{ width: '100%', height: '65px' }} />
  </WavesContainer>
);

export default Waves;
