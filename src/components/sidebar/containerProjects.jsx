import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = styled.div`
box-sizing: content-box;
margin-top: 3.5rem;
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
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