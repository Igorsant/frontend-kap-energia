import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import { useForm, SubmitHandler } from "react-hook-form";
// import { sendForm } from "../service";
import { sendHelloWorld } from "../service";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export type Inputs = {
  name: string;
  watt: number;
  cep: number;
  roof: "PRATYC - Telha fibrocimento" | "PRATYC - Metálico mini-trilho baixo" | "PRATYC - Laje";
  classification: "monofasico" | "trifasico";
  cartao: "SIM" | "NAO";
};

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (/*data*/) => {
    // data.watt = parseFloat((data.watt / 136.8).toFixed(2))
    // console.log(data)
    // sendForm(data).then((data) => console.log(data));
    console.log(sendHelloWorld())
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Kap Solar
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Cliente
            </Typography>
            <AddressForm register={register} errors={errors} />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" sx={{ mt: 3, ml: 1 }} type="submit">
                Enviar
              </Button>
            </Box>
          </Paper>
          <Copyright />
        </Container>
      </form>
    </React.Fragment>
  );
}
