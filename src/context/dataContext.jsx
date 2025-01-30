<<<<<<< HEAD
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [openFolder, setOpenFolder] = useState(false)
  const [files, setFiles] = useState([])
  const [proyect, setProyect] = useState([])
  const [folders, setFolders] = useState([])

  return (
    <DataContext.Provider value={{ data, setData, openFolder, setOpenFolder, files, setFiles, proyect, setProyect, folders, setFolders }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export function UseData() {
  return useContext(DataContext);
}
=======
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [openFolder, setOpenFolder] = useState(false)
  const [files, setFiles] = useState([])
  const [proyect, setProyect] = useState([])
  const [folders, setFolders] = useState([])

  return (
    <DataContext.Provider value={{ data, setData, openFolder, setOpenFolder, files, setFiles, proyect, setProyect, folders, setFolders }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export function UseData() {
  return useContext(DataContext);
}
>>>>>>> 1223f99ee06a0a92a5bd8f2f92bd5b31e4eb6a13
