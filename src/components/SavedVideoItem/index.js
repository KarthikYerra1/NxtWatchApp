import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideoItemContainer,
  VideoItemContainer,
  ThumbnailImg,
  DetailsContainer,
  ChannelProfileImg,
  TextDetailsContainer,
  TextDetails,
  ChannelNameAndViewsContainer,
  ChannelName,
  ViewsAndPublishedDate,
  VideoListItem,
  VideoItemLink,
} from './styledComponents'

const SavedVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, changeTab} = value
      const color = isDarkMode ? '#fff' : '#000'
      const {details} = props
      const {
        id,
        title,
        thumbnail,
        channelName,
        profileImg,
        viewCount,
        publishedAt,
      } = details

      const date = `${formatDistanceToNow(new Date(publishedAt))
        .split(' ')
        .slice(1)
        .join(' ')} ago`

      const changeActiveTab = () => {
        changeTab('')
      }

      return (
        <SavedVideoItemContainer onClick={changeActiveTab}>
          <VideoItemLink to={`/videos/${id}`}>
            <VideoItemContainer>
              <ThumbnailImg alt="video thumbnail" src={thumbnail} />
              <DetailsContainer>
                <ChannelProfileImg alt="channel logo" src={profileImg} />
                <TextDetailsContainer>
                  <TextDetails color={color}>{title}</TextDetails>
                  <ChannelNameAndViewsContainer>
                    <ChannelName dark={isDarkMode}>{channelName}</ChannelName>
                    <ViewsAndPublishedDate>
                      <VideoListItem dark={isDarkMode} views>
                        {viewCount} views
                      </VideoListItem>
                      <BsDot color={isDarkMode ? '#64748b' : '#0f0f0f'} />
                      <VideoListItem dark={isDarkMode}>{date}</VideoListItem>
                    </ViewsAndPublishedDate>
                  </ChannelNameAndViewsContainer>
                </TextDetailsContainer>
              </DetailsContainer>
            </VideoItemContainer>
          </VideoItemLink>
        </SavedVideoItemContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideoItem
