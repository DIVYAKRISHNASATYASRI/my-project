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