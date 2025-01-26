import PropTypes from 'prop-types';
import styled from 'styled-components'

const DivSideContenedor = styled.div`
  grid-area: "sideContent";
  height: 90%;
  position: relative !important;
  top: 10px;
  left: 10px;
  color: #fff;
  border: none;
`

const SideContenedor = ({ children }) => {
  return (
    <>
      <DivSideContenedor>
        {children}
      </DivSideContenedor>
    </>
  )
}

SideContenedor.propTypes = {
  children: PropTypes.node.isRequired,
}
export default SideContenedor