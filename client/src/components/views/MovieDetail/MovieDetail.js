import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config'
import GridCards from '../commons/GridCards'
import MainImage from '../MoviePage/Sections/MainImage'
import MovieInfo from './Sections/MovieInfo'
import Favorite from './Sections/Favorite'
//펑셔널 컨포논토

function MovieDetail(props) {
  let movieId = props.match.params.movieId

  const [Detail, setDetail] = useState([])
  const [Casts, setCasts] = useState([])
  const [ActorToggle, setActorToggle] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko`)
      .then(response => response.json())
      .then(response => {
        setDetail(response)
      })

    //영화 등장인물 api
    fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setCasts(response.cast)
      })
  }, [])

  const toggleActorView = () => {
    setActorToggle(!ActorToggle)
  }

  return (
    <div>
      {/*Header*/}
      <div style={{ margin: 0 }}>
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${Detail.backdrop_path}`}
          title={Detail.title}
          text={Detail.overview}
        />
      </div>

      {/*Body*/}
      <div style={{ width: '85%', margin: '1rem auto' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Favorite
            movieInfo={Detail}
            movieId={movieId}
            userFrom={localStorage.getItem('userId')}
          />
        </div>

        {/* Movie info*/}
        <MovieInfo detail={Detail} />
        <br />
        {/* Actors Grid*/}
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}
        >
          <button onClick={toggleActorView}> Toggle Actor View </button>
        </div>
        {ActorToggle && (
          <Row gutter={[16, 16]}>
            {Casts &&
              Casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : null
                    }
                    characterName={cast.name}
                  />
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </div>
  )
}

export default MovieDetail
