import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
`;