import {Component} from 'react'

import Cookies from 'js-cookie'

import {ImFire} from 'react-icons/im'

import NxtWatchContext from '../../context/NxtWatchContext'

import LoaderComponent from '../LoaderComponent'

import TrendingVideoItem from '../TrendingVideoItem'

import FailureView from '../FailureView'

import {
  TrendingContainer,
  RenderContainer,
  TrendingVideosListContainer,
  TrendingHeadingContainer,
  TrendingIconContainer,
  TrendingHeading,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        channelName: each.channel.name,
        channelProfileImage: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingVideos: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoader = () => <LoaderComponent height="50vh" />

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state

    return (
      <TrendingVideosListContainer>
        {trendingVideos.map(each => (
          <TrendingVideoItem key={each.id} details={each} />
        ))}
      </TrendingVideosListContainer>
    )
  }

  clickedRetryButton = () => {
    this.getTrendingVideos()
  }

  renderTrendingFailure = () => (
    <FailureView clickedRetryButton={this.clickedRetryButton} />
  )

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderTrendingVideos()
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      case apiStatusConstant.failure:
        return this.renderTrendingFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <TrendingContainer
              data-testid="trending"
              bgColor={isDarkMode ? '#0f0f0f' : '#f9f9f9'}
            >
              <TrendingHeadingContainer data-testid="banner" dark={isDarkMode}>
                <TrendingIconContainer dark={isDarkMode}>
                  <ImFire size={25} color="#ff0000" />
                </TrendingIconContainer>
                <TrendingHeading dark={isDarkMode}>Trending</TrendingHeading>
              </TrendingHeadingContainer>
              <RenderContainer>{this.renderVideos()}</RenderContainer>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
