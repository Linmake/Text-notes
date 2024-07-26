import PropTypes from 'prop-types';
import('../../sass/pages/plantillaEditor/css/PaginaPlanEditorTexto.css')

const PlantillaEditorComponent = ({ children }) => {
  return (
    <>
      <div className='plantilla-editor'>
        <div className='plantilla-body-editor'>{children}</div>
      </div>
    </>
  )
}

PlantillaEditorComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PlantillaEditorComponent