import React from "react";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../redux/store";
import uuid from 'react-uuid';


import FavResolutionListItem from "./FavResolutionListItem";
export default function List(){
    const userResolution = useSelector((state:RootState) => state.favoritelist.listitem)
    return <div>Favorite
        {
            userResolution.map((item) => {
                return <FavResolutionListItem  key={uuid()} prop = {item}/>
                
            })
        }
    </div>
}