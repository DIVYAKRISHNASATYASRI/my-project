import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}Converter
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const sample = {
    pounds: "",
    grams: "",
    kilograms: ""
};
class conv extends Component {
    state = sample;
    forPounds = a => {
        const pounds = a.target.value;

        this.setState({
            pounds,
            grams: pounds / 0.0022046,
            kilograms: pounds / 2.2046
        });

        if (pounds === "") {
            this.setState(sample);
        }
    };
    forGrams = a => {
        const grams = a.target.value;
        this.setState({
            grams,
            pounds: grams * 0.0022046,
            kilograms: grams / 1000
        });
        if (grams === "") {
            this.setState(sample);
        }
    };
    forKilograms = a => {
        const kilograms = a.target.value;
        this.setState({
            kilograms,
            pounds: kilograms * 2.2046,
            grams: kilograms * 1000
        });
        if (kilograms === "") {
            this.setState(sample);
        }
    };
    clearAll = () => {
        this.setState(sample);
    };
    render() {
        return (
            <div className="Convert">
                <form
                    onSubmit={a => a.preventDefault()}
                >
                    <h1 className="title">Weight Converter</h1>
                    <TextField
                        id="standard-number"
                        label="Enter pounds"
                        value={this.state.pounds}
                        onChange={this.forPounds}
                        type="number"
                        margin="normal"
                        className="input-field"
                    />
                    <TextField
                        id="standard-number"
                        label="Enter grams"
                        value={this.state.grams}
                        onChange={this.forGrams}
                        type="number"
                        margin="normal"
                        className="input-field"
                    />
                    <TextField
                        id="standard-number"
                        label="Enter kilograms"
                        value={this.state.kilograms}
                        onChange={this.forKilograms}
                        type="number"
                        margin="normal"
                        className="input-field"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.clearAll}
                        className="button"
                    >
                        Clear All
                    </Button>
                </form>
            </div>
        );
    }
}
/*export default con;*/
/*using functional components*/
import React, {useState} from "react";
import './App.css';

const Convert = () => {
    const [data,setState]=useState({
        pounds: "",
        grams: "",
        kilograms: ""
    })
    const Pounds = a => {
        const pounds = a.target.value;
        setState({
            pounds,
            grams: pounds / 0.0022046,
            kilograms: pounds / 2.2046
        });

        if (pounds === "") {
            setState(data);
        }
    };
    const Grams = a => {
        const grams = a.target.value;
        setState({
            grams,
            pounds: grams * 0.0022046,
            kilograms: grams / 1000
        });
        if (grams === "") {
            setState(data);
        }
    };
    const Kilograms = a => {
        const kilograms = a.target.value;
        setState({
            kilograms,
            pounds: kilograms * 2.2046,
            grams: kilograms * 1000
        });
        if (kilograms === "") {
            setState(data);
        }
    };
   return(
    <div className="Convert">
    <form  onSubmit={a => a.preventDefault()}>
            <center>
           <h1 className="title">Weight Converter</h1><br/>
           <input type="number"  placeholder="Enter Kilograms" onChange={Kilograms} value={data.kilograms}></input><br/><br/>
           <input type="number" placeholder="Enter Grams" onChange={Grams} value={data.grams}></input><br/><br/>
           <input type="number" placeholder="Enter Pounds" onChange={Pounds} value={data.pounds}></input><br/><br/>
           <button variant="contained" color="primary" onClick={()=>setState({ pounds: " ",grams: " ",kilograms: " "})} className="btn btn-primary">Clear All</button>
           </center>
    </form>
    </div>
   )
}
export default Convert;
/*css-*/
/*html,
body,
#root{
 background-color: rgb(126, 245, 245);
}
.Convert {
  width: 100%;
  height: 100%;
}

form {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: minmax(100px, 100%);
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.title {
  color: hsla(212, 99%, 37%, 0.906);
}*/
<div>
<Routes>
<Route path="/Login" exact={true} component={Login}/>
<Route path="/Facebook" component={Facebook} />
</Routes>
</div>
import {BrowserRouter as Routes,Route} from 'react-router-dom'
import Facebook from './Facebook'
import {Link} from "react-router-dom";
<Link to="/Facebook"></Link>
<Routes>
<Route path="/Login" exact={true} component={Login}/>
<Route path="/Facebook" component={Facebook} />
</Routes>
import React from 'react'
import Login from './Login'
/*import Facebook from './Facebook';*/
/*import Signup from './signup';*/
function App() {
  return (
  <div>
  <Login/>
 {/*<Facebook/>*/}
 {/*<Signup/>*/}
  </div>
  );
}

export default App;