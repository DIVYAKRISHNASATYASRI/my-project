import React from 'react'

function Signup() {
  return (
    <div style={{boxSizing:'border-box',border:'2px solid black',borderRadius:'2%',width:'445px',height:'550px',margin:' 50px 450px',padding:'15px',justifyContent:'space-evenly'}}>
        <h1>Sign Up</h1>
        <p>It's quick and easy.</p>
        <hr style={{width:'445px',marginLeft:'-4%'}}/>
        <input type="text"  placeholder=' First Name' style={{padding:'4px 6px',backgroundColor:'#F0F2F5'}}/>{'    '}
        <input type="text"  placeholder=' Last Name' style={{padding:'4px 6px',backgroundColor:'#F0F2F5',marginLeft:'10px'}}/><br/>
        <input type="text"  placeholder=' Mobile number or Email'style={{padding:'4px 112px',marginTop:'10px',backgroundColor:'#F0F2F5'}}/><br/>
        <input type="password" placeholder=' New Password' style={{padding:'4px 112px',marginTop:'10px',backgroundColor:'#F0F2F5',textAlign:'initial'}}/><br/>
        <p>Birthday</p>
       <select style={{paddingLeft:'20px',paddingTop:'5px'}}>
        <option>Jan</option>
        <option>Feb</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
       </select>
       <select style={{paddingLeft:'75px',paddingTop:'5px',marginLeft:'20px'}}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
       </select>
       <select style={{paddingLeft:'75px',marginLeft:'20px',paddingTop:'5px'}}>
        <option>2005</option>
        <option>2006</option>
        <option>2007</option>
        <option>2008</option>
        <option>2009</option>
        <option>2010</option>
        <option>2011</option>
        <option>2012</option>
        <option>2013</option>
        <option>2014</option>
        <option>2015</option>
        <option>2016</option>
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
       </select>
        <p>Gender</p>
       <span style={{boxSizing:'border-box',border:'2px solid black',width:'15px',paddingLeft:'50px',paddingTop:'5px'}}><b>Female</b><input type="radio"/></span>
       <span style={{boxSizing:'border-box',border:'2px solid black',width:'25px',marginLeft:'20px',paddingLeft:'60px',paddingTop:'5px'}}><b>Male</b><input type="radio"/></span>
       <span style={{boxSizing:'border-box',border:'2px solid black',width:'15px',marginLeft:'20px',paddingLeft:'55px',paddingTop:'5px'}}><b>Custom</b><input type="radio"/></span>
        <p style={{fontSize:'12px',marginTop:'8px'}}>By clicking Sign Up,you agree to our <span style={{color:'blue'}}>Terms</span>.Learn how we collect,use and 
           <br/> share your data in our<span style={{color:'blue'}}> Data Policy</span> and how we use cookies and similar 
            <br/>technology in our <span style={{color:'blue'}}>Cookies Policy</span>.You may recieve SMS from <br/>
            us and can opt out any time.</p>
        <button className='btn btn-success' style={{marginTop:'5px',width:'200px',marginLeft:'100px'}}>Sign Up</button>
        </div>
  );
}

export default Signup;