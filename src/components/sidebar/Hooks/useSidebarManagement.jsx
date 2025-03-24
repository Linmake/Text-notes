import { positionSideContext } from '../../../context/SideProv'
import { useState, useContext } from "react";

const useSidebarManagement = () => {
  const [projectVoid, setProjectVoid] = useState(false);
  const { sidebarVisible, setSidebarVisible } = useContext(positionSideContext);

  return (
    projectVoid,
    setProjectVoid,
    sidebarVisible,
    setSidebarVisible
  )
}

export default useSidebarManagement