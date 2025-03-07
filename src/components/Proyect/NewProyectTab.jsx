import { useContext, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { format } from "date-fns";
import styled from 'styled-components';
import axios from 'axios';
import { positionSideContext } from "../../context/SideProv";

const Form = styled.div`
  width: 24vw;
  background-color: white;
  display: flex;
  flex-direction: columns;
  gap: 1.5rem;
  margin-bottom: 50px;
  background: none;
`;

const Input = styled.input`
  width: 18vw;
  font-size: 1.5rem;
`;

const Button = styled.button`
  width: 80px;
  height: 50px;
`;

export const NewProyectTab = () => {
  const refName = useRef(null);
  const { setProyects } = useContext(positionSideContext);


  const handlerEnt = (event) => {
    if (event.keyCode !== 13) {
      return
    }
    handleSubmit(event)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Id: uuidV4(),
      Title: refName.current.value,
      Date: format(new Date(), "yyyy-MM-dd"),
      Folders: []
    };
    try {
      const res = await axios.post("http://localhost:4000/proyect/create", data);
      setProyects(prevProyects => [...prevProyects, data]);
      refName.current.value = ""
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form>
      <Input ref={refName} autoFocus type="text" className="form-control me-2" onKeyDown={handlerEnt} />
      <Button type='Submit' onClick={handleSubmit} className="btn btn-outline-success">Crear</Button>
    </Form>
  );
};
