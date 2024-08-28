import { Header } from "@components/Header";
import { Container, styles, Title } from "./styles";
import { Typography } from "@components/Typography";




export function HomeScreen() {
  return (
    <Container>
      <Header/>
      <Typography textAlign="right">Home Screen</Typography>
      <Typography fontFamily="bold">Home Screen</Typography>
      <Typography>Home Screen</Typography>

    </Container>
  )
}