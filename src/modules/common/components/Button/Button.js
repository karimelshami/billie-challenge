import React from 'react'
import { CustomButton, Img } from './Button.style'
import Loading from 'assets/loading.gif'
import PropTypes from 'prop-types'

const Button = props => {
  const { extendStyle, text, handleClick, loading, ...restProps } = props
  return (
    <CustomButton
      onClick={() => handleClick()}
      extendStyle={extendStyle}
      {...restProps}
    >
      {text}
      {loading && <Img src={Loading} alt="loading" />}
    </CustomButton>
  )
}
Button.propTypes = {
  img: PropTypes.string,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
  text: PropTypes.string,
  extendStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}
export default Button
