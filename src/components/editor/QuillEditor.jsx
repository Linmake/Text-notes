import { useState, useContext, useEffect, useRef } from 'react';
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
  const { sidebarVisible } = useContext(positionSideContext);
  const { textEditor, setTextEditor, setSaveFile, fileCurrent, setFileCurrent } = useContext(EditorFunctionsContext);
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const DbUrl = "http://localhost:4000";

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

  

  useEffect(() => {
    if(!fileCurrent || fileCurrent === "" ) return 
    quillRef.current.setText(fileCurrent.Text) //cambia el texto del editor por el texto del file seleccionado
  }, [fileCurrent])

  /*useEffect(() => {
    const getFolder = async () => {
      try {
        const res = await axios({
          url: `${DbUrl}/file/edit/${data.key}/all`,
          method: 'PATCH'
        });
        return res;
      } catch (error) {
        console.error(error);
        return
      }
    };
    //Coloca los Folders obtenidos desde la BD a el contexto
    const fetchData = async () => {

      const resFetch = await getFolder()

      if (resFetch && resFetch.status === 200) {
        setFolders(resFetch.data)
        console.log("Folders desde la API:", resFetch.data);

      } else {
        console.error(new Error("Error del servidor"))
      }
    };

    fetchData();

  }, [data, setFolders]);
  */

  const handlerSave = async() => {
    if(fileCurrent && fileCurrent !== ""){ //**file seleccionado
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
      //si no esta seleccionado ningun file se crea el file dentro de la primer folder del primer proyect
      //si esta seleccionado un proyect pero no el folder se crea dentro del primer folder del proyect
      //si esta seleccionado un proyect y un folder se crea dentro de estos con este Text
    alert(`file no seleccionado: ${fileCurrent.Text}`)
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
