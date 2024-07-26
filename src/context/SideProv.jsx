import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export let positionSideContext = createContext(true);

export const SideProv = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [addNewFolder, setAddNewFolder] = useState(false);
  const [addNewFile, setAddNewFile] = useState(false);
  const [proyectoVacio, setProyectoVacio] = useState(false);
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedFolderIndex, setSelectedFolderIndex] = useState(null);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const [statusSelectFolder, setStatusSelectFolder] = useState(false);
  const [statusSelectFile, setStatusSelectFile] = useState(false);

  return (
    <positionSideContext.Provider value={{ sidebarVisible, setSidebarVisible, addNewFolder, setAddNewFolder, addNewFile, setAddNewFile, setProyectoVacio, proyectoVacio, folders, setFolders, files, setFiles, selectedFolderIndex, setSelectedFolderIndex, selectedFileIndex, setSelectedFileIndex, statusSelectFolder, setStatusSelectFolder, statusSelectFile, setStatusSelectFile }}>
      {children}
    </positionSideContext.Provider>
  );
};

SideProv.propTypes = {
  children: PropTypes.node.isRequired,
};
