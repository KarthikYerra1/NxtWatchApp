import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingVideoItemContainer,
  VideoItemLink,
  GamingItemContainer,
  ThumbnailImg,
  DetailsContainer,
  TextDetails,
  VideoListItem,
} from './styledComponents'

const GamingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, changeTab} = value
      const color = isDarkMode ? '#fff' : '#000'
      const {details} = props
      const {id, title, thumbnailUrl, viewCount} = details

      const changeActiveTab = () => {
        changeTab('')
      }

      return (
        <GamingVideoItemContainer onClick={changeActiveTab}>
          <VideoItemLink to={`/videos/${id}`}>
            <GamingItemContainer>
              <ThumbnailImg alt="video thumbnail" src={thumbnailUrl} />
              <DetailsContainer>
                <TextDetails color={color}>{title}</TextDetails>
                <VideoListItem dark={isDarkMode} views>
                  {viewCount} Watching WorldWide
                </VideoListItem>
              </DetailsContainer>
            </GamingItemContainer>
          </VideoItemLink>
        </GamingVideoItemContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingVideoItem
