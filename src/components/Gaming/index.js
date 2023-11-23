import {Component} from 'react'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'

import LoaderComponent from '../LoaderComponent'

import GamingVideoItem from '../GamingVideoItem'

import FailureView from '../FailureView'

import {
  GamingContainer,
  RenderContainer,
  GamingVideosListContainer,
  GamingHeadingContainer,
  GamingIconContainer,
  GamingHeading,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoader = () => <LoaderComponent height="50vh" />

  renderGamingVideos = () => {
    const {gamingVideos} = this.state

    return (
      <GamingVideosListContainer>
        {gamingVideos.map(each => (
          <GamingVideoItem key={each.id} details={each} />
        ))}
      </GamingVideosListContainer>
    )
  }

  clickedRetryButton = () => {
    this.getGamingVideos()
  }

  renderGamingFailure = () => (
    <FailureView clickedRetryButton={this.clickedRetryButton} />
  )

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderGamingVideos()
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      case apiStatusConstant.failure:
        return this.renderGamingFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'

          return (
            <GamingContainer data-testid="gaming" bgColor={bgColor}>
              <GamingHeadingContainer data-testid="banner" dark={isDarkMode}>
                <GamingIconContainer dark={isDarkMode}>
                  <SiYoutubegaming size={25} color="#ff0000" />
                </GamingIconContainer>
                <GamingHeading dark={isDarkMode}>Gaming</GamingHeading>
              </GamingHeadingContainer>
              <RenderContainer>{this.renderVideos()}</RenderContainer>
            </GamingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
