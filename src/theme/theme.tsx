import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "none",
            color: "black",
            height: "50px",
            textDecoration: "none",
            textDecorationStyle: "none",
            fontFamily: "Oswald",
            fontSize: "20px",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "transparent",
            color: "green",
          },
        },
      },
    },
  },
});
