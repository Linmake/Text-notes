import { useContext, useEffect, useRef } from 'react';
import { UseData } from '../../context/dataContext';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '../../styles/components/editor/Editor.css';
import { positionSideContext } from '../../context/SideProv';
import QuillToolbar from './QuillToolbar';
import { EditorFunctionsContext } from '../../context/editorFunctions';
import styled from "styled-components"
import axios from "axios"

const ButtonSend = styled.button`
position: absolute;
top: 1.6%;
left: 73%;
width: 4.4rem;
z-index: 20;
border-radius: 10%;
width: 4%;
height: 5%;
border: 2px solid orange;
background-color: white;
`

const QuillEditor = () => {
  
  const {
    sidebarVisible 
  } = useContext(positionSideContext);

  const {  
    setSaveFile, 
    fileCurrent, 
    setFileCurrent 
  } = useContext(EditorFunctionsContext);
  
  const {
    setFiles,
  } = UseData();
  
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const DbUrl = "http://localhost:4000";

  const currentPath = window.location.pathname
  const segments = currentPath.split('/').filter(Boolean)
  const idFolder = segments[2]



  useEffect(() => {
    if (!editorRef.current || quillRef.current) return;
    quillRef.current = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
        toolbar: {
          container: '#toolbar',
        },
      },
      formats: [
        'bold', 'italic', 'underline', 'strike', 'align',
        'header', 'font', 'size', 'script',
        'list', 'bullet', 'indent',
        'link', 'image', 'video',
      ],
    });

    // Listener para actualizar el estado y el contexto
    quillRef.current.on('text-change', () => {
      setSaveFile(false)
    });

    // Cargar valor inicial si hay uno en el contexto
    if (fileCurrent && fileCurrent !== "") {
      quillRef.current.setText(fileCurrent)
    }

    return () => {
      quillRef.current?.off('text-change')
    }
  }, [])

  //!!todo descomentar solo comentado para el desarrollo!!
/*
  useEffect(() => {
    if(!fileCurrent || fileCurrent === "" ) return 
    quillRef.current.setText(fileCurrent.Text) //cambia el texto del editor por el texto del file seleccionado
  }, [fileCurrent])

  useEffect(() => {

  }, [])

  useEffect(() => {
    const getFiles = async () => {
        const res = await axios({
          url: `${DbUrl}/file/all/${idFolder}`,
          method: 'get'
        });
        return res; 
    }
    const fetchData = async () => {
      const resFetch = await getFiles()
      if (resFetch.status == '200') {
        setFiles(resFetch.data)
      } else {
        console.error(new Error("Error del servidor"))
      }
    };

    fetchData();

  }, [fileCurrent]);
  */
 
  const handlerSave = async() => {
    if(fileCurrent && fileCurrent !== ""){
      
      const newFile = { //File actualizado 
        Id: fileCurrent.Id,
        IdFolder: fileCurrent.IdFolder,
        Title: fileCurrent.Title,
        Text: quillRef.current.getText().trim()  //text a guardar del editor 
      }
      try{
        const currentPath = window.location.pathname
        const segments = currentPath.split('/').filter(Boolean)
        const idFolder = segments[2]
        const resFile = await axios.put(`http://localhost:4000/file/edit/${idFolder}/${fileCurrent.Id}`, newFile)
        setFileCurrent(newFile)
      }catch (error) {
        console.error("Error en la solicitud PATCH:", error);
      }
    }else{ // **file no seleccionado
      //si no esta seleccionado ningun file se crea el file dentro de la primer folder del primer project
      //si esta seleccionado un project pero no el folder se crea dentro del primer folder del project
      //si esta seleccionado un project y un folder se crea dentro de estos con este Text
    }
  }

  return (
    <>
      <QuillToolbar />
      <div
        ref={editorRef}
        id={'editor'}
        className={sidebarVisible ? '' : 'expand-editor'}
        spellCheck={"false"}
        autoCorrect={"false"}
      />
      <ButtonSend onClick={handlerSave}>Save</ButtonSend>
    </>
  );
};

export default QuillEditor;
