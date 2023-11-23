import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  background-size: cover;
  min-height: ${props => props.height};
  padding: 20px;
`
export const LoginFormContainer = styled(LoginContainer)`
  background-color: ${props => (props.dark ? '#0f0f0f' : ' #f8fafc')};
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 50px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 60%;
    flex-shrink: 0;
    padding: 60px;
  }
`

export const LogoImage = styled.img`
  height: 30px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  width: 100%;
  margin-top: 20px;
`

export const Label = styled.label`
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
  font-size: 13px;
  margin-bottom: ${props => (props.checkbox ? '' : '7px')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const Input = styled.input`
  height: 40px;
  border: solid 1px ${props => (props.dark ? '#1e293b' : '#212121')};
  background-color: ${props => (props.dark ? '#0f0f0f' : '')};
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
  font-size: 15px;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`

export const InputCheckBox = styled(Input)`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`
export const LoginButton = styled.button`
  height: 35px;
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin: 0px;
  padding: 0px;
  text-align: left;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
