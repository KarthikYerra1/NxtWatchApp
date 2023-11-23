import {Component} from 'react'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import LoaderComponent from '../LoaderComponent'

import SpecificVideoItem from '../SpecificVideoItem'

import FailureView from '../FailureView'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SpecificVideoDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstant.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnail: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        channelName: data.video_details.channel.name,
        profileImg: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: {...formattedData},
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  likeClicked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  dislikeClicked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderVideoDetails = details => (
    <NxtWatchContext.Consumer>
      {value => {
        const {addSavedVideo, savedVideos} = value
        const {isLiked, isDisliked} = this.state

        const saveVideo = video => {
          addSavedVideo(video)
          this.setState({isSaved: true})
        }

        const getActiveStatus = id => {
          const index = savedVideos.findIndex(each => each.id === id)
          if (index === -1) {
            return false
          }
          return true
        }

        return (
          <SpecificVideoItem
            details={details}
            isLiked={isLiked}
            isDisliked={isDisliked}
            likeClicked={this.likeClicked}
            dislikeClicked={this.dislikeClicked}
            saveVideo={saveVideo}
            getActiveStatus={getActiveStatus}
          />
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoader = () => <LoaderComponent height="100vh" />

  clickedRetryButton = () => {
    this.getVideoDetails()
  }

  renderFailureFetching = () => (
    <FailureView clickedRetryButton={this.clickedRetryButton} />
  )

  render() {
    const {videoDetails, apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderVideoDetails(videoDetails)
      case apiStatusConstant.failure:
        return this.renderFailureFetching()
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }
}

export default SpecificVideoDetails
