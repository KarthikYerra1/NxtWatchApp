import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'

import {LoaderContainer} from './styledComponents'

const LoaderComponent = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const bgColor = isDarkMode ? '#000' : '#f9f9f9'
      const {height} = props

      return (
        <LoaderContainer height={height} bgColor={bgColor}>
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
          </div>
        </LoaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default LoaderComponent
