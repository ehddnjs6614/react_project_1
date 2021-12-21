import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../NavBar/NavBar.css'
function NavBar(props) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const onClickHandler = () => {
    axios.get('/api/users/logout').then(response => {
      if (response.data.success) {
        props.history.push('/login')
      } else {
        alert('로그인을 해주세요.')
      }
    })
  }

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  const handleClick = () => setToggleMenu(!toggleMenu) //클릭시 화면이동
  return (
    <nav>
      {(toggleMenu || screenWidth > 600) && (
        <ul className="list">
          <li className="items">
            <Link onClick={handleClick} className="text-link" to="/">
              HOME
            </Link>
          </li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
          <li className="items">
            <Link onClick={handleClick} className="text-link" to="/register">
              회원가입
            </Link>
          </li>
          <li className="items">
            <Link onClick={handleClick} className="text-link" to="/login">
              로그인
            </Link>
          </li>
          <li className="items" onClick={onClickHandler}>
            Logout
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
  )
}

export default withRouter(NavBar)
