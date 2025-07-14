import { useContext, useEffect, useRef } from 'react';
import { positionSideContext } from '../../../context/SideProv';
import NewFileComponent from './NewFileComponent';
import useCreateFile from '../Hook/useCreateFile';

const NewFile = ({ IdFolder }) => {
  const FileInput = useRef(null);
  const {
    addNewFile,
    setAddNewFile,
    statusSelectFolder
  } = useContext(positionSideContext);
  
  useEffect( () => {
    if (addNewFile) FileInput.current.focus()
    if (!statusSelectFolder) setAddNewFile(false)
  }, [
    addNewFile, 
    FileInput, 
    statusSelectFolder
  ]);
  
  const [create, onBlur] = useCreateFile() 

  const handlerNewFile = async(e) => {
    if (e.keyCode !== 13) return
    await create(FileInput, IdFolder)
  }

  return (
    <NewFileComponent 
      FileInput={FileInput}
      addNewFile={addNewFile}
      handlerNewFile={handlerNewFile}
      onBlur={onBlur}
    />
  );
}
export default NewFile