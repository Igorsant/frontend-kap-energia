import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { searchSouEnergy, searchGTSolar } from "../services";
import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { Fragment, useState } from "react";
import AddressForm from "../components/addressForm";
import LoadingButton from '@mui/lab/LoadingButton';
import { NotificationAlert } from "../components/notificationAlert";
import { AxiosError } from "axios";

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
  kwp: number;
  cep: number;
  roof: "PRATYC - Telha fibrocimento" | "PRATYC - Metálico mini-trilho baixo" | "PRATYC - Laje";
  classification: "monofasico" | "trifasico";
  cartao: "SIM" | "NAO";
  parcelas: string;
};

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.kwp = parseFloat((data.kwp / 136.8).toFixed(2))
    console.log(data)
    setIsLoading(true)
  
    try{
      const results = await Promise.all([searchSouEnergy(data), searchGTSolar(data)])
      const propertiesToFormat = ['Cabos e Conectores Solar', 'Inversor', 'Módulo']
      
      for(let prop of propertiesToFormat) {
        const term = results[1].data[prop]
        const qtd = term.substring(term.length-2, term.length).trim()
        
        results[1].data[prop] = `${qtd} x `+term.substring(0, term.length-2).trim()
      }
      
      setIsLoading(false)
      setData(results)
    } catch (error) {
      setIsLoading(false)
      setMessage((error as AxiosError).message)
      setOpen(true)
    }
    
  };
  
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NotificationAlert message={message} open={open} setOpen={setOpen}/>
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
            <Box flexGrow={1}></Box>
            <Button onClick={() => {
              localStorage.removeItem('auth')
              window.location.href = '/login'
            }}>Logout</Button>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm">
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Cliente
            </Typography>
            <AddressForm register={register} errors={errors} watch={watch}/>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LoadingButton variant="contained" sx={{ mt: 3, ml: 1 }} type="submit" loading={isLoading}>
                Enviar
              </LoadingButton>
            </Box>
          </Paper>
        </Container>
        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Grid container spacing={3} margin="10">
            {data.map(item => (
              <Grid item xs={12} md={6}>
                <Paper style={{ padding: '5px 10px' }} variant="outlined">
                  <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" align="center">
                    {item.distributor}
                  </Typography>
                  <List>
                    {Object.entries(item.data).map(info => (
                      <ListItem>
                        <ListItemText
                          secondary={`${info[1]}`}
                          primary={`${info[0]}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Copyright />
      </form>
    </Fragment>
  );
}
