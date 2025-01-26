<<<<<<< HEAD
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
=======
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
>>>>>>> 1223f99ee06a0a92a5bd8f2f92bd5b31e4eb6a13
export default SideContenedor