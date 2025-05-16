import styled from 'styled-components'

const Header = styled.nav`
  height: 99px;
  display: flex;
  background: rgb(251,120,80);
  background: linear-gradient(90deg, rgba(251,120,80,1) 0%, rgba(242,179,50,1) 100%);
  padding: 0px;
  width: 100%;
  border-bottom: 2px solid white;
  user-select: none;
`

export default function HeaderContent() {
  return (
    <Header className="navbar navbar-expand-lg bg-body-tertiary">
        
    </Header>
    )
}
