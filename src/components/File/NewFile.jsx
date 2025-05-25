import { useContext, useEffect, useRef } from 'react';
import { positionSideContext } from '../../context/SideProv';
import useCreateFile from './useCreateFile';
import NewFileComponent from './components/NewFileComponent';

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

  const handlerNewFile = async(event) => {
    if (event.keyCode !== 13) return
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