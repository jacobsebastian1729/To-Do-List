import React from "react";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../redux/store";
import uuid from 'react-uuid';

import ResolutionListItem from "./ResolutionList";
export default function List(){
    const userResolution = useSelector((state:RootState) => state.resolutionlist.listitem)
    return <div>
        {
            userResolution.map((item) => {
                return <ResolutionListItem  key={uuid()} prop = {item}/>
                
            })
        }
    </div>
}