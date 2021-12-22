import React from 'react'
import { Descriptions } from 'antd'

function MovieInfo(props) {
  let { detail } = props
  console.log(detail)
  return (
    <div>
      <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">{detail.title}</Descriptions.Item>
        <Descriptions.Item label="release_date">
          {detail.release_date}
        </Descriptions.Item>
        <Descriptions.Item label="revenue">{detail.revenue}</Descriptions.Item>
        <Descriptions.Item label="runtime">{detail.runtime}</Descriptions.Item>
        <Descriptions.Item label="vote_average" span={2}>
          {detail.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="vote_count">
          {detail.vote_count}
        </Descriptions.Item>
        <Descriptions.Item label="status">{detail.status}</Descriptions.Item>
        <Descriptions.Item label="popularity">
          {detail.popularity}
        </Descriptions.Item>
        <Descriptions.Item label="homepage">
          <a href={detail.homepage} target="_blank" rel="noreferrer">
            {detail.homepage}
          </a>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default MovieInfo
