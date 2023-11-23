import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingVideoItemContainer,
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

const TrendingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, changeTab} = value
      const color = isDarkMode ? '#fff' : '#0f0f0f'
      const {details} = props
      const {
        id,
        title,
        thumbnailUrl,
        channelName,
        channelProfileImage,
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
        <TrendingVideoItemContainer onClick={changeActiveTab}>
          <VideoItemLink to={`/videos/${id}`}>
            <VideoItemContainer>
              <ThumbnailImg alt="video thumbnail" src={thumbnailUrl} />
              <DetailsContainer>
                <ChannelProfileImg
                  alt="channel logo"
                  src={channelProfileImage}
                />
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
        </TrendingVideoItemContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TrendingVideoItem
