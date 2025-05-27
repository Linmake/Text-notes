import styled from "styled-components";
import img from "../../../../assets/user.png";
import { useEffect, useRef, useState } from "react";
import ToggleAccount from "./ToggleAccount";

const LogoImg = styled.img`
  border-radius: 55%;
  width: 100%;
  box-sizing: border-box;
`;

const ToggleContent = styled.div`
`

export default function LogoAccount() {
  const ref = useRef(null)
  const [ toggleState, setToggleState ] = useState(false)

  useEffect(() => {
    const handlerBlur = (event) => {
      if(ref.current && !ref.current.contains(event.target)) setToggleState(false)
    }
    document.addEventListener("mousedown", handlerBlur)
  }, [])

  const handlerDropDown = () => {
    setToggleState(true)
  }

  return (
  <ToggleContent
    ref={ref}
  >
    <LogoImg src={img} 
      onMouseEnter={e => handlerDropDown(e)}
      onClick={e => handlerDropDown(e)}
    />
    {(toggleState) 
    && (
      <ToggleAccount/>
    )}
  </ToggleContent>
)
}