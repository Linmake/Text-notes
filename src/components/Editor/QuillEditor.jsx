import React, { useContext, useEffect, useRef, useCallback, useMemo } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '../../styles/components/editor/Editor.css';
import { positionSideContext } from '../../context/SideProv';
import QuillToolbar from './QuillToolbar';
import { EditorFunctionsContext } from '../../context/editorFunctions';
import styled from "styled-components"
import SaveFileBttn from './SaveFileBttn';

const TextEditor = styled.div`
  background-color: #303030 !important;
  color: white !important;
`

const QuillEditor = () => {
  const { fileCurrent } = useContext(EditorFunctionsContext);
  const { sidebarVisible } = useContext(positionSideContext);
  
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // Función estable establecida con useCallback
  const handleTextChange = useCallback(() => {
    const { setSaveFile } = useContext(EditorFunctionsContext);
    setSaveFile(false);
  }, []);

  useEffect(() => {
    if (!editorRef.current || quillRef.current) return;

    // Inicializar Quill solo una vez
    const quill = new Quill(editorRef.current, {
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

    quillRef.current = quill;

    // Configurar el listener
    quill.on('text-change', handleTextChange);

    // Cargar contenido inicial si existe
    if (fileCurrent?.Text) {
      quill.setText(fileCurrent.Text);
    }

    // Limpieza
    return () => {
      quill.off('text-change', handleTextChange);
    };
  }, [fileCurrent?.Text, handleTextChange]);

  // Memoizar el editor para evitar re-renders innecesarios
  const editor = useMemo(() => (
    <TextEditor
      ref={editorRef}
      id={'editor'}
      className={sidebarVisible ? '' : 'expand-editor'}
      spellCheck={"false"}
      autoCorrect={"false"}
      backgroundColor={"#1F1F1F"}
      autoFocus
    />
  ), [sidebarVisible]);

  return (
    <>
      <QuillToolbar />
      {editor}
      <SaveFileBttn quillRef={quillRef.current} />
    </>
  );
};

export default React.memo(QuillEditor);