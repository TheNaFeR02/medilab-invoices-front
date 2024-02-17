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
import NewInvoiceTable from '@/features/invoices/NewInvoiceTable/Table';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import customerList from './customerList.json'
import { customers as customerList } from '@/repository/local/invoices/invoices_new/data/customers';
import { Customer } from '@/features/invoices/types/customer';
import { services } from '@/repository/local/invoices/invoices_new/data/services';
import IconButton from '@mui/material/IconButton';
import dayjs from 'dayjs';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const NewInvoices = () => {
  const theme = useTheme()

  const [customer, setCustomer] = useState('');
  const [resolution, setResolution] = useState('');
  const [customerDetails, setCustomerDetails] = useState<Customer>({
    id: 0,
    customer: {
      CustomerDetails: {
        name: '',
        NIT: '',
        phone: '',
        email: '',
        address: '',
        Location: ''
      },
      FacturationAddress: {
        address: '',
        location: ''
      },
      TaxRetention: 0
    }
  });

  const [editCustomerDetails, setEditCustomerDetails] = useState(false);
  const [editFacturation, setEditFacturation] = useState(false);
  const [date, setDate] = useState(dayjs().format('DD MMM YYYY'));
  const [dueDate, setDueDate] = useState(dayjs().add(1, 'month').format('DD MMM YYYY'));
  const [subtotal, setSubtotal] = useState(0);
  
  
  
  

  const handleCustomer = (event: SelectChangeEvent) => {
    const customerId = Number(event.target.value);
    setCustomer(customerId.toString());
    const selectedCustomer = customerList.find((customer) => customer.id === customerId);
    if (selectedCustomer) {
      setCustomerDetails(selectedCustomer);

      const customerServices = services.find(
        (service) => service.customerId === Number(customerId)
      );
      if (customerServices) {
        const subtotal = customerServices.patients.reduce((acc, patient) => acc + patient.PendingAmount, 0);
        setSubtotal(subtotal);
      }
    }
  };

  const editCustomerInfo = () => {
    setEditCustomerDetails(!editCustomerDetails);
  }

  const editFacturationAddress = () => {
    setEditFacturation(!editFacturation);
  }

  const handleResolution = (event: SelectChangeEvent) => {
    setResolution(event.target.value as string);
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
            <Box sx={{ minWidth: 360, display: 'flex', alignItems: 'center' }} >
              <FormControl fullWidth size="small">
                <InputLabel id="customer">Select Customer</InputLabel>
                <Select
                  labelId="customer"
                  id="customer"
                  value={customer}
                  label="Select Customer"
                  onChange={handleCustomer}
                >
                  {customerList.map((customer) => (
                    <MenuItem key={customer.id} value={customer.id}>{customer.customer.CustomerDetails.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/* End Select Costumer */}
            <Box sx={{ display: 'flex', }}>
              <Checkbox {...label} defaultChecked />
              <p style={{}}>Send</p>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '2em' }}>
            <Box sx={{ minWidth: '21em', minHeight: '13.5em', fontSize: '80%', '& p': { margin: '0.30em', color: '#827379' } }}>
              <p style={{ color: 'black', }}><b>Customer Details
                <span>
                  <IconButton
                    sx={{ width: '0', height: '0', ml: '0.5em' }}
                    onClick={editCustomerInfo} // It supposed to be eventually a POST request to the server
                  >
                    <EditIcon color="primary" fontSize="small" sx={{ ml: '0.25em' }} />
                  </IconButton>
                </span></b></p>
              {customerDetails && editCustomerDetails === false && (
                <>
                  <p>{customerDetails.customer.CustomerDetails.name}</p>
                  <p>{customerDetails.customer.CustomerDetails.NIT}</p>
                  <p>{customerDetails.customer.CustomerDetails.phone}</p>
                  <p>{customerDetails.customer.CustomerDetails.email}</p>
                  <p>{customerDetails.customer.CustomerDetails.address}</p>
                  <p>{customerDetails.customer.CustomerDetails.Location}</p>
                </>
              )}
              {customerDetails && editCustomerDetails && (
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                  <TextField
                    onChange={
                      (event) => {
                        if (customerDetails) {
                          customerDetails.customer.CustomerDetails.name = event.target.value;
                        }
                      }
                    }
                    hiddenLabel
                    InputProps={{
                      style: { fontSize: 12 }, // change font size here
                    }}
                    variant="standard"
                    // sx={{ width: '100%', }}
                    defaultValue={customerDetails?.customer.CustomerDetails.name}
                    size='small' id="name" />
                  <TextField
                    onChange={
                      (event) => {
                        if (customerDetails) {
                          customerDetails.customer.CustomerDetails.NIT = event.target.value;
                        }
                      }
                    }
                    hiddenLabel
                    InputProps={{
                      style: { fontSize: 12 }, // change font size here
                    }}
                    variant="standard"
                    defaultValue={customerDetails?.customer.CustomerDetails.NIT}
                    size='small' id="NIT" />
                  <TextField
                    onChange={
                      (event) => {
                        if (customerDetails) {
                          customerDetails.customer.CustomerDetails.phone = event.target.value;
                        }
                      }
                    }
                    hiddenLabel
                    InputProps={{
                      style: { fontSize: 12 }, // change font size here
                    }}
                    variant="standard"
                    defaultValue={customerDetails?.customer.CustomerDetails.phone}
                    size='small' id="phone" />
                  <TextField
                    onChange={
                      (event) => {
                        if (customerDetails) {
                          customerDetails.customer.CustomerDetails.email = event.target.value;
                        }
                      }
                    }
                    hiddenLabel
                    InputProps={{
                      style: { fontSize: 12 }, // change font size here
                    }}
                    variant="standard"
                    defaultValue={customerDetails?.customer.CustomerDetails.email}
                    size='small' id="email" />
                  <TextField
                    onChange={
                      (event) => {
                        if (customerDetails) {
                          customerDetails.customer.CustomerDetails.address = event.target.value;
                        }
                      }
                    }
                    hiddenLabel
                    InputProps={{
                      style: { fontSize: 12 }, // change font size here
                    }}
                    variant="standard"
                    defaultValue={customerDetails?.customer.CustomerDetails.address}
                    size='small' id="address" />
                  <TextField
                    onChange={
                      (event) => {
                        if (customerDetails) {
                          customerDetails.customer.CustomerDetails.Location = event.target.value;
                        }
                      }
                    }
                    hiddenLabel
                    InputProps={{
                      style: { fontSize: 12 }, // change font size here
                    }}
                    variant="standard"
                    defaultValue={customerDetails?.customer.CustomerDetails.Location}
                    size='small' id="location" />
                </Box>
              )}
            </Box>
            <Box>
              <Box sx={{ fontSize: '80%', '& p': { margin: 0, color: '#827379' } }}>
                <p style={{ color: 'black', paddingTop: '0.2em' }}><b>Facturation Address </b><span>
                  <IconButton
                    // sx={{ width: '0', height: '0'}} 
                    onClick={editFacturationAddress}
                  >
                    <EditIcon color="primary" fontSize="small" sx={{ ml: '0.25em' }} />
                  </IconButton>
                </span></p>
                {customerDetails && editFacturation === false && (
                  <>
                    <p>{customerDetails?.customer.FacturationAddress.address}</p>
                    <p>{customerDetails?.customer.FacturationAddress.location}</p>
                  </>
                )}
                {customerDetails && editFacturation && (
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                      onChange={
                        (event) => {
                          if (customerDetails) {
                            customerDetails.customer.FacturationAddress.address = event.target.value;
                          }
                        }
                      }
                      hiddenLabel
                      InputProps={{
                        style: { fontSize: 12 }, // change font size here
                      }}
                      variant="standard"
                      sx={{ width: '10em', }}
                      defaultValue={customerDetails?.customer.FacturationAddress.address}
                      size='small' id="facturationAddress" />
                    <TextField
                      onChange={
                        (event) => {
                          if (customerDetails) {
                            customerDetails.customer.FacturationAddress.location = event.target.value;
                          }
                        }
                      }
                      hiddenLabel
                      variant="standard"
                      sx={{ width: '10em' }}
                      InputProps={{
                        style: { fontSize: 12 }, // change font size here
                      }}
                      defaultValue={customerDetails?.customer.FacturationAddress.location}
                      size='small' id="facturationLocation" />
                  </Box>
                )}

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
            <TextField hiddenLabel size='small' id="date" value={date} />
            <CalendarMonthOutlinedIcon color="primary" sx={{ ml: '0.25em', alignSelf: 'center' }} />
          </Box>
          <Box sx={{ display: 'flex', padding: '2em', pb: '0', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel htmlFor="duedate" sx={{ display: 'flex', alignItems: 'center' }}>Due Date</InputLabel>
            <TextField hiddenLabel size='small' id="duedate" value={dueDate} />
            <CalendarMonthOutlinedIcon color="primary" sx={{ ml: '0.25em', alignSelf: 'center' }} />
          </Box>
          <Box sx={{ display: 'flex', padding: '2em', pb: '0', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel htmlFor="resolution" sx={{ display: 'flex', alignItems: 'center' }}>Resolution</InputLabel>
            {/* Select Customer */}
            <Box sx={{ minWidth: 223, }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Select Resolution</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={resolution}
                  label="Select Resolution"
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
          <NewInvoiceTable customerId={customer} />
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
            <TextField disabled id="filled-basic" hiddenLabel variant="filled" size="small"
              value={subtotal}
              sx={{
                color: 'primary', backgroundColor: 'primary', width: '35%', '& input': { fontSize: '1em' }, '& label': {
                  marginTop: '-0.5em', marginLeft: '0.2em', opacity: '0.8'
                }
              }} />
          </Box>
          <Box sx={{ display: 'flex', pb: '0', pt: '1em', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel sx={{ display: 'flex', alignItems: 'center', fontSize: '0.95em' }}>Tax</InputLabel>
            <TextField disabled id="filled-basic"
              // *100 to an undefined value is not possible, so it's been checked
              value={customerDetails?.customer.TaxRetention !== undefined ? (`${customerDetails?.customer.TaxRetention * 100}%`) : (customerDetails?.customer.TaxRetention)}
              hiddenLabel variant="filled" size="small"
              sx={{
                backgroundColor: `${theme.schemes.light.surfaceContainer}`, width: '35%', '& input': { fontSize: '1em' }, '& label': {
                  opacity: '0.8'
                }
              }} />
          </Box>
          <Box sx={{ display: 'flex', pb: '0', pt: '1em', gap: '1em', justifyContent: 'flex-end' }}>
            <InputLabel sx={{ display: 'flex', alignItems: 'center', fontSize: '0.95em' }}>Total</InputLabel>
            <TextField disabled id="filled-basic" hiddenLabel variant="filled" size="small"
              value={subtotal - (subtotal * customerDetails?.customer.TaxRetention)}
              sx={{
                color: 'primary', backgroundColor: 'primary', width: '35%', '& input': { fontSize: '1em' }, '& label': {
                  marginTop: '-0.5em', marginLeft: '0.2em', opacity: '0.8'
                }
              }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NewInvoices;