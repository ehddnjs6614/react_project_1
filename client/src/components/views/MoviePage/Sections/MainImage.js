import React from 'react'

function MainImage(props) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0)
        20%,rgba(0,0,0,0)
        10%,rgba(0,0,0,0.65)
        65%),
        url('${props.image}')`,
        backgroundColor: '#fff',
        height: '600px',
        backgroundSize: '100%, auto',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        position: 'relative',
      }}
    >
      <div>
        <div
          style={{
            position: 'absolute',
            maxWidth: '500px',
            bottom: '2rem',
          }}
        >
          <h2 style={{ color: 'white' }}>{props.title}</h2>
          <p style={{ color: 'white', fontSize: '1rem' }}>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default MainImage
