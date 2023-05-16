"use client"

import styled from "styled-components"

import { mq } from "@/styles/utils/mediaQueries"

const Home = () => <Main>Praise the sun! \[T]/</Main>

const Main = styled.main`
  color: red;

  ${mq.from.M`
    color: blue;
  `}
`

export default Home
