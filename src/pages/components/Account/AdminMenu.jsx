import axios from "axios"
import styled from "styled-components"
import { UseData } from "../../../context/dataContext"
import { useContext } from "react"
import { positionSideContext } from "../../../context/SideProv"

const AdminMenu = styled.div`
border: 1px solid grey;
width: 40%;
display: flex;
height: 50%;
margin-top: 9%;
border-radius: 9px;
margin-left: 15%;
padding: 2.3rem;
flex-direction: column;
align-items: center;
`

const Title = styled.h1`
font-size: 2rem;
color: #bebebe;
margin-bottom: 2.5rem;
`

const DeleteProyectsBttn = styled.button`
    width: 9rem;
    height: 3.3rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    background-color: #d2e6fdff;
    border: none;
    cursor: pointer;
    color: #1d2936ff;
    font-size: 1.04rem;
`

const DeleteFoldersBttn = styled.button`
     width: 9rem;
    height: 3.3rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    background-color: #d2e6fdff;
    border: none;
    cursor: pointer;
    color: #1d2936ff;
    font-size: 1.04rem;
`

const DeleteFilesBttn = styled.button`
     width: 9rem;
    height: 3.3rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    background-color: #d2e6fdff;
    border: none;
    cursor: pointer;
    color: #1d2936ff;
    font-size: 1.04rem;
`

const AdminMenuComponent = () => {

    const { data, setOpenFolder, folders, setFolders, setFiles } = UseData();
      const { projects, setProjects } = useContext(positionSideContext);

    const handlerDeleteProyects = async(e) => {
     const { status } = await axios.delete("http://localhost:4000/project/all/delete", {withCredentials: true})
     if(status !== 200) {
        return
     }
     console.log("All Proyects delete with succesfull")
     return setProjects([])
    }
    
    const handlerDeleteFolders = async(e) => {
     const { status } = await axios.delete("http://localhost:4000/folder/all/delete", {withCredentials: true})
     if(status !== 200) {
        return
     }
     console.log("All Folders delete with succesfull")
     return setFolders([])
    }

    const handlerDeleteFiles = async(e) => {
     const { status } = await axios.delete("http://localhost:4000/file/all/delete", {withCredentials: true})
     if(status !== 200) {
        return
     }
     console.log("All Files delete with succesfull")
     return setFiles([])
    }

    return (
        <AdminMenu>
            <Title>Admin Menu</Title>
            <DeleteProyectsBttn onClick={ (e) => handlerDeleteProyects(e) } role={"button"}>Delete Proyects</DeleteProyectsBttn>
            <DeleteFoldersBttn onClick={ (e) => handlerDeleteFolders(e) } role={"button"}>Delete Folders</DeleteFoldersBttn>
            <DeleteFilesBttn onClick={ (e) => handlerDeleteFiles(e) } role={"button"}>Delete Files</DeleteFilesBttn>
        </AdminMenu>
    )
}

export default AdminMenuComponent