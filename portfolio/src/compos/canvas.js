import React, { useState, useEffect } from 'react';
import './css/canvas.css'

function Canvas() {
    useEffect(()=>{
        console.log ("mounted!");
        drawCanvas()
    }) 

    function drawCanvas() {
        const canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'rgb(150, 0, 70';
            ctx.fillRect(10, 10, 50, 50);

            ctx.fillStyle = 'rgba(70, 0, 150, .5)';
            ctx.fillRect(30, 30, 50, 50);
        }
        else {

        }
    }

    return (
        <div className="canvas-container">
            <canvas id='tutorial' with='150' height='150'>
            </canvas>
        </div>
    )
}

export default Canvas;