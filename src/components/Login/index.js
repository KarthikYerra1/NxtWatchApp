import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginContainer,
  LoginFormContainer,
  LogoImage,
  InputContainer,
  Label,
  Input,
  CheckBoxContainer,
  InputCheckBox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    passwordType: 'password',
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckBox = event => {
    if (event.target.checked) {
      this.setState({passwordType: 'text'})
    } else {
      this.setState({passwordType: 'password'})
    }
  }

  renderUsernameContainer = dark => {
    const {username} = this.state

    return (
      <>
        <Label dark={dark} htmlFor="username">
          USERNAME
        </Label>
        <Input
          dark={dark}
          type="text"
          onChange={this.onChangeUsername}
          value={username}
          placeholder="Username"
          id="username"
        />
      </>
    )
  }

  renderPasswordContainer = dark => {
    const {password, passwordType} = this.state

    return (
      <>
        <Label dark={dark} htmlFor="password">
          PASSWORD
        </Label>
        <Input
          dark={dark}
          type={passwordType}
          onChange={this.onChangePassword}
          value={password}
          placeholder="Password"
          id="password"
        />
        <CheckBoxContainer>
          <InputCheckBox
            dark={dark}
            type="checkbox"
            id="show password"
            onChange={this.onClickCheckBox}
          />
          <Label checkbox dark={dark} htmlFor="show password">
            Show Password
          </Label>
        </CheckBoxContainer>
      </>
    )
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const {showError, errorMsg} = this.state
          const logo = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const dark = isDarkMode
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginContainer height="100vh" dark={isDarkMode}>
              <LoginFormContainer
                onSubmit={this.onSubmitForm}
                as="form"
                dark={isDarkMode}
              >
                <LogoImage alt="website logo" dark={isDarkMode} src={logo} />
                <InputContainer>
                  {this.renderUsernameContainer(isDarkMode)}
                </InputContainer>
                <InputContainer>
                  {this.renderPasswordContainer(dark)}
                </InputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
