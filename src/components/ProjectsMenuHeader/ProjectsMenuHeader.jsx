import styled from "styled-components"
import Account from "../Account/Accounts/Account"
import { UseData } from "../../context/dataContext";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100lvw;
    height: 5lvh;
    background-color: white;
    align-items: end;
    justify-content: end;
    margin-right: 15%;
`

const AccountContainer = styled.div`
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: center;
`


const ProjectsMenuHeader = () => {
    const { name } = UseData();

    return (
        <HeaderContainer>
            <AccountContainer>
                <Account
                    mainRoute={"http://localhost:4001"}
                    nameAccount={name}
                    gap={'0.7rem'}
                />
            </AccountContainer>
        </HeaderContainer>
    )
}

export default ProjectsMenuHeader