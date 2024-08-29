import styled from "styled-components/native"
import { CardColor } from "."

import { ArrowLeft, ArrowUpRight }from 'phosphor-react-native'


export const Container = styled.View<CardColor>`

  width: 100%;
  height: 12%;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 16px;

  position: relative;

  background-color: ${({ theme, bg }) => {
    const {colors} = theme

    if (bg === 'gray') return colors.base.gray_6
    if (bg === 'green') return colors.base.green_light
    if (bg === 'red') return colors.base.red_light
  }}

`
export const ButtonToStaticRight = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 9px;
`

export const ButtonToStaticLeft = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  left: 9px;
`

export const IconArrowUpRight = styled(ArrowUpRight).attrs<CardColor>(
  ({ theme, bg }) => ({
    size: 24,
    color:
      bg === 'green'
      ? theme.colors.brand.green_dark
      : bg === 'red'
      ? theme.colors.brand.red_dar
      : theme.colors.base.gray_1,
  }),
)<CardColor>``




export const IconArrowLeft = styled(ArrowLeft).attrs<CardColor>(
  ({ theme, bg }) => ({
    size: 24,
    color:
      bg === 'green'
      ? theme.colors.brand.green_dark
      : bg === 'red'
      ? theme.colors.brand.red_dar
      : theme.colors.base.gray_1,
  }),
)<CardColor>``




