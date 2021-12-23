import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom'
function LoginPage(props) {
  const dispatch = useDispatch()

  //안에서 데이터를 바꿀려면 스테이트에 변화를 줘야한다
  //email을 위한 스테이트와 password를위한 스테이트를 각각만들어줘야함
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value)
  }

  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value)
  }

  const onSubmitHandler = e => {
    e.preventDefault() //리프레쉬를 막아준다. 이걸안해주면 다른액션은 안먹고 리프레쉬만계속함.

    let body = {
      email: Email,
      password: Password,
    }
    dispatch(loginUser(body)).then(response => {
      if (response.payload.loginSuccess) {
        window.localStorage.setItem('userId', response.payload.userId) //로그인 흔적을 로컬스토리지에 임의저장
        props.history.push('/')
      } else {
        alert('Error')
      }
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default withRouter(LoginPage)
