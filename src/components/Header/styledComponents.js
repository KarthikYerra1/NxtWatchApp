import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 100vw;
  height: 70px;
  @media screen and (min-width: 768px) {
    height: 80px;
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const HeaderImg = styled.img`
  height: 30px;
  @media screen and (min-width: 768px) {
    height: ${props => (props.profile ? '32px' : '45px')};
  }
`

export const ModeMenuContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin: 0;
  }
`

export const NavListItem = styled.li`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: ${props => (props.ham ? 'none' : '')};
  }
`
export const NavListBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
export const NavListItemProfile = styled.li`
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavListItemLg = styled.li`
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavListBtnLg = styled(NavListBtn)`
  border: ${props => (props.dark ? 'solid 1px #fff' : 'solid 1px #4f46e5')};
  color: ${props => (props.dark ? '#fff' : '#4f46e5')};
  font-family: 'Roboto';
  height: 30px;
  padding: 5px 10px;
  border-radius: 4px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  background-size: cover;
  padding: 10px 15px;
  margin: 20px;
  width: 90%;
  max-width: 500px;
  border-radius: 10px;
`

export const ModalText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
`
export const LogoutButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px;
  width: 70%;
`

export const CancelBtn = styled.button`
  height: 36px;
  padding: 10px 15px;
  color: #94a3b8;
  border: solid 1px #94a3b8;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`
export const ConfirmBtn = styled(CancelBtn)`
  color: #fff;
  border: none;
  background-color: #4f46e5;
`
export const HamburgerMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
  width: 100%;
`
export const HamNavListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style-type: none;
  padding: 5px 0px;
  background-color: ${props => props.bgColor};
  background-size: cover;
`

export const HamMenuItemName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  margin-left: 10px;
  margin-bottom: 10px;
`

export const HamOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 576px;
  background-color: ${props => props.bgColor};
  background-size: cover;
  border-radius: 10px;
  padding: 20px 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const CloseBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
`

export const CloseBtn = styled.button`
  height: 20px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  margin-bottom: 15px;
`
