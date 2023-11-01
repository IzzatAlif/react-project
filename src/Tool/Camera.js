import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import './Camera.css'
import Button from "@mui/material/Button";

const WebcamComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc); // Pass the captured image data to the parent component
  };

  return (
    <>
    <div>
      <Webcam
        audio={false}
        height={270}
        width={480}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      
    </div>
    <Button variant="contained" onClick={capture}>Capture</Button>
    </>
  );
};

export default WebcamComponent;
