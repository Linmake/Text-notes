import { createContext, useContext, useState } from 'react';
import * as PropTypes from 'prop-types';

const DataContext = createContext(true);

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [openFolder, setOpenFolder] = useState(false)
  const [files, setFiles] = useState([])
  const [project, setProject] = useState([])
  const [folders, setFolders] = useState([])

  //account
  const [email, setEmail] = useState(null)
  const [pwd, setPwd] = useState([])

  return (
    <DataContext.Provider value = {{
       data,
       setData,
       openFolder,
       setOpenFolder,
       files, 
       setFiles, 
       project, 
       setProject,
       folders, 
       setFolders,
       email,
       setEmail,
       pwd,
       setPwd
  }}>
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function UseData() {
  return useContext(DataContext);
}
