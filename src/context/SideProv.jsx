<<<<<<< HEAD
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const positionSideContext = createContext(true);

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
  const [proyects, setProyects] = useState([]);
  return (
    <positionSideContext.Provider value={{
      sidebarVisible, setSidebarVisible,
      addNewFolder, setAddNewFolder,
      addNewFile, setAddNewFile,
      proyectoVacio, setProyectoVacio,
      folders, setFolders,
      files, setFiles,
      selectedFolderIndex, setSelectedFolderIndex,
      selectedFileIndex, setSelectedFileIndex,
      statusSelectFolder, setStatusSelectFolder,
      statusSelectFile, setStatusSelectFile,
      proyects, setProyects,
    }}>
      {children}
    </positionSideContext.Provider>
  );
};

SideProv.propTypes = {
  children: PropTypes.node.isRequired,
};
=======
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const positionSideContext = createContext(true);

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
  const [proyects, setProyects] = useState([]);
  return (
    <positionSideContext.Provider value={{
      sidebarVisible, setSidebarVisible,
      addNewFolder, setAddNewFolder,
      addNewFile, setAddNewFile,
      proyectoVacio, setProyectoVacio,
      folders, setFolders,
      files, setFiles,
      selectedFolderIndex, setSelectedFolderIndex,
      selectedFileIndex, setSelectedFileIndex,
      statusSelectFolder, setStatusSelectFolder,
      statusSelectFile, setStatusSelectFile,
      proyects, setProyects,
    }}>
      {children}
    </positionSideContext.Provider>
  );
};

SideProv.propTypes = {
  children: PropTypes.node.isRequired,
};
>>>>>>> 1223f99ee06a0a92a5bd8f2f92bd5b31e4eb6a13
