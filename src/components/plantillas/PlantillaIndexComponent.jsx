import PropTypes from 'prop-types';
import('../../sass/pages/plantillaIndex/css/PaginaPlanIndex.css')

const PlantillaIndexComponent = ({ children }) => {
  return (
    <>
      <div className='plantilla-index'>
        <div className='plantilla-body-index'>{children}</div>
      </div>
    </>
  )
}
PlantillaIndexComponent.propTypes = {
  children: PropTypes.node.isRequired,
}
export default PlantillaIndexComponent