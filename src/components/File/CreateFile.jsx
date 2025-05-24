import { useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';

import axios from 'axios';
import { positionSideContext } from '../../context/SideProv.jsx';
import { UseData } from '../../context/dataContext.jsx';
/**
 * Guarda la creacion de un file con la tecla Enter {Code: 13}
 * @param {String} FileInput 
 * @param {String} IdFolder 
 * @returns Void
 */
const CreateFile = async(FileInput, IdFolder) => {
  const {
    setAddNewFile,
  } = useContext(positionSideContext);

  const { folders, setFiles } = UseData()
    
    const folder = folders.find(
      folder => folder.Id === IdFolder
    )

    if (!folder) return

    const newFile = {
      Id: uuidV4(),
      FolderId: folder.Id,
      Title: FileInput.current.value,
      Text: " "
    };

    const filesList = folder.Files;

    try {
      const {data, status} = await axios.post(`http://localhost:4000/file/create`, newFile)
      if(status !== 201) return console.error(data);
      setFiles([...filesList, newFile])
      FileInput.current.value = "";
      filesList.push(newFile);
      setAddNewFile(false);
      return
    } catch (error) {
      console.error(error);
    }
  }

export default CreateFile