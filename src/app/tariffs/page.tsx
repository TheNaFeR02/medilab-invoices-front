'use client'

import { Box, Container } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { Padding } from '@mui/icons-material';
import Table from '@/components/Table/Table';


const Tariffs = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: '3em' }}>
          <h1 style={{ margin: 0 }}>Invoices</h1>
          <p style={{ margin: 0 }}>View all the information related to the company invoices</p>
        </Box>
        <Box sx={{ width: '100%', height: { xs: 'auto', lg: '12em' }, backgroundColor: 'rgba(211, 211, 211, 0.5)', borderRadius: '10px', mb: '2em' }}>
          <Grid container spacing={2} >

            <Grid item xs={12} lg={6} sx={{ height: '100%' }}>

              <PieChart

                slotProps={{
                  legend: {
                    direction: 'row',
                    position: { vertical: 'top', horizontal: 'right' },
                    // padding: 300,
                    // padding: 60,
                    padding: { left: 300, right: 0, top: 50 },
                    // padding: { top: 10, bottom: 20, left: 30, right: 40 },
                    itemMarkHeight: 20,
                    itemMarkWidth: 20,
                    itemGap: 30,
                    labelStyle: {},

                  },
                }}
                height={300} width={500}
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'series A' },
                      { id: 1, value: 15, label: 'series B' },
                      { id: 2, value: 20, label: 'series C' },
                      { id: 3, value: 30, label: 'series D' },
                    ],
                    innerRadius: 40,
                    outerRadius: 70,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -180,
                    endAngle: 180,
                    cx: 120,
                    cy: 90,
                  }]
                }
              />

            </Grid>
            <Grid item xs={12} lg={6}>
              <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={500}
                height={200}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', }}>
          <Box sx={{ width: '100%' }}> 
            <Table />
          </Box>
        </Box>
      </Box >
    </>
  )
}
export default Tariffs