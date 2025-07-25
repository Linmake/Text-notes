import { positionSideContext, SideProv } from '../../context/SideProv'
import { EditorProvider } from '../../context/editorFunctions';
import EditorCompTemplate from "../../components/Templates/EditorCompTemplate";
import SideBar from "../../components/sidebar/SideBar";
import QuillEditor from "../../components/Editor/QuillEditor";
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { UseData } from '../../context/dataContext';
import EditorHeader from '../../components/Header/EditorHeader';

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
  const { setData } = UseData()
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const proyects = await getProjects();
        setProjects( proyects );
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, [setProjects, setData]);
  return (
    <EditorCompTemplate className="plantilla-body-editor">
      <SideProv>
        <EditorProvider>
          <SideBar />
          <EditorHeader/>
          <QuillEditor />
        </EditorProvider>
      </SideProv>
    </EditorCompTemplate>
  );
};
export default TextEditor