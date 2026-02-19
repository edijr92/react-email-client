import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({});

export const MuiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
