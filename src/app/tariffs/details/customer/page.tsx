
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DetailsTable from '@/features/invoices/DetailsTable/Table';

const InvoiceDetailsCustomer = () => {
  return (
    <>
      <Box sx={{ mb: '1.5em' }}>
        <h1 style={{ margin: 0 }}>Invoice #INV8765848</h1>
      </Box>

      <Grid container spacing={6}> {/* display: 'flex', justifyContent: 'space-between', */}
        <Grid item xs={8.5}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '1.5em', flexWrap: 'wrap' }}>

            <Box sx={{ display: 'flex', gap: '2em' }}>
              <Box sx={{ fontSize: '100%', '& p': { margin: '0.30em', color: '#827379' } }}>
                <p style={{ color: 'black', }}><b>Customer Details<span><EditIcon color="primary" fontSize="small" sx={{ ml: '0.25em' }} /></span></b></p>
                <p>Medilaboral Salud y Seguridad Laboral</p>
                <p>NIT 4-9008367263</p>
                <p>+57 3014072140</p>
                <p>contabilidad@medilaboral.com</p>
                <p>Calle 100 # 52 -20</p>
                <p>Bogotá, Colombia</p>
              </Box>
              <Box>
                <Box sx={{ fontSize: '100%', '& p': { margin: 0, color: '#827379' } }}>
                  <p style={{ color: 'black', }}><b>Facturation Address </b><span><EditIcon color="primary" fontSize="small" sx={{ ml: '0.25em' }} /></span></p>
                  <p>Calle 100 #52-20</p>
                  <p>Bogotá, Colombia</p>
                </Box>
              </Box>
            </Box>
            <Box sx={{ fontSize: '100%', display: 'flex', flexDirection: 'column', gap: '0.2em', '& p': { display: 'flex', alignItems: 'center', ' &:first-child': { color: '#827379' } } }}>
              <Box sx={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', height: '1.8em' }}>
                <p >Invoice Date</p>
                <p >07 Mar 2022</p>
              </Box>
              <Box sx={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', height: '2em' }}>
                <p >SubTotal</p>
                <p >$1,581.6</p>
              </Box>
              <Box sx={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', height: '2em' }}>
                <p >Tax</p>
                <p >$1,581.6</p>
              </Box>
              <Box sx={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', height: '2em' }}>
                <p >Total</p>
                <p >$1,581.6</p>
              </Box>
              <Box sx={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', height: '2em' }}>
                <p >Due Date</p>
                <p >31 Mar 2022</p>
              </Box>
              <Box sx={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', height: '2em' }}>
                <p >Resolution</p>
                <p >1768 of 2023</p>
              </Box>
            </Box>

          </Box>
          <Box sx={{ width: '100%', mb: '4em' }}>
            <Box sx={{ width: '100%', border:'1px solid black', borderRadius: '4px' }}>
              <DetailsTable />
            </Box>
          </Box>
          {/* Payments */}
          <Box sx={{ width: '100%' }}>
            <h4 style={{ marginBottom: '0' }}>Payments</h4>
            <hr style={{ margin: '0' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', gap: '1.5em', fontWeight: '500' }}>
                <p>07 Jun 2022 04:46</p>
                <p>$119.00 paid by MasterCard card ending 4444</p>
              </Box>
              <Box sx={{
                display: 'flex',
                '& button': { textTransform: 'none', backgroundColor: 'transparent', color: '#884B6B', fontWeight: '600' }
              }}>
                <Button>
                  Add Payment
                </Button>
                <Button>
                  Details
                </Button>
              </Box>
            </Box>
          </Box>
          {/* End Payments */}
        </Grid>
        <Grid item xs={3.5}>
          <Box sx={{}}>

            <Box sx={{
              borderRadius: '12px', backgroundColor: '#FFF0F4', height: '40em',
              boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
            }}>
              <Box sx={{ backgroundColor: '#F1DEE4', borderRadius: '12px 12px 0px 0px', height: '3em', display: 'flex', alignItems: 'center', pl: '1em', fontSize: '90%' }}>
                <p><b>Actions</b></p>
              </Box>
              <Box sx={{
                boxSizing: 'border-box',
                display: 'flex', flexDirection: 'column', alignItems: 'center', height: '30%', justifyContent: 'space-evenly',
                '& button': { textTransform: 'none', },
                '& p': { color: '#827379' },
              }}>
                <Box sx={{ width: '80%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1px' }}>
                  <Button fullWidth variant='text' sx={{ mb: '0', borderColor: '#827379', fontWeight: '600', color: 'white', backgroundColor: '#884B6B' }}>Pay Invoice</Button>
                  <p style={{ margin: '0', alignSelf: 'self-start', width: '80%', fontSize: '0.9em' }}>Email this Invoice</p>
                </Box>
                <Box sx={{ width: '80%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1px' }}>
                  <Button fullWidth variant='outlined' sx={{
                    backgroundColor: 'transparent', textTransform: 'none', color: "primary.main",
                    mb: '0', borderColor: '#827379', fontWeight: '600'
                  }}>View as PDF</Button>
                  <p style={{ margin: '0', alignSelf: 'self-start', width: '80%', fontSize: '0.9em', }}>View the PDF invoice senty to your costumer</p>
                </Box>
              </Box>
            </Box>

          </Box>
        </Grid>
      </Grid >
    </>
  );
}

export default InvoiceDetailsCustomer;