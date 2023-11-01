import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import WebcamComponent from "./Tool/Camera";
import { useState } from "react";
import "./Tool/Camera.css";
Amplify.configure(awsExports);

function CustomAppbar({ signOut, user }) {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello {user.attributes.email}
          </Typography>
          <Button variant="contained" color="error" onClick={signOut}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

function App({ signOut, user }) {

  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = (imageData) => {
    setCapturedImage(imageData);
  };
  console.log('capturedImage', capturedImage)
  return (
    <>
      <CustomAppbar signOut={signOut} user={user} />
      <br/><br/>
      
      {/* <h1>Hello {user.username}</h1> */}

      <div className="webcam-container">
        <h1>Landing Page</h1>
        <h1>My Webcam App</h1>
        <WebcamComponent onCapture={handleCapture} />

      {capturedImage && (
          <div >
            <h2>Captured Image</h2>
            <img
              src={capturedImage}
              width="480px"
              alt="Captured"
              className="small-image"
            />
          </div>
        )}

      </div>

      {console.log(user, "uuu")}
    </>
  );
}

export default withAuthenticator(App);
