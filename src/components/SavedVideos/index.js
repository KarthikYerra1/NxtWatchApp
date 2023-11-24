import {ImFire} from 'react-icons/im'

import NxtWatchContext from '../../context/NxtWatchContext'

import SavedVideoItem from '../SavedVideoItem'

import {
  SavedVideosContainer,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  RenderContainer,
  SavedVideosListContainer,
  NoVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, savedVideos} = value

      const renderVideos = () => (
        <SavedVideosListContainer>
          {savedVideos.map(each => (
            <SavedVideoItem key={each.id} details={each} />
          ))}
        </SavedVideosListContainer>
      )

      return savedVideos.length !== 0 ? (
        <SavedVideosContainer
          data-testid="savedVideos"
          bgColor={isDarkMode ? '#0f0f0f' : '#f9f9f9'}
        >
          <SavedVideosHeadingContainer data-testid="banner" dark={isDarkMode}>
            <SavedVideosIconContainer dark={isDarkMode}>
              <ImFire size={25} color="#ff0000" />
            </SavedVideosIconContainer>
            <SavedVideosHeading dark={isDarkMode}>
              Saved Videos
            </SavedVideosHeading>
          </SavedVideosHeadingContainer>
          <RenderContainer>{renderVideos()}</RenderContainer>
        </SavedVideosContainer>
      ) : (
        <NoVideosContainer
          data-testid="savedVideos"
          bgColor={isDarkMode ? '#0f0f0f' : '#f9f9f9'}
        >
          <NoSavedVideosImage
            alt="no saved videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          />
          <NoSavedVideosHeading dark={isDarkMode}>
            No saved videos found
          </NoSavedVideosHeading>
          <NoSavedVideosDescription dark={isDarkMode}>
            You can save your videos while watching them
          </NoSavedVideosDescription>
        </NoVideosContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
