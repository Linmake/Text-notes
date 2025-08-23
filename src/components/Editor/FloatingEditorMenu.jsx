import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useDraggable } from "@dnd-kit/core";

function DraggableMenu() {
  // Estado para la posición guardada
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Hook draggable con id
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: "floating-menu",
  });

  // Cuando transform cambia (durante el drag), calculamos la posición real sumando la anterior
  // Aquí solo mostramos el movimiento relativo:
  const currentX = transform ? transform.x : 0;
  const currentY = transform ? transform.y : 0;

  // Estilo para la posición absoluta sumando la posición guardada + transformación momentánea
  const style = {
    position: "absolute",
    top: position.y + currentY + 100, // 100 es tu offset inicial
    left: position.x + currentX + 100, // 100 es tu offset inicial
    width: 250,
    borderRadius: 8,
    background: "#3498db",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    zIndex: 1000,
    userSelect: "none",
    cursor: isDragging ? "grabbing" : "grab",
    touchAction: "none",
  };

  // Función para actualizar la posición al terminar de arrastrar
  const handleDragEnd = (event) => {
    if (transform) {
      setPosition((pos) => ({
        x: pos.x + transform.x,
        y: pos.y + transform.y,
      }));
    }
  };

  return createPortal(
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onPointerUp={handleDragEnd} // Se dispara al soltar el drag
      onTouchEnd={handleDragEnd}  // para pantallas táctiles
    >
      <div
        style={{
          padding: 10,
          background: "#2980b9",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        Arrástrame
      </div>
      <div style={{ padding: 12 }}>
        <p>Menú flotante con dnd-kit y portal funcionando.</p>
        <button>Click aquí</button>
      </div>
    </div>,
    document.body
  );
}

export default function FloatingMenu() {
  return <DraggableMenu />;
}
