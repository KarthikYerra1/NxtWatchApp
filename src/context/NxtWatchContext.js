import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  savedVideos: [],
  addSavedVideo: () => {},
})

export default NxtWatchContext
