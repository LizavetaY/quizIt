import { Outlet } from "react-router-dom";
import { AppShell, useMantineTheme } from "@mantine/core";

import { Footer, Header } from "@/components";

export const ApplicationShell = () => {
  const { fn } = useMantineTheme();

  return (
    <AppShell
      sx={{
        backgroundImage: fn.gradient(),
      }}
      header={<Header />}
      footer={<Footer />}
    >
      <Outlet />
    </AppShell>
  );
};
