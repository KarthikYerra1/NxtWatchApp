import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import {BsDot} from 'react-icons/bs'

import ReactPlayer from 'react-player'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SpecificVideoDetailsContainer,
  TitleHeading,
  ViewsAndPublishedDate,
  VideoListItem,
  ViewAndLikeButtonsContainer,
  ButtonsContainer,
  Button,
  HorizontalLine,
  ChannelDetailsContainer,
  ChannelImage,
  ChannelNameAndDescriptionContainer,
  ChannelName,
  ChannelFollowers,
  VideoDescription,
} from './styledComponents'

const SpecificVideoDetails = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {
        details,
        isLiked,
        isDisliked,
        likeClicked,
        dislikeClicked,
        saveVideo,
        getActiveStatus,
      } = props
      const {
        id,
        videoUrl,
        title,
        viewCount,
        publishedAt,
        profileImg,
        channelName,
        subscriberCount,
        description,
      } = details
      const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
      const color = isDarkMode ? '#64748b' : '#909090'
      const statusActive = getActiveStatus(id)
      const saveText = statusActive ? 'Saved' : 'Save'

      const date = `${formatDistanceToNow(new Date(publishedAt))
        .split(' ')
        .slice(1)
        .join(' ')} ago`

      const onClickLiked = () => {
        likeClicked()
      }

      const onClickDisliked = () => {
        dislikeClicked()
      }

      const onClickSaveVideo = () => {
        saveVideo(details)
      }

      return (
        <SpecificVideoDetailsContainer
          data-testid="videoItemDetails"
          bgColor={bgColor}
        >
          <ReactPlayer url={videoUrl} controls width="100%" />
          <TitleHeading dark={isDarkMode}>{title}</TitleHeading>
          <ViewAndLikeButtonsContainer>
            <ViewsAndPublishedDate>
              <VideoListItem color={color} views>
                {viewCount} views
              </VideoListItem>
              <BsDot color={isDarkMode ? '#64748b' : '#0f0f0f'} />
              <VideoListItem color={color}>{date}</VideoListItem>
            </ViewsAndPublishedDate>
            <ButtonsContainer>
              <Button active={isLiked} onClick={onClickLiked}>
                <AiOutlineLike size={13} />
                Like
              </Button>
              <Button active={isDisliked} onClick={onClickDisliked}>
                <AiOutlineDislike size={13} />
                Dislike
              </Button>
              <Button active={statusActive} onClick={onClickSaveVideo}>
                <CgPlayListAdd size={13} />
                {saveText}
              </Button>
            </ButtonsContainer>
          </ViewAndLikeButtonsContainer>
          <HorizontalLine color={color} />
          <ChannelDetailsContainer>
            <ChannelImage alt="channel logo" src={profileImg} />
            <ChannelNameAndDescriptionContainer>
              <ChannelName dark={isDarkMode}>{channelName}</ChannelName>
              <ChannelFollowers as="p" dark={isDarkMode}>
                {subscriberCount} subscribers
              </ChannelFollowers>
            </ChannelNameAndDescriptionContainer>
          </ChannelDetailsContainer>
          <VideoDescription color={isDarkMode ? '#ebebeb' : '#424242'}>
            {description}
          </VideoDescription>
        </SpecificVideoDetailsContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SpecificVideoDetails
