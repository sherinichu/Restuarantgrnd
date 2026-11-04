import "./Style.css"
import { useState } from "react";
import { getUsers ,setLoggedInUsers} from "../Authstorage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

     function Login(){

    const [form,setForm]=useState({username:"",psw:""})
    const [error,setError]=useState("");

    const nav = useNavigate();

    function handleChange(e){
        const {name,value} = e.target;
        setForm(prev => ({...prev,[name]:value}));
        setError("");
    }
    function handleSubmit(e){
        e.preventDefault();

        if(!form.username ||!form.psw){
            setError("please fill in both fields");
            return;
        }

        const users =getUsers();
        const matchedUser = users.find(
            u => u.username=== form.username && u.psw === form.psw
        );
        if(!matchedUser){
            setError("Invalid username or password");
            return;
        }

        setTimeout(()=>{
            setLoggedInUsers(matchedUser);
            alert("Login success")
            nav('/user')
        },1000)
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
                <div className="form-logbox">
                <div className="reg-head">
                <h2 style={{marginLeft:"30%"}}>Welcome back</h2>
                <h4 style={{marginLeft:"35%"}}>Login here</h4>
                </div>
                   { error && (
                    <div style={{color:"red",marginLeft:"80px",marginTop:"20px"}}>{error}</div>
                )}
                  <form className="register-form" onSubmit={handleSubmit}>
                  <div className="field">
                       <div><span>User Name</span></div> 
                        <div><input type="text" name="username"   value={form.username}  placeholder="Enter Your User Name" onChange={handleChange} />
                        {/* {errors.username && <p className="error" style={{color:"red",marginTop:"-65px",marginLeft:"30%"}}>{errors.username}</p>} */}
                        </div>
                    </div>
                    <div className="field">
                       <div><span>Password</span></div> 
                        <div><input type="password" name="psw"  value={form.psw}  placeholder="Enter Your Password"  onChange={handleChange}/>
                        {/* {errors.psw && <p className="error" style={{color:"red",marginTop:"-65px",marginLeft:"30%"}}>{errors.psw}</p>} */}
                        </div>
                    </div>
                       <div> <button type="submit" className="bookbtn">Login</button>
                    </div>
                     <p>Don't have an Account? <Link to="/reg" className="link-sign">Sign up</Link></p>
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
export default Login