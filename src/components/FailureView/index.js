import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
} from './styledComponents'

const FailureView = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {clickedRetryButton} = props
      const failureImage = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      const onClickRetry = () => {
        clickedRetryButton()
      }

      return (
        <FailureViewContainer>
          <FailureViewImage alt="failure view" src={failureImage} />
          <FailureViewHeading dark={isDarkMode}>
            Oops! Something Went Wrong
          </FailureViewHeading>
          <FailureViewDescription dark={isDarkMode}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureViewDescription>
          <RetryButton type="button" onClick={onClickRetry}>
            Retry
          </RetryButton>
        </FailureViewContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default FailureView
