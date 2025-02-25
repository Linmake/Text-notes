import { useState, useContext, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '../../styles/components/editor/Editor.css';
import { positionSideContext } from '../../context/SideProv';
import QuillToolbar from './QuillToolbar';

const QuillEditor = () => {
  const [value, setValue] = useState('');
  const { sidebarVisible } = useContext(positionSideContext);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
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

      quillRef.current.on('text-change', () => {
        setValue(quillRef.current.root.innerHTML);

      });

      // Set the initial value
      quillRef.current.root.innerHTML = value;
    }

    return () => {
      if (quillRef.current) {
        quillRef.current.off('text-change');

      }
    };
  }, [value, sidebarVisible]);

  return (
    <>
      <QuillToolbar />
      <div
        ref={editorRef}
        id='editor'
        autoFocus
        className={sidebarVisible ? '' : 'expand-editor'}
      />
    </>
  );
};

export default QuillEditor;
