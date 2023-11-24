import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  AppContainer,
  SidebarAndContentContainer,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
      const notFoundImage = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <AppContainer bgColor={bgColor}>
          <Header />
          <SidebarAndContentContainer>
            <Sidebar />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImage alt="not found" src={notFoundImage} />
              <NotFoundHeading dark={isDarkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription dark={isDarkMode}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </SidebarAndContentContainer>
        </AppContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
