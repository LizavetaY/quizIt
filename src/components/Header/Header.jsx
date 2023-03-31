import { Link } from "react-router-dom";
import { Header as MantineHeader, Text } from "@mantine/core";

import { ColorSchemeToggle } from "../ColorSchemeToggle";

export const Header = () => {
  return (
    <MantineHeader height={{ base: 50, md: 70 }} p="xl" sx={{ border: "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Text component={Link} variant="link" to="/">
          QuizIt
        </Text>
        <ColorSchemeToggle />
      </div>
    </MantineHeader>
  );
};
