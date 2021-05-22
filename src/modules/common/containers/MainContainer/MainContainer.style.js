import styled, { css, createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
`;
const font = () => css`
  @font-face {
    font-family: ${"family"};
`;
export const GlobalStyle = createGlobalStyle`

* {
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
}
  body {
    background-color: #fff;
  }
  

    
`;
