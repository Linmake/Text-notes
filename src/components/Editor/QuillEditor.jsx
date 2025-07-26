import React, { useContext, useEffect, useRef, useCallback, useMemo } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '../../styles/components/editor/Editor.css';
import { positionSideContext } from '../../context/SideProv';
import QuillToolbar from './QuillToolbar';
import { EditorFunctionsContext } from '../../context/editorFunctions';
import styled from "styled-components";
import SaveFileBttn from './SaveFileBttn';

const TextEditor = styled.div`
  background-color: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border-radius: 20px !important;
  outline-style: none !important;
  resize: none !important;
`;

const QuillEditor = () => {
  const { fileCurrent, setSaveFile } = useContext(EditorFunctionsContext);
  const { sidebarVisible } = useContext(positionSideContext);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const handleTextChange = useCallback(() => {
    setSaveFile(false);
  }, [setSaveFile]);

  useEffect(() => {
    if (!editorRef.current || quillRef.current) return;

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
    quill.focus();
    quillRef.current = quill;
    quill.on('text-change', handleTextChange);
  }, [handleTextChange]);

  // Cada vez que cambia el archivo actual, se actualiza el contenido del editor
  useEffect(() => {
    if (quillRef.current && fileCurrent?.Text !== undefined) {
      quillRef.current.setText(fileCurrent.Text || '');
    }
  }, [fileCurrent?.Text]);

  const editor = useMemo(() => (
    <TextEditor
      ref={editorRef}
      id={'editor'}
      className={sidebarVisible ? '' : 'expand-editor'}
      spellCheck={"false"}
      autoCorrect={"false"}
      autoFocus
    />
  ), [sidebarVisible]);

  return (
    <>
      <QuillToolbar />
      {editor}
      <SaveFileBttn quillRef={quillRef} />
    </>
  );
};

export default React.memo(QuillEditor);