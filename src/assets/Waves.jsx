// Waves.jsx
import styled from 'styled-components';
import wavesUrl from '../assets/waves.svg';

const WavesContainer = styled.div`
  position: absolute;
  top: 89%;
  left: 0;
  width: 100%;
`

const Waves = () => (
  <WavesContainer className="waves-container">
    <img src={wavesUrl} alt="Waves" style={{ width: '100%', height: '65px' }} />
  </WavesContainer>
);

export default Waves;
