import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { UseFormRegister } from 'react-hook-form';
import { Inputs } from './Checkout';

interface Props {
  register: UseFormRegister<Inputs>
}

export default function AddressForm(props: Props) {
  const { register } = props
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            {...register('watts')}
            label="Watts"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Second Label"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
