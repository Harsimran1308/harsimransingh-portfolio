import { useState } from "react";
import './Profile.css';
import LaptopDesign from "./LaptopDesign";

export default function Profile() {

  return (
    <div className="profile-section">
        <p className="profile-header-text">
            Hello World ! I'm a Full Stack Software Developer
        </p>
        <div className="accessories-container flex items-stretch ...">
            <div className="image-container"><img src='/lside.png' className="t-image"></img></div>
            <div className="laptop-container">
                <LaptopDesign></LaptopDesign>
            </div>
            <div className="image-container"><img src='/rside.png' className="t-image"></img></div>

        </div>
    </div>
)}
