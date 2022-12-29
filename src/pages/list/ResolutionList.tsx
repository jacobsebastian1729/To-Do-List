import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import dayjs, { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { ResoluitonList } from "../../types/type";
import { action } from "../../redux/slice/listitem";
import { actionfav } from "../../redux/slice/favoriteitem";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../redux/store";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

type ResolutionItem = {
    prop: ResoluitonList;
}

export default function ResolutionListItem({prop}: ResolutionItem){

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

    const favResolution = useSelector((state:RootState) => state.favoritelist.listitem)


    const dispatch = useDispatch();
    
    //const [userFavorite, setUserFavorite] = useState<ResoluitonList>({name: "", date: ""});

    function removeFromList(){
        dispatch(action.removeResolution(prop.name));
        
    }

    function addToFavorite(){
        let flag1 = 0;
        for(let i = 0; i < favResolution.length; i++){
            if(favResolution[i].name === prop.name){
                flag1 = 1;
                break;
            }
        }
        if (flag1 === 0){
            dispatch(actionfav.addFavorite(prop));
        }
        else{
            setOpen(true);
        }
    }

    return <div>
        <Card sx={{ minWidth: 275, border: "solid 1px blue", margin: 1}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, textAlign: "left" }} color="text.secondary" gutterBottom>
          {prop.date}
        </Typography>
        
        <Typography variant="body2" sx = {{textAlign: "left"}}>
          {prop.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={addToFavorite}>ADD TO FAVORITE</Button>
        <Button variant="contained" onClick={removeFromList}><DeleteIcon color="inherit" /></Button>
        
        
      </CardActions>
    </Card>
    <Stack spacing={2} sx={{ width: '25%' }}>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Task already there
        </Alert>
      </Snackbar>
    </Stack>

    
    </div>
}