import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { positionSideContext } from '../../context/SideProv';
import axios from 'axios';
import { UseData } from '../../context/dataContext';
import newFile from '../../assets/newFile.svg'
import newFolder from '../../assets/newFolder.svg'
import { get } from 'mongoose';

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #66666694;
  width: 89%;
  &.bttn-plus {
    cursor: pointer;
    margin-bottom: 5%;
  }
  & > span {
    margin-right: 45%;
    margin-bottom: 3%;
  }
`;

const Btn = styled.button`
width: 3rem;
height: 3rem;
border: none;
padding-bottom: 0.2rem;
background-color: RGBA(33,37,41, 0.7);
`
const Icon = styled.img`
  width: 2rem;
  height: auto;
`

const ProyectoContenedor = () => {
  const { setAddNewFile, setAddNewFolder, statusSelectFolder } = useContext(positionSideContext);
  const [proyect, setProyect] = useState(null);
  const { setProyects } = useContext(positionSideContext);

  const DbUrl = "http://localhost:4000/";

  const currentPath = window.location.pathname
  const segmentsPath = currentPath.split("/").filter(Boolean)
  const idProyect = segmentsPath[1]

  useEffect( () => {
    const getProyect = async () => {
      try {    
        const res = await axios({
          url: `http://localhost:4000/proyect/${idProyect}`,
          method: "GET",
        })
        return res
      } catch (error) {
        console.error('Error fetching project:', error.response ? error.response.data : error.message);
        console.log(`${DbUrl}proyect/${idProyect}`)
      }
    };
    
    const fetchProyects = async() => {
      const resFetch = await getProyect()
      if(resFetch && resFetch.status === 200){
        setProyect(resFetch.data)
        console.log(proyect)
      }else{
        console.error(new Error("Error del servidor"))
        console.log(proyect)
      }
    }
    
    fetchProyects()
    
  }, [setProyect])
  /**
   * Activa la creacion de un nuevo Folder
   */
  const handlerFolders = () => {
    setAddNewFolder(true);
  };

  /**
   * Activa la creacion de un nuevo File
   */
  const handlerFiles = () => {
    if (statusSelectFolder) {
      setAddNewFile(true);
    }
  };

  return (
    <Div className="proyecto-contenedor d-flex text-decoration-none mt-1 align-items-center text-white">
      <span className="fs-4 d-none d-sm-inline">{proyect.Title}</span>
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
