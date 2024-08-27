import { StyleSheet } from "react-native";

import styled from 'styled-components/native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 50,
  }
})

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.base.gray_7};
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.base.gray_1};
  font-size: 50px;

`