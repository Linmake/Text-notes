<<<<<<< HEAD
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Plantilla = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5rem;
  overflow: hidden;
  position: relative;
  background-color: white;
`

const PlantillaBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const PlantillaNoProyectsComponent = ({ children }) => {
  return (
    <Plantilla>
      <PlantillaBody>{children}</PlantillaBody>
    </Plantilla>
  )
}

PlantillaNoProyectsComponent.propTypes = {
  children: PropTypes.node.isRequired,
=======
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Plantilla = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5rem;
  overflow: hidden;
  position: relative;
  background-color: white;
`

const PlantillaBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const PlantillaNoProyectsComponent = ({ children }) => {
  return (
    <Plantilla>
      <PlantillaBody>{children}</PlantillaBody>
    </Plantilla>
  )
}

PlantillaNoProyectsComponent.propTypes = {
  children: PropTypes.node.isRequired,
>>>>>>> 1223f99ee06a0a92a5bd8f2f92bd5b31e4eb6a13
}