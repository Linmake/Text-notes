import styled from "styled-components"
import Account from "../Account/Accounts/Account"
import { UseData } from "../../context/dataContext";
import MainLinks from '../../components/Header/Components/MainLinks'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    top: 0;
    height: 5lvh;
    align-items: end;
    justify-content: end;
    user-select: none;
    position: sticky;
    gap: 50%;
`

const AccountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProjectsMenuHeader = () => {
    const { name } = UseData();
    return (
        <HeaderContainer>
                <MainLinks mainRoute={"http://localhost:3000"} />
            <AccountContainer>
                <Account
                    mainRoute={"http://localhost:3000"}
                    nameAccount={name}
                    gap={'1rem'}
                />
            </AccountContainer>
        </HeaderContainer>
    )
}

export default ProjectsMenuHeader