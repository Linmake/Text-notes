import useFolderManagement from '../../components/sidebar/Hooks/useFolderManagement';
import useSidebarManagement from '../../components/sidebar/Hooks/useSidebarManagement';
import styled from 'styled-components';
import { navItem } from './Hooks/themaStyled';

const Li = styled.li`
  box-sizing: border-box;
  margin-top: 25%;
  &.nav-item{
    ${navItem}
  }
  &.nav-link-carpetas-vacias{
    box-sizing: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
  &.texto{
    font-size: 1.2rem;
    white-space: wrap;
  }
  }
  &.btn-nueva-carpeta{
    background-color: #1d87f9;
    color: #fff;
    border: none;
    width: 210px;
    height: 45px;
    font-size: 1.1rem;
    &:hover{
      background-color: #3393f9;
      color: #fff;
      border: none;
      width: 210px;
      height: 45px;
      font-size: 1.1rem;
    }
  }
  &.hidden{
    transform: translateX(-78%);
  }
`

const SinFoldersContenedor = () => {

  const { addNewFolder, handlerFolders } = useFolderManagement([]);
  const { proyectoVacio } = useSidebarManagement([]);

  return (
    <Li className={`nav-item contenedor-folder-vacio ${(addNewFolder) ? 'hidden' : ''} ${(proyectoVacio) ? '' : 'hiddens'}`}>
      <div className="nav-link-carpetas-vacias text-white">
        <p className='texto'>
          Todavía no ha agregado una carpeta al área de trabajo.
        </p>
        <br />
        <button className="btn-nueva-carpeta" onClick={handlerFolders}>Nueva carpeta</button>
      </div>
    </Li>
  )
}

export default SinFoldersContenedor