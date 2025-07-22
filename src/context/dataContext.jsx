import { createContext, useContext, useState } from 'react';
import * as PropTypes from 'prop-types';
const DataContext = createContext(true);
export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [openFolder, setOpenFolder] = useState(false)
  const [files, setFiles] = useState([])
  const [UserFiles, SetUserFiles] = useState([])
  const [project, setProject] = useState([])
  const [folders, setFolders] = useState([])
  //***------account-------****
  const [email, setEmail] = useState(null)
  const [pwd, setPwd] = useState([])
  const [name, setName] = useState([])
  const [login, setLogin] = useState([])
  const [account, setAccount] = useState(null)


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
       setPwd,
       name,
       setName,
       login, 
       setLogin,
       UserFiles,
       SetUserFiles,
       account,
       setAccount
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