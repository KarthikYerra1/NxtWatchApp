import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const GamingVideoItemContainer = styled.li`
  list-style-type: none;
  width: 45%;
  margin-left: 10px;
  @media screen and (min-width: 576px) {
    width: 29%;
    max-width: 240px;
  }
`
export const VideoItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 90%;
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 250px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 12px;
  padding: 0px 10px;
  margin-right: 13px;
  width: 100%;
`

export const TextDetails = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
  line-height: 1;
  margin-bottom: 10px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const VideoListItem = styled.p`
  padding: 0px;
  margin: 0px;
  color: ${props => (props.dark ? '#64748b' : '#0f0f0f')};
  font-size: 13px;
  margin-bottom: 10px;
`
