import { useLogoutMutation } from "@/hooks/use-logout-mutation";
import { Box, Button, Title } from "@mantine/core";

export default function Home() {
  const { mutate } = useLogoutMutation();
  return (
    <Box>
      <Title order={1}>Home</Title>
      <Button color="red" onClick={() => mutate()}>
        Logout
      </Button>
    </Box>
  );
}
