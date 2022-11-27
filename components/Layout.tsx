import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as MUILink } from "@mui/material";

type Props = {
  children: React.ReactNode
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://nazo.dev/">
        なぞらぼ
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Link href="/" passHref legacyBehavior>
            <MUILink color="inherit" underline="none">
              <Typography variant="h6" color="inherit" noWrap>
                なぞらぼ
              </Typography>
            </MUILink>
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        { children }
      </main>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          このページのソースコードは <a href="https://github.com/nazo/nazo.dev" rel="noreferrer" target="_blank">https://github.com/nazo/nazo.dev</a> で公開しています。
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};
