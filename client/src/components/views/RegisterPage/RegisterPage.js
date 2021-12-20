import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { registerUser } from '../../../_actions/user_action'

function RegisterPage(props) {
  const dispatch = useDispatch()

  //안에서 데이터를 바꿀려면 스테이트에 변화를 줘야한다
  //email을 위한 스테이트와 password를위한 스테이트를 각각만들어줘야함
  const [Email, setEmail] = useState('')
  const [Name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value)
  }

  const onNameHandler = e => {
    setName(e.currentTarget.value)
  }

  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value)
  }

  const onConfirmPasswordHandler = e => {
    setConfirmPassword(e.currentTarget.value)
  }

  const onSubmitHandler = e => {
    e.preventDefault() //리프레쉬를 막아준다. 이걸안해주면 다른액션은 안먹고 리프레쉬만계속함.

    //패스워드랑 컨펌패스워드가 같은지 확인
    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    }
    dispatch(registerUser(body)).then(response => {
      if (response.payload.success) {
        props.history.push('/login')
      } else {
        alert('회원가입 실패')
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

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />

        <br />
        <button>회원가입</button>
      </form>
    </div>
  )
}
export default withRouter(RegisterPage)
