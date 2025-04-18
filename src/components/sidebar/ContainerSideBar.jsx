import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = styled.div`
  grid-area: "sideContent";
  color: #fff;
`

const SideContenedor = ({ children }) => {
  return (
    <>
      <Container>
        {children}
      </Container>
    </>
  )
}

SideContenedor.propTypes = {
  children: PropTypes.node.isRequired,
}
export default SideContenedor