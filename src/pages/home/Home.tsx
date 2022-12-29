import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Box from '@mui/material/Box';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


import { action } from "../../redux/slice/listitem";
import { ResoluitonList } from "../../types/type";
export default function Home(){
    
    /**Snack bar */
    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
      ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      
      const [open, setOpen] = React.useState(false);

    
      const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    /********** */

    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState<ResoluitonList>({name: "", date: ""});

    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs(Date.now()),
      );

    function textHandler(event: React.ChangeEvent<HTMLInputElement>){
        let text = event.target.value;
        setUserInput({...userInput, name: text})
        
        
    }
    function addToList(){
        setOpen(true);
        dispatch(action.addResolution(userInput));
        
    }

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
        setUserInput({...userInput, date: String(newValue)})
      };



    return <div>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Text" variant="outlined" onChange={textHandler}/>
    
    </Box>
    <Box sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}>
        
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <DateTimePicker
        label="Date&Time picker"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        
      />
    
  </LocalizationProvider >
    </Box>
    <Button variant="contained" onClick={addToList}>ADD</Button>
    <Stack spacing={2} sx={{ width: '25%' }}>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Task is added to the list
        </Alert>
      </Snackbar>
    </Stack>

    </div>
}