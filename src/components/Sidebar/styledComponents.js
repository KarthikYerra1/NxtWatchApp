import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20vw;
    height: 100%;
    position: fixed;
    top: 80px;
    padding-bottom: 66px;
    background-color: ${props => (props.dark ? '#181818' : '#fff')};
  }
`

export const SidebarOptions = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  padding: 0px;
  margin: 0px;
`

export const SideMenuListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 25px;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const SidebarLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  outline: none;
`

export const SideLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const SideMenuItemName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.dark ? '#f9f9f9' : '#231f20')};
  margin-left: 15px;
  margin-bottom: 10px;
`
export const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.dark ? '#f9f9f9' : '#231f20')};
`
export const ContactIconsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 10px 0px;
  list-style-type: none;
`
export const ContactListItem = styled.li`
  margin-right: 15px;
`
export const ContactIconImage = styled.img`
  height: 30px;
  width: 30px;
`

export const ContactDescription = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#231f20')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  padding: 0px;
  margin: 10px 0px;
`
