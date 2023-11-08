import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./Checkout";
import FormControl from "@mui/material/FormControl/FormControl";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import Radio from "@mui/material/Radio/Radio";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";

interface Props {
  register: UseFormRegister<Inputs>;
}

export default function AddressForm(props: Props) {
  const { register } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            {...register("name")}
            label="Nome do cliente"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            {...register("kwp")}
            label="kwp"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField name="cep" label="CEP" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="telhado">Tipo de telhado</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="fibrocimento"
              name="telhado-radio-buttons"
              style={{ paddingLeft: "20px" }}
            >
              <FormControlLabel
                value="fibrocimento"
                control={<Radio />}
                label="Fibrocimento"
              />
              <FormControlLabel
                value="minitrilho"
                control={<Radio />}
                label="Mini trilho baixo"
              />
              <FormControlLabel value="laje" control={<Radio />} label="Laje" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="label">Classificação da rede</InputLabel>
            <Select
              labelId="rede-labelid"
              id="rede"
              label="Classificação da rede"
            >
              <MenuItem value={"monofasico"}>Monofásico</MenuItem>
              <MenuItem value={"trifasico"}>Trifásico</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="label">Forma de pagamento</InputLabel>
            <Select
              labelId="payment-labelid"
              id="payment"
              label="Forma de pagamento"
            >
              <MenuItem value={"Cartão"}>Cartão</MenuItem>
              <MenuItem value={"Dinheiro"}>Dinheiro</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
