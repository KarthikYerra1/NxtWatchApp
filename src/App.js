import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SpecificVideoDetails from './components/SpecificVideoDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    isDarkMode: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  changeTab = value => {
    this.setState({
      activeTab: value,
    })
  }

  addSavedVideo = details => {
    const {savedVideos} = this.state
    const {id} = details
    const index = savedVideos.findIndex(video => video.id === id)

    if (index === -1) {
      savedVideos.push(details)
    } else {
      savedVideos.splice(index, 1)
    }
    console.log(savedVideos)
  }

  render() {
    const {isDarkMode, activeTab, savedVideos} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          activeTab,
          savedVideos,
          changeTab: this.changeTab,
          toggleTheme: this.toggleTheme,
          addSavedVideo: this.addSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={SpecificVideoDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
