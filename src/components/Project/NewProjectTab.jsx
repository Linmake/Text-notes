import { useContext, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { format } from "date-fns";
import styled from 'styled-components';
import axios from 'axios';
import { positionSideContext } from "../../context/SideProv";
import GetUserId from '../Hooks/GetUserId/GetUserId';

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

export const NewProjectTab = () => {
  const refName = useRef(null);
  const { setProjects } = useContext(positionSideContext);
  


  const handlerEnt = (event) => {
    if (event.keyCode !== 13) {
      return
    }
    handleCreate(event)
  }

  const handleCreate = async (e) => {
    e.preventDefault();
    const UserId = await GetUserId();
    const newProyect = {
      Id: uuidV4(),
      Title: refName.current.value,
      Date: format(new Date(), "yyyy-MM-dd"),
      Folders: [],
      UserId: UserId
    };
    try {
      const res = await axios.post("http://localhost:4000/project/create", newProyect, {withCredentials: true});
      setProjects(prevProjects => [...prevProjects, newProyect]);
      refName.current.value = ""
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form>
      <Input ref={refName} autoFocus type="text" className="form-control me-2" onKeyDown={handlerEnt} />
      <Button type='Submit' onClick={handleCreate} className="btn btn-outline-success">Create</Button>
    </Form>
  );
};
