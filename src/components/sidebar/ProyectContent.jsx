import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { positionSideContext } from '../../context/SideProv';
import axios from 'axios';
import { UseData } from '../../context/dataContext';
import newFile from '../../assets/newFile.svg'
import newFolder from '../../assets/newFolder.svg'

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #66666694;
  width: 89%;
  &.bttn-plus {
    cursor: pointer;
    margin-bottom: 3%;
  }
  & > span {
    margin-right: 20%;
    margin-bottom: 2%;
  }
`;

const Btn = styled.button`
width: 100%;
height: 35px;
background-color: RGBA(33,37,41, 0.7);
border: none;
padding-bottom: 5px;
`
const Icon = styled.img`
  width: 2rem;
  height: auto;
  line-height: ;
`

const ProyectoContenedor = () => {
  const { setAddNewFile, setAddNewFolder, statusSelectFolder } = useContext(positionSideContext);
  const [proyect, setProyect] = useState(null);

  const { data } = UseData();

  const urlBase = "http://localhost:4000/";

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${urlBase}proyect/${data.key}`);
        setProyect(res.data);
      } catch (error) {
        console.error('Error fetching project:', error.response ? error.response.data : error.message);
      }
    };
    if (data) {
      fetch();
    }
  }, [data]);

  const handlerFolders = () => {
    setAddNewFolder(true);
  };

  const handlerFiles = () => {
    if (statusSelectFolder) {
      setAddNewFile(true);
    }
  };

  return (
    <Div className="proyecto-contenedor d-flex text-decoration-none mt-1 align-items-center text-white">
      <span className="fs-4 d-none d-sm-inline">{proyect ? proyect.Title : ''}</span>
      <Btn>
        <Icon src={newFile} alt="" className="bttn-plus" id="filePlusI"
          onClick={handlerFiles} />
      </Btn>
      <Btn>
        <Icon src={newFolder} alt="" className="bttn-plus"
          id="folderPlusI"
          onClick={handlerFolders} />
      </Btn>
    </Div>
  );
};

export default ProyectoContenedor;
