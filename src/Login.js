import React from "react";
import logo from "./logo.png";
/*import {Link} from "react-router-dom";*/
const Login = () => {
    return (
        <div style={{'backgroundColor':'rgb(223,227,238)'}}>
            <form>
            <div className="left" style={{'padding':'260px','paddingLeft':'15%'}}>
                <img src={logo} alt="facebook" width="250px" height="100px" style={{'position':'absolute','marginLeft':'-0.5%','marginBottom':'5px','marginTop':'-6%'}}/>
                <p style={{'paddingBottom':'20px'}}>Facebook helps you to connect and share with <br/>the people in your life.</p>
            </div>
            <div className="right" style={{'position':'absolute','marginTop':'-34%','marginLeft':'55%','boxSizing':'borderBox','border':'2px solid white','width':'350px','height':'350px','borderRadius':'8px','backgroundColor':'white'}}>
                <center style={{'paddingTop':'35px'}}>
                <input type="text" placeholder=" Email address or phone number"style={{'width':'300px','height':'35px'}} /><br/><br/>
                <input type="password" placeholder=" Password" name="password" style={{'width':'300px','height':'35px'}}  /><br/><br/>
                <button  className="btn btn-primary" style={{'width':'300px'}}>Log In</button><br/><br/>
                <a href="forgot" style={{'width':'300px','color':'blue','textDecoration':'none'}}>Forgot Password?</a><br/>
               <hr style={{'width':'300px','backgroundColor':'gray'}}></hr>
                <button className="btn btn-success">Create New Account</button>
                </center>
                </div>
                <p style={{'position':'absolute','paddingLeft':'705px','marginTop':'-6%'}}><a href="createpage" style={{'color':'black','textDecoration':'none'}}><b>Create a Page</b></a> for a celebrity,brand or business.</p>
            </form>
        </div>
    );
};
export default Login;