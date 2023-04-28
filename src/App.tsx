import { Grid, Card, Text, Container } from "@nextui-org/react";
import { useState } from "react";

interface Props {
  text: string;
  color?: string;
}

export default function App() {
  const items = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const MockItem = ({ text, color }: Props) => {
    return (
      <div>
        <Card css={{ h: "$20", w: "$36", $$cardColor: color }}>
          <Card.Body></Card.Body>
        </Card>
        <Text h6 size={15} color="black" css={{ m: "auto" }}>
          {text}
        </Text>
      </div>
    );
  };
  return (
    <Container>
      <Grid.Container gap={2} justify="center">
        {items.map((item) => (
          <Grid lg key={item}>
            <MockItem text={`${item}`} color="#eab308" />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
}
