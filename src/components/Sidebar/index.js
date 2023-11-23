import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SidebarContainer,
  SidebarOptions,
  SideMenuListItem,
  SidebarLink,
  SideMenuItemName,
  ContactCardContainer,
  ContactUsHeading,
  ContactIconsContainer,
  ContactListItem,
  ContactIconImage,
  ContactDescription,
} from './styledComponents'

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, activeTab, changeTab} = value

      const activeBg = isDarkMode ? '#475569' : '#cbd5e1'

      const changeHomeTab = () => {
        changeTab('Home')
      }

      const changeTrendingTab = () => {
        changeTab('Trending')
      }

      const changeGamingTab = () => {
        changeTab('Gaming')
      }

      const changeSavedTab = () => {
        changeTab('SavedVideos')
      }

      const contactCard = () => (
        <ContactCardContainer>
          <ContactUsHeading dark={isDarkMode}>CONTACT US</ContactUsHeading>
          <ContactIconsContainer>
            <ContactListItem key="fb">
              <ContactIconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
            </ContactListItem>
            <ContactListItem key="twitter">
              <ContactIconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
            </ContactListItem>
            <ContactListItem key="linkedin">
              <ContactIconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactListItem>
          </ContactIconsContainer>
          <ContactDescription dark={isDarkMode}>
            Enjoy! Now to see your channels and recommendations!
          </ContactDescription>
        </ContactCardContainer>
      )

      return (
        <SidebarContainer dark={isDarkMode}>
          <SidebarOptions>
            <SidebarLink to="/">
              <SideMenuListItem
                bgColor={activeTab === 'Home' ? activeBg : ''}
                key="home"
                onClick={changeHomeTab}
              >
                <AiFillHome
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  size={25}
                />
                <SideMenuItemName dark={isDarkMode}>Home</SideMenuItemName>
              </SideMenuListItem>
            </SidebarLink>

            <SidebarLink to="/trending">
              <SideMenuListItem
                bgColor={activeTab === 'Trending' ? activeBg : ''}
                key="trending"
                onClick={changeTrendingTab}
              >
                <ImFire
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  size={25}
                />
                <SideMenuItemName dark={isDarkMode}>Trending</SideMenuItemName>
              </SideMenuListItem>
            </SidebarLink>

            <SidebarLink to="/gaming">
              <SideMenuListItem
                bgColor={activeTab === 'Gaming' ? activeBg : ''}
                key="gaming"
                onClick={changeGamingTab}
              >
                <SiYoutubegaming
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  size={25}
                />
                <SideMenuItemName dark={isDarkMode}>Gaming</SideMenuItemName>
              </SideMenuListItem>
            </SidebarLink>

            <SidebarLink to="/saved-videos">
              <SideMenuListItem
                bgColor={activeTab === 'SavedVideos' ? activeBg : ''}
                key="saved-videos"
                onClick={changeSavedTab}
              >
                <CgPlayListAdd
                  color={activeTab === 'SavedVideos' ? '#ff0b37' : '#909090'}
                  size={25}
                />
                <SideMenuItemName dark={isDarkMode}>
                  Saved Videos
                </SideMenuItemName>
              </SideMenuListItem>
            </SidebarLink>
          </SidebarOptions>
          {contactCard()}
        </SidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
