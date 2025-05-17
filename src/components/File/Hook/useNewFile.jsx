  import { useContext, useEffect, useRef } from 'react';
  import { v4 as uuidV4 } from 'uuid';
  
  import axios from 'axios';
import { positionSideContext } from '../../../context/SideProv.jsx';
import { UseData } from '../../../context/dataContext.jsx';
  /**
   * Guarda la creacion de un file con la tecla Enter, una vez ingresado el nombre
   * @param {*} e 
   * @returns file nuevo 
   */
export function useNewFile(event) {
  
    const {
      setAddNewFile,
      idFolderSelect,
    } = useContext(positionSideContext);

    const { folders, setFiles } = UseData()
  
  setAddNewFile(true);

  const handlerNewFile = async() => {

    if (event.keyCode !== 13) {
      return;
    } else {

      const IdFolder = idFolderSelect;

      const folder = folders.find(
        folder => folder.Id === IdFolder
      )

      if (!folder) {
        console.error(`Folder with id ${IdFolder} not found.`);
        return;
      }

      const newFile = {
        Id: uuidV4(),
        FolderId: folder.Id,
        Title: inputRefNewFile.current.value,
        Text: " "
      };

      const filesList = folder.Files;

      try {
        const resFiles = await axios.post(`http://localhost:4000/file/create`, newFile)
        setFiles([...filesList, newFile])
        inputRefNewFile.current.value = "";
        filesList.push(newFile);
        setAddNewFile(false);
        return resFiles
      } catch (error) {
        console.error(error);
      }
    }
  }
    const NewFileOnBlur = () => {
      setAddNewFile(false)
      const newFileName = inputRefNewFile.current.value
      if (newFileName === "" || newFileName.lentgh == 0) {
        setAddNewFile(false)
      }
      return
    }

    return(
      inputRefNewFile,
      handlerNewFile,
      NewFileOnBlur
    )
  }