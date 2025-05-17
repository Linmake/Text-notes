import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
gap: 1rem;
min-height: 90vh;
min-width: 100%;
box-sizing: border-box;
` 

const ContainerFolders = ({ children }) => {
  return (
    <>
      <Container>
        {children}
      </Container>
    </>
  )
}

ContainerFolders.propTypes = {
  children: PropTypes.node.isRequired,
}
export default ContainerFolders