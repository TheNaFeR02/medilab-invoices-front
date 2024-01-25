'use client'
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { StayPrimaryLandscape } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Table from '@/components/Table/Table';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const NewInvoices = () => {
  const theme = useTheme()

  const [customer, setCustomer] = useState('');
  const [resolution, setResolution] = useState('');

  const handleCustomer = (event: SelectChangeEvent) => {
    setResolution(event.target.value as string);
  };

  const handleResolution = (event: SelectChangeEvent) => {
    setCustomer(event.target.value as string);
  };

  return (
    <>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '1em' }}>
        <Box>
          <h1 style={{ margin: 0 }}>New Invoice</h1>
          <p style={{ margin: 0 }}>Create a new invoice</p>
        </Box>
        <Box sx={{ mr: '2em', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
          <Button variant="outlined" sx={{ height: '3em', borderRadius: '100px', backgroundColor: 'transparent', color: `${theme.palette.primary.main}`, textTransform: 'none' }}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ height: '3em', borderRadius: '100px', textTransform: 'none' }}>
            Done
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
        <Box sx={{ mb: '4em' }}>
          <Box sx={{ display: 'flex', gap: '2em', mt: '1em', mb: '2em' }}>
            <p style={{}}>Customer</p>
            {/* Select Customer */}
            <Box sx={{ minWidth: 180, display: 'flex', alignItems: 'center' }} >
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Select Customer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={customer}
                  label="Age"
                  onChange={handleCustomer}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* End Select Costumer */}
            <Box sx={{ display: 'flex', }}>
              <Checkbox {...label} defaultChecked />
              <p style={{}}>Send</p>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '5em' }}>
            <Box sx={{ fontSize: '80%', '& p': { margin: '0.30em', color: '#827379' } }}>
              <p style={{ color: 'black', }}><b>Customer Details<span><EditIcon color="primary" fontSize="small" sx={{ ml: '0.25em' }} /></span></b></p>
              <p>Medilaboral Salud y Seguridad Laboral</p>
              <p>NIT 4-9008367263</p>
              <p>+57 3014072140</p>
              <p>contabilidad@medilaboral.com</p>
              <p>Calle 100 # 52 -20</p>
              <p>Bogotá, Colombia</p>
            </Box>
            <Box>
              <Box sx={{ fontSize: '80%', '& p': { margin: 0, color: '#827379' } }}>
                <p style={{ color: 'black', }}><b>Facturation Address </b><span><EditIcon color="primary" fontSize="small" sx={{ ml: '0.25em' }} /></span></p>
                <p>Calle 100 #52-20</p>
                <p>Bogotá, Colombia</p>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', padding: '2em', pb: '0', pt: '1em', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel htmlFor="invoice" sx={{ display: 'flex', alignItems: 'center' }}>Invoice #</InputLabel>
            <TextField disabled size='small' id="invoice" label="INV1578032" />
            <CalendarMonthOutlinedIcon color="primary" sx={{ ml: '0.25em', alignSelf: 'center', visibility: 'hidden' }} />
          </Box>
          <Box sx={{ display: 'flex', padding: '2em', pb: '0', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel htmlFor="date" sx={{ display: 'flex', alignItems: 'center' }}>Date</InputLabel>
            <TextField size='small' id="date" label="07 Mar 2022" />
            <CalendarMonthOutlinedIcon color="primary" sx={{ ml: '0.25em', alignSelf: 'center' }} />
          </Box>
          <Box sx={{ display: 'flex', padding: '2em', pb: '0', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel htmlFor="duedate" sx={{ display: 'flex', alignItems: 'center' }}>Due Date</InputLabel>
            <TextField size='small' id="duedate" label="31 Mar 2022" />
            <CalendarMonthOutlinedIcon color="primary" sx={{ ml: '0.25em', alignSelf: 'center' }} />
          </Box>
          <Box sx={{ display: 'flex', padding: '2em', pb: '0', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel htmlFor="duedate" sx={{ display: 'flex', alignItems: 'center' }}>Resolution</InputLabel>
            {/* Select Customer */}
            <Box sx={{ minWidth: 223, }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Select Resolution</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={resolution}
                  label="Resolution"
                  onChange={handleResolution}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* End Select Costumer */}
            <CalendarMonthOutlinedIcon color="primary" sx={{ ml: '0.25em', alignSelf: 'center', visibility: 'hidden' }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: '2em' }}>
        <Box sx={{ width: '100%' }}>
          <Table />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '1em' }}>
        <Box sx={{}}>
          <h2 style={{ margin: 0, fontSize: '1em', display: 'flex' }}><span><SettingsOutlinedIcon sx={{ mr: '0.25em' }} /></span>Options</h2>
          <Box sx={{ ml: '2em' }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Show signature" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Show seal" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Show header" />
            </FormGroup>
          </Box>
        </Box>
        <Box sx={{}}>
          <Box sx={{ display: 'flex', pb: '0', pt: '1em', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel sx={{ display: 'flex', alignItems: 'center', fontSize: '0.95em' }}>Sub Total</InputLabel>
            <TextField disabled id="filled-basic" label="$1,628" variant="filled" size="small" sx={{ color: 'primary', backgroundColor: 'primary', width: '50%', '& input': {fontSize: '0.4em'}, '& label': {
      marginTop: '-0.5em', marginLeft: '0.2em', opacity: '0.8'
    } }} />
          </Box>
          <Box sx={{ display: 'flex', pb: '0', pt: '1em', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel sx={{ display: 'flex', alignItems: 'center', fontSize: '0.95em' }}>Tax</InputLabel>
            <TextField disabled id="filled-basic" label="2.85%" variant="filled" size="small" sx={{  backgroundColor: `${theme.schemes.light.surfaceContainer}`, width: '50%', '& input': {fontSize: '0.4em'}, '& label': {
      marginTop: '-0.5em', marginLeft: '0.2em', opacity: '0.8'
    } }} />
          </Box>
          <Box sx={{ display: 'flex', pb: '0', pt: '1em', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel sx={{ display: 'flex', alignItems: 'center', fontSize: '0.95em' }}>Total</InputLabel>
            <TextField disabled id="filled-basic" label="$1,581.6" variant="filled" size="small" sx={{ color: 'primary', backgroundColor: 'primary', width: '50%', '& input': {fontSize:'0.4em'}, '& label': {
      marginTop: '-0.5em', marginLeft: '0.2em', opacity: '0.8'
    } }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NewInvoices;