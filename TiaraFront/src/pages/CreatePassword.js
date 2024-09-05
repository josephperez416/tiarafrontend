import React from "react";
import {Box, Card, CardContent, TextField, Button, Typography, LinearProgress, Checkbox, FormControlLabel} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from 'react-router-dom';

const CreatePassword = () =>{
    // const navigate = useNavigate();
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',
            height: '100vh', backgroundColor: '#f4f4f4', position: 'relative'}}>
            <Card sx={{width: 600, height: 400, padding: 8, borderRadius: 7, boxShadow: 10, display:'flex', flexDirection:'column', justifyContent: 'center', position: 'relative'}}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'30px'}}>
                    <ArrowBackIcon sx={{color:'#C13E8F', cursor:'pointer'}}/>
                    <Box sx={{width: '200px', marginRight:'200px'}}>
                        <LinearProgress variant="determinate" value={66} sx={{height:4, borderRadius: 4, backgroundColor:'rgba(147, 47, 109, 0.6)', '& .MuiLinearProgress-bar':{backgroundColor: '#932F6D'}}}/>
                    </Box>
                </Box>

                <CardContent sx={{textAlign:'center', width:'100%', alignSelf:'center'}}>
                    <Typography fontSize={'34px'} fontWeight="bold" gutterBottom>Create Password</Typography>
                </CardContent>

                <Box sx={{marginBottom: 2}}>
                    <TextField fullWidth label = "Password" type = "password" variant = "outlined"
                        sx={{marginBottom: 2, '& label.Mui-focused': {color: '#932F6D',}, '& .MuiOutlinedInput-root': {
                                '& fieldset': {borderColor: '#932F6D'},
                                '&:hover fieldset': {borderColor: '#E09EC7'},
                                '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}/>
                    <TextField fullWidth label = "Confirm Password" type="password" variant = "outlined"
                        sx={{marginBottom: 2,  '& label.Mui-focused': {color: '#932F6D',}, '& .MuiOutlinedInput-root': {
                            '& fieldset': {borderColor: '#932F6D'},
                            '&:hover fieldset': {borderColor: '#E09EC7'},
                            '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                        }}/>
                    
                    <Button fullWidth variant="contained" color="primary" sx={{marginTop:2, borderRadius:2, textAlign:'center', display:'block', backgroundColor: '#932F6D', '&:hover':{backgroundColor: '#591C42'}}}>
                        Sign In
                    </Button>
                </Box>

                <FormControlLabel control={<Checkbox sx={{ color: '#932F6D', '&.Mui-checked':{color: '#932F6D'}}} />} label="I accept the Terms and Conditions" sx={{ marginBottom: 3 }}/>
            </Card>
        </Box>
    )
};
export default CreatePassword;