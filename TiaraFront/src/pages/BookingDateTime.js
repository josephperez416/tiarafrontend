import React, { useState } from 'react';
import { Box, Typography, TextField, Card, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const DateTimePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      <Card sx={{ padding: 4, borderRadius: 4, width: 700, boxShadow: 3 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
          Select Date and Time
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Time Pickers */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginY: 3 }}>
            {/* Date Picker */}
            <Box>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Box>
            <TimePicker
              label="Start Time"
              value={startTime}
              onChange={(newTime) => setStartTime(newTime)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
            <TimePicker
              label="End Time"
              value={endTime}
              onChange={(newTime) => setEndTime(newTime)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Box>
        </LocalizationProvider>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          <Button variant="outlined" sx={{ borderRadius: 2, width: '45%' }}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ borderRadius: 2, width: '45%', backgroundColor: '#932F6D', '&:hover': { backgroundColor: '#591C42' } }}>
            Confirm
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default DateTimePickerComponent;