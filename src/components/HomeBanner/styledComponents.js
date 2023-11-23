import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CloseBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  outline: none;
  height: 10px;
  width: 10px;
  margin-right: 20px;
`

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
`

export const LogoImage = styled.img`
  height: 40px;
  width: 180px;
  margin-bottom: 10px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #00306e;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.5;
    font-weight: 400;
  }
`

export const GetNowBtn = styled.button`
  padding: 5px;
  height: 40px;
  background-color: transparent;
  text-align: center;
  color: #00306e;
  border: solid 1px #00306e;
  cursor: pointer;
  outline: none;
  width: 130px;
  font-size: 14px;
  margin: 15px 0px;
`
