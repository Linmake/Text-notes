import { positionSideContext, SideProv } from '../../context/SideProv'
import { EditorProvider } from '../../context/editorFunctions';
import EditorCompTemplate from "../../components/Templates/EditorCompTemplate";
import SideBar from "../../components/sidebar/SideBar";
import QuillEditor from "../../components/Editor/QuillEditor";
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { UseData } from '../../context/dataContext';
import EditorHeader from '../../components/Header/EditorHeader';
import FloatingMenu from '../../components/Editor/FloatingEditorMenu';
import { DndContext } from '@dnd-kit/core';

const getProjects = async () => {
  try {
    const { data } = await axios.get(`http://localhost:4000/project/all`, {withCredentials: true});
    return data;
  } catch (error) {
    console.error(error);
  }
};

const TextEditor = () => {
  const { setProjects } = useContext(positionSideContext);
  const { setData } = UseData();

  const handleDragEnd = (event) => {
    const { over } = event;
    if (over) {
      console.log('Dropped over:', over.id);
      // aquí puedes actualizar estado o lógica para manejar drop
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const proyects = await getProjects();
        setProjects(proyects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, [setProjects, setData]);

  return (
    <DndContext>
    <EditorCompTemplate className="plantilla-body-editor">
      <SideProv>
        <EditorProvider>
          <DndContext onDragEnd={handleDragEnd}>
            <FloatingMenu />
            <SideBar />
            <EditorHeader />
            <QuillEditor />
          </DndContext>
        </EditorProvider>
      </SideProv>
    </EditorCompTemplate>
    </DndContext>
  );
};
export default TextEditor