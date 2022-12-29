import React from 'react';



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

type ResolutionItem = {
    prop: ResoluitonList;
}
export default function FavResolutionListItem({prop}: ResolutionItem){
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
    </Card>
    </div>
}