import { useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';
import axios from 'axios';
import { positionSideContext } from '../../../context/SideProv.jsx';
import { UseData } from '../../../context/dataContext.jsx';
import GetUserId from '../../Hooks/GetUserId/GetUserId.jsx';

const useCreateFile = () => {
 
  const {
   setAddNewFile,
 } = useContext(positionSideContext);
 
 const { folders, setFiles } = UseData()
  
 const handlerCreate = async(FileInput, IdFolder) => {
   try {
     const folder = folders.find(
        folder => folder.Id === IdFolder
      )  
      const UserId = await GetUserId();
      if (!folder) return
      const newFile = {
        Id: uuidV4(),
        FolderId: folder.Id,
        Title: FileInput.current.value,
        Text: "",
        UserId: UserId
      };
      const filesList = folder.Files;
      const {data, status} = await axios.post(`http://localhost:4000/file/create`, newFile, {withCredentials: true})
      if(status !== 201) return console.error(data);
      setFiles([...filesList, newFile])
      FileInput.current.value = "";
      filesList.push(newFile);
      setAddNewFile(false);
    } catch (error) {
      console.error(error);
    }
  }

  const onBlur = () => {
    try{
      setAddNewFile(false)
    }catch(error){
      console.error(error);
    }
  }
  
  return [handlerCreate, onBlur]
}

export default useCreateFile