import { Row } from 'antd'
import React from 'react'
import ReactPlayer from 'react-player'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {
  // useEffect(() => {
  //   axios.get('/api/hello').then(response => {
  //     console.log(response)
  //   })
  // }, [])

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 50,
        }}
      >
        <Row gutter={[16, 16]}>
          <div style={{ margin: 10, marginLeft: 28 }}>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>
              [스파이더맨: 노 웨이 홈] 2차예고편
            </h2>

            <ReactPlayer
              width="500px"
              controls
              url="https://www.youtube.com/watch?v=yFZh-Wqi7RI"
            />
          </div>
          <div style={{ margin: 10, marginLeft: 28 }}>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>
              [듄] 메인 예고편
            </h2>
            <ReactPlayer
              width="500px"
              controls
              url="https://www.youtube.com/watch?v=-5Dc8EMVYBo"
            />
          </div>
          <div style={{ margin: 10, marginLeft: 28 }}>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>
              [이터널스] 메인 예고편
            </h2>
            <ReactPlayer
              width="500px"
              controls
              url="https://www.youtube.com/watch?v=BdkSkI61aGo"
            />
          </div>
        </Row>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 50,
        }}
      >
        <Row gutter={[16, 16]}>
          <div style={{ margin: 10, marginBottom: 50, marginLeft: 28 }}>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>
              [매트릭스: 리저렉션] 2차 예고편
            </h2>
            <ReactPlayer
              width="500px"
              controls
              url="https://www.youtube.com/watch?v=-5BrUWtDHfE"
            />
          </div>
          <div style={{ margin: 10, marginLeft: 28 }}>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>
              [베놈 2: 렛 데어 비 카니지] 2차 예고편
            </h2>
            <ReactPlayer
              width="500px"
              controls
              url="https://www.youtube.com/watch?v=BryJA-Xp-Q4"
            />
          </div>
          <div style={{ margin: 10, marginLeft: 28 }}>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>
              [샹치와 텐 링즈의 전설] 메인 예고편
            </h2>
            <ReactPlayer
              width="500px"
              controls
              url="https://www.youtube.com/watch?v=Pj7CadRf82k"
            />
          </div>
        </Row>
      </div>
    </div>
  )
}

export default withRouter(LandingPage)
