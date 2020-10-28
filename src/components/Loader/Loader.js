import React from 'react';
import {BoxLoading} from 'react-loadingg'

const style = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top:"0",
    left:"0",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    background:"black",
    zIndex:"10"
    
}

function Loader(props) {
    return (
        <div style={style}>
            <BoxLoading />
        </div>
    );
}

export default Loader;