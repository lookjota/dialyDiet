

import { Typography } from "@components/Typography"
import { Container } from "./styles"
import { ViewProps } from "react-native"
import { FontSizeTitle } from "@components/Typography/types"
import { ButtonToStaticRight } from "./styles"
import { IconArrowUpRight } from "./styles"
import { ButtonToStaticLeft } from "./styles"
import { IconArrowLeft } from "./styles"


export type TextSize =  { titleFontSize?: FontSizeTitle}

export type CardColor = { bg?: 'gray' | 'green' | 'red'}

export type ButtonFloatProps = { iconPosition?: 'left' | 'right'}

type CardProps = ViewProps & 
  CardColor & 
  TextSize & 
  ButtonFloatProps & {
  title: string
  subtitle: string
  showIconButton?: boolean
  onPress?: () => void
}


export function Card({
  bg = 'gray', 
  titleFontSize = 'title_lg',
  iconPosition = 'right',
  showIconButton = true,
  ...props
  }: CardProps) {
  return (
    <Container bg={bg} {...props}>
      {
        showIconButton && iconPosition === 'left' ? (
          <ButtonToStaticLeft onPress={props.onPress}>
            <IconArrowLeft bg={bg}/>
          </ButtonToStaticLeft>
           
        ): (
          <ButtonToStaticRight onPress={props.onPress}>
            <IconArrowUpRight bg={bg}/>
          </ButtonToStaticRight>
        )
      }
      <Typography fontSize={titleFontSize} lineHeight="lg" fontFamily="bold">
        {props.title}
      </Typography>
      <Typography color="gray_2" fontSize="body_sm" textAlign="center">
        {props.subtitle}
      </Typography>
    </Container>
  )
}