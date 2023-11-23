import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  font-family: 'Roboto';
  margin-top: 70px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-left: 20vw;
  }
`

export const FailureViewImage = styled.img`
  width: 50%;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-top: 60px;
  }
`

export const FailureViewHeading = styled.h2`
  color: ${props => (props.dark ? '#f4f4f4' : '#0f0f0f')};
  font-size: 16px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const FailureViewDescription = styled.p`
  color: ${props => (props.dark ? '#64748b' : '#909090')};
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  border-style: none;
  outline: none;
  cursor: pointer;
  height: 45px;
  padding: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 5px;
  width: 80px;
`
