import React from "react";
import Success from "assets/success.png";
import { Img, Container, extendTextStyle } from "./SuccessMessage.style";
import Text from "modules/common/components/Text";
import PropTypes from "prop-types";

const SuccessMessage = (props) => {
  const { msg } = props;
  return (
    <Container>
      <Img src={Success} alt="success img" />
      <Text extendStyle={extendTextStyle} successText text={msg} />
    </Container>
  );
};
export default SuccessMessage;

SuccessMessage.propTypes = {
  msg: PropTypes.string,
};
