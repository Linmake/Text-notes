import { useState } from "react";
import { createPortal } from "react-dom";
import { useDraggable } from "@dnd-kit/core";
import styled from "styled-components";
import AIINte from "./AI.inte";
import { UseData } from "../../context/dataContext";


const MenuContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 450px;
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
  display: flex;
  justify-content: center:
  align-items: center;
  flex-direction: column;
  padding: 2.5rem;
  cursor: auto;
  `;

const Input = styled.input`
  width: 50%;
  height: 2rem;
  border-radius: 3px;
  outline: none;
  border: none;
  margin-top: 0.5rem;
`

const Span = styled.span`
  font-size: 1.5rem;
`

function DraggableMenu() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const {sheets, setSheets} = UseData()

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
        <Span>Cuartillas</Span>
        <Input value={sheets} onChange={e => setSheets(e.target.value)} type="number" />
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