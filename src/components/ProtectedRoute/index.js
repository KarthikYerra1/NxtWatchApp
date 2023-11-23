import Cookies from 'js-cookie'

import {Redirect, Route} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../Sidebar'

import NxtWatchContext from '../../context/NxtWatchContext'

import {AppContainer, SidebarAndContentContainer} from './styledComponents'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }
  //   return <Route {...props} />
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const bgColor = isDarkMode ? '#000' : '#f9f9f9'

        return (
          <AppContainer bgColor={bgColor}>
            <Header />
            <SidebarAndContentContainer>
              <Sidebar />
              <Route {...props} />
            </SidebarAndContentContainer>
          </AppContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default ProtectedRoute
