import React, {useEffect, useState} from 'react';
import {BoxLoading} from 'react-loadingg'

const defaultStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top:"0",
    left:"0",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    background:"black",
    zIndex:"10",
    transition:"1s",
    transform:"",
    opacity: "1"
}
function Loader(props) {
    const [style, setStyle] = useState(defaultStyle)
    let isLoading = props.isLoading
    useEffect(()=>{
        if(!isLoading){
            setStyle({...style, transform:"", opacity:"0" })
        }
    },[isLoading])


    return (
        <div style = {style}>
            <BoxLoading />
        </div>
    );
}

export default Loader;