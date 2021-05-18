import React from 'react'
import { Img, Container } from './Loader.style'
import PropTypes from 'prop-types'

const Loader = props => {
  const { loader } = props
  return (
    <Container>
      <Img src={loader} alt="loading" />
    </Container>
  )
}
Loader.propTypes = {
  loader: PropTypes.string
}
export default Loader
