import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config'
import MainImage from './Sections/MainImage'
import GridCards from '../commons/GridCards'
import { Row } from 'antd'

function MoviePage() {
  const [Movies, setMovies] = useState([]) //무비정보 저장
  const [MainMovieImage, setMainMovieImage] = useState(null)
  const [CurrentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-US&page=1`
    fetchMovies(endpoint)
  }, [])

  const fetchMovies = endpoint => {
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setMovies([...Movies, ...response.results])
        setMainMovieImage(response.results[0])
        setCurrentPage(response.page)
      })
  }
  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-US&page=${
      CurrentPage + 1
    }`
    fetchMovies(endpoint)
  }

  return (
    <div style={{ width: '100%', margin: '0' }}>
      {/* Main Img*/}
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.title}
          text={MainMovieImage.overview}
        />
      )}
      <div style={{ width: '85%', margin: '1rem auto' }}>
        <h2>Movies by latest</h2>
        <hr />

        {/* Movie grid cards*/}
        <Row gutter={[16, 16]}>
          {Movies &&
            Movies.map((i, index) => (
              <React.Fragment key={index}>
                <GridCards
                  moviepage
                  image={
                    i.poster_path
                      ? `${IMAGE_BASE_URL}w500${i.poster_path}`
                      : null
                  }
                  movieId={i.id}
                  movieName={i.original_title}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: 15 }}>
        <button onClick={loadMoreItems}>Load More</button>
      </div>
    </div>
  )
}

export default MoviePage
