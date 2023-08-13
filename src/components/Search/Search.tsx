import TextField from "@mui/material/TextField";
import React, {useState} from 'react';
import {Autocomplete, Button} from "@mui/material";
import "./Search.scss"

export default function Search(
    props:{
        topText: string,
        options: string[],
        label:string,
        buttonText: string,
        parentCallback: (data: string) =>void
    }){

    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e:React.SyntheticEvent,value: any) =>{
        setSearchValue(value);
     }

    return (
        <div className="search-container">
                <p>{props.topText}</p>
                <div className="search">
                    <Autocomplete
                        disablePortal
                        id="autocomplete-geneiD"
                        onChange={handleChange}
                        options={props.options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label={props.label} />}
                    />
                    <Button id="search-button" variant="outlined"   onClick={()=>props.parentCallback(searchValue)}>{props.buttonText}</Button>
                </div>
        </div>
    )
}
