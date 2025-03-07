import { useState, useContext, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '../../styles/components/editor/Editor.css';
import { positionSideContext } from '../../context/SideProv';
import QuillToolbar from './QuillToolbar';
import { EditorFunctionsContext } from '../../context/editorFunctions';
import styled from "styled-components"
import "axios" from axios

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
  const { textEditor, setTextEditor, setSaveFile } = useContext(EditorFunctionsContext);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

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
    if (textEditor && textEditor != "") {
      quillRef.current.root.innerHTML = textEditor;
    }

    return () => {
      setTextEditor(quillRef.current.getText().trim());
      quillRef.current?.off('text-change');
    };
  }, []);

  //guardar el file en la bd
  /*useEffect(() => {
    const getFolder = async () => {
      try {
        const res = await axios({
          url: `${DbUrl}/folder/${data.key}/all`,
          method: 'GET'
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


  const handlerButton = () => {
    alert(quillRef.current.getText().trim())
    setSaveFile(true)
  }

  return (
    <>
      <QuillToolbar />
      <div
        ref={editorRef}
        id='editor'
        className={sidebarVisible ? '' : 'expand-editor'}
      />
      <ButtonSend onClick={handlerButton}>Save</ButtonSend>
    </>
  );
};

export default QuillEditor;
