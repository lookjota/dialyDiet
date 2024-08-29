

import { Typography } from "@components/Typography"
import { Container } from "./styles"
import { ViewProps } from "react-native"
import { FontSizeTitle } from "@components/Typography/types"
import { ButtonToStaticRight } from "./styles"
import { IconArrowUpRight } from "./styles"


export type TextSize =  {
  titleFontSize?: FontSizeTitle
}

export type CardColor = {
  bg?: 'gray' | 'green' | 'red'
}

type CardProps = ViewProps & CardColor & TextSize & {
  title: string
  subtitle: string
}


export function Card({
  bg = 'gray', 
  titleFontSize = 'title_lg',
  ...props
  }: CardProps) {
  return (
    <Container bg={bg} {...props}>
      <ButtonToStaticRight>
        <IconArrowUpRight/>
      </ButtonToStaticRight>
      <Typography fontSize={titleFontSize} lineHeight="lg" fontFamily="bold">
        {props.title}
      </Typography>
      <Typography color="gray_2" fontSize="body_sm" textAlign="center">
        {props.subtitle}
      </Typography>
    </Container>
  )
}