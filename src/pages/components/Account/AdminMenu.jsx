import styled from "styled-components"

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

    return (
        <AdminMenu>
            <Title>Admin Menu</Title>
            <DeleteProyectsBttn role={"button"}>Delete Proyects</DeleteProyectsBttn>
            <DeleteFoldersBttn role={"button"}>Delete Folders</DeleteFoldersBttn>
            <DeleteFilesBttn role={"button"}>Delete Files</DeleteFilesBttn>
        </AdminMenu>
    )
}

export default AdminMenuComponent