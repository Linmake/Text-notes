<<<<<<< HEAD
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Plantilla = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 97%;
`

const PlantillaBody = styled.div`
  display: grid;
  grid-template-areas: "header header" "aside main";
  grid-template-rows: 7% 96.1%;
  grid-template-columns: 20% 80%;
  width: 100%;
  height: 100%;
`

const PlantillaEditorComponent = ({ children }) => {
  return (
    <>
      <Plantilla>
        <PlantillaBody>{children}</PlantillaBody>
      </Plantilla>
    </>
  )
}

PlantillaEditorComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

=======
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Plantilla = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 97%;
`

const PlantillaBody = styled.div`
  display: grid;
  grid-template-areas: "header header" "aside main";
  grid-template-rows: 7% 96.1%;
  grid-template-columns: 20% 80%;
  width: 100%;
  height: 100%;
`

const PlantillaEditorComponent = ({ children }) => {
  return (
    <>
      <Plantilla>
        <PlantillaBody>{children}</PlantillaBody>
      </Plantilla>
    </>
  )
}

PlantillaEditorComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

>>>>>>> 1223f99ee06a0a92a5bd8f2f92bd5b31e4eb6a13
export default PlantillaEditorComponent