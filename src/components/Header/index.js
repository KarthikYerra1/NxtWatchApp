import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  LogoLink,
  HeaderImg,
  ModeMenuContainer,
  NavListItem,
  NavListBtn,
  NavListItemProfile,
  NavListItemLg,
  NavListBtnLg,
  ModalContainer,
  ModalText,
  LogoutButtonsContainer,
  CancelBtn,
  ConfirmBtn,
  HamburgerMenuContainer,
  HamNavListItem,
  HamMenuItemName,
  HamOptionsContainer,
  CloseBtnContainer,
  CloseBtn,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, toggleTheme, activeTab, changeTab} = value
      const bgColor = isDarkMode ? '#181818' : '#ffffff'
      const color = isDarkMode ? '#fff' : '#000'
      const activeBg = isDarkMode ? '#475569' : '#cbd5e1'
      const appLogo = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const themeIcon = isDarkMode ? (
        <FiSun size={26} color={color} />
      ) : (
        <FaMoon size={26} color={color} />
      )

      const onClickHome = () => {
        changeTab('Home')
      }

      const onClickTrending = () => {
        changeTab('Trending')
      }

      const onClickGaming = () => {
        changeTab('Gaming')
      }

      const onClickSaved = () => {
        changeTab('Saved')
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const modalContainer = close => (
        <ModalContainer bgColor={bgColor}>
          <ModalText color={color}>Are you sure, you want to logout</ModalText>
          <LogoutButtonsContainer>
            <CancelBtn onClick={close}>Cancel</CancelBtn>
            <ConfirmBtn onClick={onClickLogout}>Confirm</ConfirmBtn>
          </LogoutButtonsContainer>
        </ModalContainer>
      )

      const logoutButton = () => (
        <>
          <NavListItem ham>
            <Popup
              trigger={
                <NavListBtn>
                  <FiLogOut color={color} size={26} />
                </NavListBtn>
              }
              modal
            >
              {close => modalContainer(close)}
            </Popup>
          </NavListItem>
          <NavListItemLg>
            <Popup
              trigger={<NavListBtnLg dark={isDarkMode}>Logout</NavListBtnLg>}
              modal
            >
              {close => modalContainer(close)}
            </Popup>
          </NavListItemLg>
        </>
      )

      const hamburgerMenu = () => (
        <Popup
          trigger={
            <NavListBtn>
              <GiHamburgerMenu size={26} color={color} />
            </NavListBtn>
          }
          modal
        >
          {close => (
            <HamOptionsContainer bgColor={bgColor}>
              <CloseBtnContainer>
                <CloseBtn onClick={close}>
                  <RiCloseLine color={color} size={18} />
                </CloseBtn>
              </CloseBtnContainer>
              <HamburgerMenuContainer bgColor={bgColor}>
                <LogoLink to="/">
                  <HamNavListItem
                    onClick={onClickHome}
                    key="Home"
                    bgColor={activeTab === 'Home' ? activeBg : ''}
                  >
                    <AiFillHome
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      size={20}
                    />
                    <HamMenuItemName color={color}>Home</HamMenuItemName>
                  </HamNavListItem>
                </LogoLink>
                <LogoLink to="/trending">
                  <HamNavListItem
                    key="Trending"
                    onClick={onClickTrending}
                    bgColor={activeTab === 'Trending' ? activeBg : ''}
                  >
                    <ImFire
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      size={20}
                    />
                    <HamMenuItemName color={color}>Trending</HamMenuItemName>
                  </HamNavListItem>
                </LogoLink>
                <LogoLink to="/gaming">
                  <HamNavListItem
                    key="Gaming"
                    onClick={onClickGaming}
                    bgColor={activeTab === 'Gaming' ? activeBg : ''}
                  >
                    <SiYoutubegaming
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      size={20}
                    />
                    <HamMenuItemName color={color}>Gaming</HamMenuItemName>
                  </HamNavListItem>
                </LogoLink>
                <LogoLink to="/saved-videos">
                  <HamNavListItem
                    key="Saved"
                    onClick={onClickSaved}
                    bgColor={activeTab === 'Saved' ? activeBg : ''}
                  >
                    <CgPlayListAdd
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                      size={20}
                    />
                    <HamMenuItemName color={color}>
                      Saved Videos
                    </HamMenuItemName>
                  </HamNavListItem>
                </LogoLink>
              </HamburgerMenuContainer>
            </HamOptionsContainer>
          )}
        </Popup>
      )

      return (
        <>
          <HeaderContainer bgColor={bgColor}>
            <LogoLink to="/">
              <HeaderImg
                alt="website logo"
                onClick={onClickHome}
                src={appLogo}
              />
            </LogoLink>
            <ModeMenuContainer>
              <NavListItem>
                <NavListBtn data-testid="theme" onClick={toggleTheme}>
                  {themeIcon}
                </NavListBtn>
              </NavListItem>
              <NavListItem ham>{hamburgerMenu()}</NavListItem>
              <NavListItemProfile>
                <NavListBtn>
                  <HeaderImg
                    profile="true"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavListBtn>
              </NavListItemProfile>
              {logoutButton()}
            </ModeMenuContainer>
          </HeaderContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
