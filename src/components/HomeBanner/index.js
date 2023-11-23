import {Component} from 'react'

import {GrFormClose} from 'react-icons/gr'

import {
  BannerContainer,
  CloseBtnContainer,
  CloseBtn,
  BannerContentContainer,
  LogoImage,
  BannerText,
  GetNowBtn,
} from './styledComponents'

class HomeBanner extends Component {
  state = {
    showBanner: true,
  }

  onClickClose = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      showBanner && (
        <BannerContainer data-testid="banner">
          <CloseBtnContainer>
            <CloseBtn data-testid="close" onClick={this.onClickClose}>
              <GrFormClose size={25} />
            </CloseBtn>
          </CloseBtnContainer>
          <BannerContentContainer>
            <LogoImage
              alt="nxt watch logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <GetNowBtn>GET IT NOW</GetNowBtn>
          </BannerContentContainer>
        </BannerContainer>
      )
    )
  }
}

export default HomeBanner
