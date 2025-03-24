
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const positionSideContext = createContext(true);

export const SideProv = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [addNewFolder, setAddNewFolder] = useState(false);
  const [addNewFile, setAddNewFile] = useState(false);
  const [projectVoid, setProjectVoid] = useState(false);
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedFolderIndex, setSelectedFolderIndex] = useState(null);
  const [idFolderSelect, setIdFolderSelect] = useState(null);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const [statusSelectFolder, setStatusSelectFolder] = useState(false);
  const [statusSelectFile, setStatusSelectFile] = useState(false);
  const [projects, setProjects] = useState([]);
  return (
    <positionSideContext.Provider value={{
      sidebarVisible, setSidebarVisible,
      addNewFolder, setAddNewFolder,
      addNewFile, setAddNewFile,
      projectVoid, setProjectVoid,
      folders, setFolders,
      files, setFiles,
      selectedFolderIndex, setSelectedFolderIndex,
      selectedFileIndex, setSelectedFileIndex,
      statusSelectFolder, setStatusSelectFolder,
      statusSelectFile, setStatusSelectFile,
      projects, setProjects,
      idFolderSelect, setIdFolderSelect,
    }}>
      {children}
    </positionSideContext.Provider>
  );
};

SideProv.propTypes = {
  children: PropTypes.node.isRequired,
};
