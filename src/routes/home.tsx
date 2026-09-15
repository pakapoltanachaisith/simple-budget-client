import { Box, Button, Title } from "@mantine/core";
import { Link } from "react-router";

export default function Home() {
  return (
    <Box>
      <Title order={1}>Home</Title>
      <Button component={Link} to="/login">
        Sign In
      </Button>
    </Box>
  );
}
