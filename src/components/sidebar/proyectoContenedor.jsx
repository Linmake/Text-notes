import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useContext } from 'react';
import { positionSideContext } from '@context/SideProv';

const Div = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;
border-bottom: 1px solid #66666694;
&.bttn-plus{
  cursor: pointer;
  margin-bottom: 3%;
}
&>span{
margin-right: 25%;
margin-bottom: 3%;
}
`
const ProyectoContenedor = () => {

  const { setAddNewFile, setAddNewFolder, statusSelectFolder } = useContext(positionSideContext)

  const handlerFolders = () => {
    setAddNewFolder(true);
  };

  const handlerFiles = () => {
    if (statusSelectFolder) {
      setAddNewFile(true);
    }
    return
  };

  return (
    <Div className="proyecto-contenedor d-flex text-decoration-none mt-1 align-items-center text-white">
      <span className="fs-4 d-none d-sm-inline">Proyect</span>
      <button>
        <FontAwesomeIcon icon={faFileCirclePlus} className="bttn-plus" id="filePlusI" onClick={handlerFiles} />
      </button>
      <button>
        <FontAwesomeIcon icon={faFolderPlus} className="bttn-plus" id="folderPlusI" onClick={handlerFolders} />
      </button>
    </Div>
  )
}

export default ProyectoContenedor