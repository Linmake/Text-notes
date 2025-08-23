import { useRef, useState } from "react"
import styled from "styled-components"

const BubbleContainer = styled.div`
  position: absolute;
  display: flex;
  width: 500px;
  height: 600px;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, blue, green);
  top: 10%;
  z-index: 1000;
  left: 5%;
`

const Bubble = styled.div`
  display: flex;
  width: 490px;
  height: 590px;
  background-color: white;
  justify-content: center;
  align-items: center;
`

const DragDropBubble = () => {

    const handlerDragStart = (e) => {
        e.preventDefault()
    }

    const menuRef = useRef(null);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [dragging, setDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setDragging(true);
        const rect = menuRef.current.getBoundingClientRect();
        offset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        setPosition({
            x: e.clientX - offset.current.x,
            y: e.clientY - offset.current.y,
        });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <BubbleContainer>
            <Bubble
                onMouseDown={handleMouseDown}
                draggable
                onDragStart={(e) => handlerDragStart(e)}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            />
        </BubbleContainer>
    )
}

export default DragDropBubble