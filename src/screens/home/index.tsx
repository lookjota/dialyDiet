import { Header } from "@components/Header";
import { Container } from "./styles";
import { Card } from "@components/Card";



export function HomeScreen() {
  return (
    <Container>
      <Header/>
      <Card title="90,86%" subtitle="das refeicoes dentro da dieta" bg="gray"/>
    </Container>
  )
}