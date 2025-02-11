import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext(true);

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


export function UseData() {
  return useContext(DataContext);
}
