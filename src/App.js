import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

Amplify.configure(awsExports);

function CustomAppbar({ signOut, user }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hello {user.attributes.email}
        </Typography>
        <Button variant="contained" onClick={signOut}>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function App({ signOut, user }) {
  return (
    <>
      <CustomAppbar signOut={signOut} user={user} />
      <h1>Landing Page</h1>
      <h1>Hello {user.username}</h1>
      
      {/* <Button variant="contained" onClick={signOut}> Sign Out </Button> */}
    
    {console.log(user, "xxx")}
    </>
  );
}

export default withAuthenticator(App);
