import React, { useState } from "react";
import {Box, Card, CardContent, TextField, Button, Typography} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const BookingDetails = () =>{
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const handleTextChange = (event) => {
    setCharCount(event.target.value.length);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  return(
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', minHeight: '100vh',
      backgroundColor:'#f4f4f4'}}>
          <Card sx={{width:800}}>
              <CardContent sx={{textAlign:'center', marginTop: '40px', marginBottom:'20px'}}>
                  <Typography fontSize={'35px'} fontWeight="bold" gutterBottom>Event Details</Typography>
              </CardContent>

              <Box sx={{marginBottom: 2,  paddingLeft:2, paddingRight:2}}>
                  <Typography fontSize={'20px'} fontWeight="bold" marginBottom={'10px'}>Type of Event</Typography>
                  <TextField fullWidth label= {<span>Event</span>} variant="outlined"
                      sx={{marginBottom:4, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                              '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                              '&:hover fieldset': {borderColor: '#E09EC7'},
                              '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                      }}
                  />

                  <Typography fontSize={'20px'} fontWeight="bold" marginBottom={'10px'}>Number of Guests</Typography>
                  <TextField fullWidth label={<span># of Guests</span>}  variant="outlined"
                      sx={{marginBottom:4, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                              '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                              '&:hover fieldset': {borderColor: '#E09EC7'},
                              '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                      }}
                  />

                  <Typography fontSize={'20px'} fontWeight="bold" marginBottom={'10px'}>Event Location</Typography>
                  <TextField fullWidth label= {<span>Address</span>}  variant="outlined" multiline
                      sx={{marginBottom:4, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                              '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                              '&:hover fieldset': {borderColor: '#E09EC7'},
                              '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                      }}
                  />

                  <Typography fontSize={'20px'} fontWeight="bold" marginBottom={'40px'}>Date and Time</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 3, marginBottom: 6 }}>
                      <Box>
                        <DatePicker
                          label="Select Date"
                          value={selectedDate}
                          onChange={(newDate) => setSelectedDate(newDate)}
                          sx={{marginBottom:4, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                            '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                            '&:hover fieldset': {borderColor: '#E09EC7'},
                            '&.Mui-focused fieldset': {borderColor: '#932F6D'}}}}
                          slotProps={{
                            popper : {
                              sx: {
                                "& .MuiPickersDay-root": {
                                  "&.Mui-selected": {
                                    backgroundColor: '#932F6D',
                                  },
                              },
                            }}
                          }}
                        />
                      </Box>
                      <TimePicker
                        label="Start Time"
                        value={startTime}
                        onChange={(newTime) => setStartTime(newTime)}
                        sx={{marginBottom:4, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                          '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                          '&:hover fieldset': {borderColor: '#E09EC7'},
                          '&.Mui-focused fieldset': {borderColor: '#932F6D'}}}}
                          slotProps={{
                            popper: {
                              sx: {
                                '& .MuiMenuItem-root': {
                                  '&.Mui-selected': {
                                    backgroundColor: '#932F6D',
                                    color: "#fff"
                                  }
                                },
                                "& .MuiDialogActions-root .MuiButton-text": {
                                    color: '#932F6D'
                                },              
                              },
                            },
                          }} 
                      />
                      <TimePicker
                        label="End Time"
                        value={endTime}
                        onChange={(newTime) => setEndTime(newTime)}
                        sx={{marginBottom:4, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                          '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                          '&:hover fieldset': {borderColor: '#E09EC7'},
                          '&.Mui-focused fieldset': {borderColor: '#932F6D'}}}}
                        slotProps={{
                          popper: {
                            sx: {
                              '& .MuiMenuItem-root': {
                                '&.Mui-selected': {
                                  backgroundColor: '#932F6D',
                                  color: "#fff"
                                }
                              },
                              "& .MuiDialogActions-root .MuiButton-text": {
                                  color: '#932F6D'
                              },              
                            },
                          },
                        }} 
                      />
                    </Box>
                  </LocalizationProvider>

                  <Typography fontSize={'20px'} fontWeight="bold" marginBottom={'10px'}>Details and Comments</Typography>
                  <TextField fullWidth label= {<span>Notes</span>}  variant="outlined" multiline rows={6} 
                      inputProps={{maxLength: 500}} onChange={handleTextChange}
                      sx={{marginBottom:1, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                              '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                              '&:hover fieldset': {borderColor: '#E09EC7'},
                              '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                      }}
                  />
                  <Typography
                    variant="body2"
                    color={charCount === maxChars ? 'error' : 'textSecondary'}
                    align="right"
                  >
                    {charCount}/{maxChars} characters
                  </Typography>

                  <Box sx={{display:'flex', justifyContent:'flex-start', marginTop:'20px', marginBottom:'40px', gap:'20px'}}>
                      <Button variant="outlined" sx={{color:'#932F6D', borderColor:'#932F6D', borderRadius:2, '&:hover':{backgroundColor: '#E09EC7'}}}>
                          Cancel
                      </Button>
                      <Button onClick={() => console.log(selectedDate, startTime, endTime)} variant="contained" sx={{backgroundColor:'#932F6D', borderRadius:2, '&:hover':{backgroundColor: '#591C42'}}}>
                          Confirm
                      </Button>
                  </Box>
                </Box>
          </Card>
      </Box>
  );
};

export default BookingDetails;