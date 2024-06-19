import { ActivityIndicator } from "react-native";
import { Container, LoadIndicator } from "./styles";

export function Loading() {
  return (
    <Container>
      <LoadIndicator size="large" color="#0000ff" />
    </Container>
  );
};

