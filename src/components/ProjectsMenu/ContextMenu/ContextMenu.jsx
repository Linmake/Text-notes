import { useEffect, useState } from "react"
import styled from "styled-components"

const ContentMenu = styled.div`
    display: flex;
    position: absolute;
    width: 8%;
    height: 15%;
    background-color: white;
    border-radius: 6px;
    border: 1px solid grey;
`

const ContextMenu = styled.div`
    display: flex;
    width: 30%;
    position: absolute;
`

const ContextMenuComponent = ({ position }) => {
    return(
        <ContentMenu>
            <ContextMenu/>
        </ContentMenu>
    )
}

export default ContextMenuComponent