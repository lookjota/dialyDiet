import styled from "styled-components/native"
import { CardColor } from "."
import arrowUp from '@assets/arrow-up-right.svg'


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

export const IconArrowUpRight = styled(arrowUp)``




