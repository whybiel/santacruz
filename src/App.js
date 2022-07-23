import React from "react";
import { createGlobalStyle } from "styled-components";

//COMPONENTS
import Text from "./components/TextMain/index"
import ODS from "./components/ods/index"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    background-color: #0093E9;
    background-image: linear-gradient(315deg, #0093E9 0%, #80D0C7 100%);
  }
`

export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Text/>
      <ODS/>
    </>
  )
}