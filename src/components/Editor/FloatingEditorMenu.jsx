import { useState } from "react";
import { createPortal } from "react-dom";
import { useDraggable } from "@dnd-kit/core";
import styled from "styled-components";
import AIINte from "./AI.inte";


const MenuContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background: #3498db;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  user-select: none;
  cursor: auto;
  touch-action: none;
`;

const MenuHeader = styled.div`
  padding: 10px;
  background: #2980b9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: ${(props) => (props.isDragging ? "grabbing" : "grab")};
  text-align: center;
  font-size: 2rem;
`;

const MenuContent = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center:
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  cursor: auto;
`;

function DraggableMenu() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [sheets, setSheets] = useState(1)

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: "floating-menu",
  });

  const currentX = transform ? transform.x : 0;
  const currentY = transform ? transform.y : 0;

  const style = {
    top: position.y + currentY + 100,
    left: position.x + currentX + 100,
  };

  const handleDragEnd = () => {
    if (transform) {
      setPosition((pos) => ({
        x: pos.x + transform.x,
        y: pos.y + transform.y,
      }));
    }
  };
  return createPortal(
    <MenuContainer
      ref={setNodeRef}
      style={style}
      {...attributes}
      onPointerUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
      isDragging={isDragging}
    >
      <MenuHeader
        {...listeners}
        isDragging={isDragging}
      >
        Valores
      </MenuHeader>
      <MenuContent>
        <span>Cuartillas</span>
        <input value={sheets} onChange={e => setSheets(e.target.value)} type="number" />
        <AIINte/>
      </MenuContent>
    </MenuContainer>,
    document.body
  );
}

const FloatingMenu = () => {
  return <DraggableMenu />
}

export default FloatingMenu