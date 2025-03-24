
import { useState, useRef, useEffect } from 'react';

const useFolderManagement = () => {

  const [folders, setFolders] = useState(["folder 1", "folder 2"]);
  const [selectedFolderIndex, setSelectedFolderIndex] = useState(null);
  const [projectVoid, setProjectVoid] = useState(false);
  const [addNewFolder, setAddNewFolder] = useState(false);

  const inputRefNewFolder = useRef(null);

  const handlerFolders = () => {
    setAddNewFolder(true);
  };

  useEffect(() => {
    if (folders.length === 0) {
      setProjectVoid(true);
      return;
    }
    setProjectVoid(false);
  }, [folders]);

  const handlerNewFolders = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (inputRefNewFolder.current.value === "") {
      setAddNewFolder(false);
      return;
    }
    const newFolder = inputRefNewFolder.current.value;
    const foldersOrdened = [...folders, newFolder].sort();
    setFolders(foldersOrdened);
    inputRefNewFolder.current.value = "";
    setAddNewFolder(false);
    setProjectVoid(false);
  };


  useEffect(() => {
    if (addNewFolder) {
      inputRefNewFolder.current.focus();
    }
  }, [addNewFolder]);

  const inputFolderOnBlur = () => {
    const newFolder = inputRefNewFolder.current.value;
    if (newFolder === "") {
      setAddNewFolder(false);
      if (folders.length === 0) {
        setProjectVoid(true);
        return;
      }
      return;
    }
    const foldersOrdened = [...folders, newFolder].sort();
    setFolders(foldersOrdened);
    inputRefNewFolder.current.value = "";
    setAddNewFolder(false);
    setProjectVoid(false);
  };

  const handlerSelectFolder = (index) => {
    setSelectedFolderIndex(index);
    setStatusSelectFolder(true);
  };

  return {
    folders,
    setFolders,
    inputRefNewFolder,
    handlerSelectFolder,
    inputFolderOnBlur,
    handlerNewFolders,
    handlerFolders,
  }

}

export default useFolderManagement