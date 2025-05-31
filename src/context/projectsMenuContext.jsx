import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

export const ProjectsMenuContext = createContext(true);

export function ProjectsMenuProvider({ children }) {
  const [edit, setEdit] = useState(false);

  return (
    <ProjectsMenuContext.Provider value={{ edit, setEdit }}>
      {children}
    </ProjectsMenuContext.Provider>
  );
}

// ✅ Corrección aquí:
ProjectsMenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useProjectsMenu() {
  return useContext(ProjectsMenuContext);
}
