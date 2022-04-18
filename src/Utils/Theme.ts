import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      padding: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
      padding: string;
    };
  }
}

export const theme = createTheme({
  status: {
    danger: orange[500],
    padding: "10px",
  },
  spacing: 4,
});
