import './LaptopDesign.css';
import { useState, useEffect } from "react";

export default function LaptopDesign() {
  return (
    <div className="laptop">
        <div className="screen">
            <div className="lcd">
                <img src='/profile2.jpg' className='startup-image'></img>
            </div>
            <div className="glass-frame"></div>
            <div className="screen-reflection"></div>
        </div>
        <div className="keyboard top"></div>
        <div className="keyboard bottom"></div>
    </div>
)}