import React from "react";
import {Box, Card, CardContent, TextField, Button, Typography, LinearProgress, Checkbox, FormControlLabel, IconButton} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LocationCard = () =>{
    return(
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh',
            backgroundColor:'#f4f4f4'}}>
                <Card sx={{width:600, padding:4, borderRadius: 7, boxShadow:10}}>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px'}}>
                        <IconButton sx={{color: "#C13E8F", transition: "box-shadow 0.3s ease, transform 0.3s ease", "&:hover": {boxShadow: "0 0 0 10px rgba(193, 62, 143, 0.2)", transform: "scale(1)" }}}>
                            <ArrowBackIcon/>
                        </IconButton>

                        <Box sx={{width:'200px', marginRight:'200px'}}>
                            <LinearProgress variant="determinate" value={100} sx={{height:4, borderRadius:4, backgroundColor:'rgba(147, 47, 109, 0.6)', '& .MuiLinearProgress-bar':{backgroundColor: "transparent"}, 
                            "&::before":{content:'""', position: "absolute", top:0, right:50, height:"100%", width:"50%", backgroundColor:"#932F6D", borderRadius:"0 4px 4px 0"}}}/>
                        </Box>
                    </Box>

                    <CardContent sx={{textAlign:'center', marginBottom:'20px'}}>
                        <Typography fontSize={'24px'} fontWeight="bold" gutterBottom>Business Location</Typography>
                    </CardContent>

                    <Box sx={{marginBottom: 2,  paddingLeft:2, paddingRight:2}}>
                        <TextField fullWidth label= {<span>Address<span style={{color:'red'}}>*</span></span>} variant="outlined"
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>Address 2</span>} variant="outlined"
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>City<span style={{color:'red'}}>*</span></span>} variant="outlined" multiline
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>State<span style={{color:'red'}}>*</span></span>} variant="outlined" multiline
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>Zip<span style={{color:'red'}}>*</span></span>} variant="outlined" multiline
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <Box sx={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                            <Button variant="contained" endIcon= {<ArrowForwardIcon/>} sx={{backgroundColor:'#932F6D', borderRadius:2, '&:hover':{backgroundColor: '#591C42'}}}>
                                Next
                            </Button>
                        </Box>
                     </Box>
                </Card>
            </Box>
    );
};

export default LocationCard;