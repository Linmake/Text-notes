import { useState, useContext, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../sass/components/editor/css/Editor.css';
import { positionSideContext } from '../../context/SideProv';
import QuillToolbar from './QuillToolbar';

const QuillEditor = () => {
  const [value, setValue] = useState('');
  const { sidebarVisible } = useContext(positionSideContext);
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.focus();
    }
  }, []);

  const handleChange = (content) => {
    setValue(content);
  };

  const modules = {
    toolbar: {
      container: '#toolbar'
    }
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  return (
    <>
      <QuillToolbar />
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        id='editor'
        className={`${(sidebarVisible) ? '' : 'expand-editor'}`}
      />
      <button>Save</button>
    </>
  );
};

export default QuillEditor;
