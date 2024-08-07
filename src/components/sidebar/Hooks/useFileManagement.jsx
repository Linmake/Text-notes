import { useRef, } from "react";

const useFileManagement = () => {
  const inputRefNewFile = useRef(null);

  const handlerFiles = () => {
    setAddNewFile(true);
  };


  const saveFile = () => {
    const newFile = inputRefNewFile.current.value;
    if (newFile === "") {
      setAddNewFile(false);
      return;
    }
    const filesOrdened = [...files, newFile].sort();
    setFiles(filesOrdened);
    inputRefNewFile.current.value = "";
    setAddNewFile(false);
  }

  const handlerNewFiles = (event) => {
    if (event.keyCode !== 13) {
      setAddNewFile(false);
      return;
    }
    saveFile()
  };

  return (
    inputRefNewFile,
    saveFile,
    handlerFiles,
    handlerNewFiles
  )
}
export default useFileManagement