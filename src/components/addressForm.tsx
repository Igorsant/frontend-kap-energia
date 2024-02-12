import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../pages/checkout";
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
  errors: FieldErrors<Inputs>;
}

export default function AddressForm(props: Props) {
  const { register, errors } = props;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          {...register("name", { required: true })}
          label="Nome do cliente"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          error={errors.kwp && true}
          helperText={errors.kwp && "Watt invalido"}
          {...register("kwp", {
            required: true,
            pattern: /^[0-9]+$/g,
          })}
          label="Watt"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          label="CEP"
          fullWidth
          error={errors.cep && true}
          helperText={errors.cep && "cep invalido (apenas números)"}
          variant="standard"
          {...register("cep", {
            required: true,
            pattern: /^[0-9]{8}$/g,
          })}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="telhado">Tipo de telhado</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="PRATYC - Telha fibrocimento"
            name="telhado-radio-buttons"
            style={{ paddingLeft: "20px" }}
          >
            <FormControlLabel
              {...register("roof")}
              value="PRATYC - Telha fibrocimento"
              control={<Radio />}
              label="Fibrocimento"
            />
            <FormControlLabel
              {...register("roof")}
              value="PRATYC - Metálico mini-trilho baixo"
              control={<Radio />}
              label="Mini trilho baixo"
            />
            <FormControlLabel
              {...register("roof")}
              value="PRATYC - Laje"
              control={<Radio />}
              label="Laje"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="label">Classificação da rede</InputLabel>
          <Select
            required
            labelId="rede-labelid"
            id="rede"
            label="Classificação da rede"
            {...register("classification", { required: true })}
            defaultValue="trifasico"
          >
            <MenuItem value="monofasico">Monofásico</MenuItem>
            <MenuItem value="trifasico">Trifásico</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="label">Forma de pagamento</InputLabel>
          <Select
            required
            labelId="cartaoid"
            id="cartao"
            label="Forma de pagamento"
            {...register("cartao", { required: true })}
            defaultValue="SIM"
          >
            <MenuItem value="SIM">Cartão</MenuItem>
            <MenuItem value="NAO">Dinheiro</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
