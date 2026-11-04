import React ,{useState} from "react";
import "./styleuser.css"
import { getUsers,saveUsers } from "../Authstorage";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
// import { useState } from "react";

function Register(){
    const[form,setForm]= useState({name:"",phone:"",email:"",gender:"",username:"",psw:""})
    const [errors,setErrors]=useState({})
    const[success,setSuccess]=useState(false);

    const nav=useNavigate()

    function handleChange(e){
        const {name,value} = e.target;
        setForm(prev => ({...prev,[name]:value}));
        setErrors(prev =>({...prev,[name]:""}));
    }

    function handleSubmit(e){
        e.preventDefault();

        const err = {};
        if(!form.name.trim())      err.name  =  "name is required";
        if(!/^[6-9]\d{9}$/.test(form.phone)) err.phone = "Enter a valid 10 digit phone number";
        if(!form.email.includes('@'))  err.email = "enter a valid email";
        if(form.username.length<8) err.username = "min 8 characters";
        if(form.psw.length<6)   err.psw = "min 6 characters";


        const users = getUsers();
        const usernameexists = users.some(u => u.username ===form.username);
        if (usernameexists)err.username="Username already registered";

        if(Object.keys(err).length>0){
            setErrors(err);
            return;
        }

        // save new user to localStorage 

        const newUsers = {name:form.name,phone:form.phone,email:form.email,gender:form.gender,username:form.username,psw:form.psw};
        saveUsers([...users,newUsers]);

        setSuccess(true);
        setForm({name:"",phone:"",email:"",gender:"",username:"",psw:""});

        setTimeout(()=>{
            nav('/log')
        },1200);
    }
    return(
        <>
        <div>
       <header>
                <nav className="user-navbar">          
                    <div className="logo">
                        <h2> Grand Palace Restaurant </h2>
                        <span style={{color:"#e8c59d",fontSize:"20px",fontStyle:"italic"}}>& Banquet Hall</span>
                    </div>
                 
                     <li className="link" style={{marginLeft:"50%",marginTop:"30px"}}><Link to ="/home">Home</Link></li>
                          
                </nav>
            </header>
            </div>

            <section className="register">
                <div className="form-box">
                <div className="reg-head">
                <h2>Welcome to Grand Palace Restaurant</h2>
                <h4>Create an Account here</h4>
                </div>
                   { success && (
                    <div>Registered Successfully! Redirecting to login....</div>
                )}
                  <form className="register-form" onSubmit={handleSubmit}>
                    
                    <div className="field">
                       <div><span>Full Name</span></div> 
                        <div><input type="text" name="name" value={form.name} placeholder="Enter Your Name" onChange={handleChange} />
                         {errors.name && <p  className="error" style={{color:"red", marginTop:"-65px",marginLeft:"30%"}}>{errors.name}</p>}
                     </div>

                    </div>
                     <div className="field">
                        <div><span>Phone</span></div>
                       <div> <input type="text" name="phone"  value={form.phone}  placeholder="Enter Your Phone number" onChange={handleChange} />
                        {errors.phone && <p className="error" style={{color:"red",marginTop:"-65px",marginLeft:"30%"}}>{errors.phone}</p>}
                            </div>

                     </div>
                     <div className="field">
                        <div><span>Email</span></div>
                        
                        <div> <input type="email" name="email"  value={form.email}  placeholder="Enter Your email id"  onChange={handleChange}/>
                         {errors.mail && <p  className="error" style={{color:"red",marginTop:"-65px",marginLeft:"30%"}} >{errors.mail}</p>}</div>
                    
                       
                     </div>
                     <div className="field">
                        <div><span>Gender</span></div>
                        <div className="rdi" style={{gap:"5px"}}>
                       <div> <input type="radio" className="radio-btn" name="gender" value="male"  onChange={handleChange}/><label>Male</label></div>
                    <div> <input type="radio" className="radio-btn" name="gender" value="female"onChange={handleChange}  /><label>Female</label></div>
                        <div> <input type="radio"  className="radio-btn" name="gender" value="other" onChange={handleChange} /><label>Other</label></div>
                    </div>
                    </div>
                    <div>
                        <div className="field">
                       <div><span>User Name</span></div> 
                        <div><input type="text" name="username"   value={form.username}  placeholder="Enter Your User Name" onChange={handleChange} />
                        {errors.username && <p className="error" style={{color:"red",marginTop:"-65px",marginLeft:"30%"}}>{errors.username}</p>}
                        </div>

                    </div>
                    <div className="field">
                       <div><span>Password</span></div> 
                        <div><input type="password" name="psw"  value={form.psw}  placeholder="Enter Your Password"  onChange={handleChange}/>
                        {errors.psw && <p className="error" style={{color:"red",marginTop:"-65px",marginLeft:"30%"}}>{errors.psw}</p>}
                        </div>

                    </div>
                        <button className="bookbtn" type="submit">Register</button>
                    </div>
                     <p>Already have an Account?Sign in</p>
                    </form>
                    </div>
            </section>
            <section className="getin" id="contact">
        <h1>Get In Touch</h1>
        <div className="subget">
            <div className="subhead">
                <p style={{marginLeft:"30px",fontSize:"20px",fontFamily:"-apple-system"}}>Have a question,want to <br/>reserve a table,or
                planning a special event?<br/> We'd love to hear from  you!
            </p>
            </div>
        <div className="cntct">
            <h4>Contact with Us</h4>
            
            <ul>
                <li>📞+918765312709</li>
                <li>📧grandpalacerestaurant@gmail.com</li>
                <li>📍calicut,kerala,India</li>
              
            </ul>
        </div>
        <div className="follow">
            <h4>Follow Us</h4>
            <ul>
                <li><i className="bi bi-instagram fs-1 text-danger "></i></li>
                <li><i className="bi bi-whatsapp fs-1 text-success"></i></li>
                <li><i className="bi bi-facebook fs-1 text-primary "></i></li>
            </ul>
            </div>
        </div>
    </section>
    <section className="footer" style={{backgroundColor:"#d9c67b",padding:"10px"}}>
        <p style={{marginLeft:"40%",marginTop:"10px"}}>©2026 Grand Palace Restaurant.
        All Rights Reserved.</p>
    </section>
        </>
    )
}
export default Register