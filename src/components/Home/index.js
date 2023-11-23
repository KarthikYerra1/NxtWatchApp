import {Component} from 'react'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import HomeBanner from '../HomeBanner'
import SearchContainer from '../SearchContainer'
import LoaderComponent from '../LoaderComponent'
import HomeVideoItem from '../HomeVideoItem'
import FailureView from '../FailureView'

import {
  HomeContainer,
  RenderContainer,
  HomeVideosListContainer,
  NoOrFailureVideosContainer,
  NoOrFailureVideosImage,
  NoOrFailureVideosHeading,
  NoOrFailureVideosDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideos: [],
    apiStatus: apiStatusConstant.initial,
    searchInput: '',
    inputText: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {inputText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${inputText}`
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
        homeVideos: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onChangeSearchInput = value => {
    this.setState({searchInput: value})
  }

  onEnterSearchInput = () => {
    const {searchInput} = this.state
    this.setState({inputText: searchInput}, this.getHomeVideos)
  }

  onClickSearchIcon = () => {
    const {searchInput} = this.state
    this.setState({inputText: searchInput}, this.getHomeVideos)
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  renderLoader = () => <LoaderComponent height="50vh" />

  renderAvailableHomeVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const {homeVideos} = this.state

        return homeVideos.length !== 0 ? (
          <HomeVideosListContainer>
            {homeVideos.map(each => (
              <HomeVideoItem key={each.id} details={each} />
            ))}
          </HomeVideosListContainer>
        ) : (
          <NoOrFailureVideosContainer>
            <NoOrFailureVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoOrFailureVideosHeading dark={isDarkMode}>
              No Search results found
            </NoOrFailureVideosHeading>
            <NoOrFailureVideosDescription dark={isDarkMode}>
              Try different key words or remove search filter
            </NoOrFailureVideosDescription>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </NoOrFailureVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  clickedRetryButton = () => {
    this.getHomeVideos()
  }

  renderFailureView = () => (
    <FailureView clickedRetryButton={this.clickedRetryButton} />
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderAvailableHomeVideos()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const bgColor = isDarkMode ? '#181818' : '#f9f9f9'

          return (
            <HomeContainer bgColor={bgColor}>
              <HomeBanner />
              <SearchContainer
                searchInput={searchInput}
                onChangeSearchInput={this.onChangeSearchInput}
                onEnterSearchInput={this.onEnterSearchInput}
                onClickSearchIcon={this.onClickSearchIcon}
              />
              <RenderContainer data-testid="Home" bgColor={bgColor}>
                {this.renderAllVideos()}
              </RenderContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
