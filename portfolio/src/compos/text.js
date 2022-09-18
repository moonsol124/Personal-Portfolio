import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

function Text(props) {
    let count = 0;

    render(
        <>
            {((props.text).split()).map((letter)=>{

                return <span style={{animationDelay: `${count+.1}s`}}> {letter} </span>;
            })}
        </>
    )
}

export default Text;