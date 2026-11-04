import React,{useState} from "react";
import "./styleuser.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Order(){
    const[order,setOrder]=useState({name:"",phone:"",adress:"",point:"",method:""});
    const[errors,setErrors]=useState({});
    const[success,setSuccess]=useState(false);
    const[orderlist,setOrderlist]=useState([]);


     const nav=useNavigate()

    function handleChange(e){
        const {name,value} = e.target;
        setOrder(prev => ({...prev,[name]:value}));
        setErrors(prev =>({...prev,[name]:""}));
    }

    function handleSubmit(e){
        e.preventDefault();

        const err = {};
        if(!order.name.trim())      err.name  =  "name is required";
        if(!/^[6-9]\d{9}$/.test(book.phone)) err.phone = "Enter a valid 10 digit phone number";
        if(!order.adress.trim())      err.name  =  "Address is required";
        if(!order.method==="")      err.method  =  "Please select a payment method";
       

          if(Object.keys(err).length>0){
            setErrors(err);
            return;
        }

        setOrederlist([...orderlist,order]);
        // setSuccess(true);
        alert(" successfully Ordered✅✨")
        setBook({name:"",phone:"",adress:"",point:"",method:""});

        setTimeout(()=>{
            nav('/user')
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
                        
                            <li className="link" style={{marginLeft:"50%",marginTop:"30px"}}><Link to ="/user">Home</Link></li>
                                 
                       </nav>
                   </header>
                   </div>
       
                   <section className="register">
                       <div className="form-box">
                       <div className="reg-head">
                       <h2>Welcome to Grand Palace Restaurant</h2>
                       <h4>Fill Your Details Here</h4>
                       </div>
                          {/* { success && (
                           <div>Registered Successfully! Redirecting to login....</div>
                       )} */}
                         <form className="register-form" onSubmit={handleSubmit}>
                           
                           <div className="field">
                              <div><span>Full Name</span></div> 
                               <div><input type="text" name="name" value={order.name} placeholder="Enter Your Name" onChange={handleChange} />
                                {errors.name && <p  className="error" style={{color:"red", marginTop:"-65px",marginLeft:"30%"}}>{errors.name}</p>}
                            </div>
       
                           </div>
                            <div className="field">
                               <div><span>Phone</span></div>
                              <div> <input type="text" name="phone"  value={order.phone}  placeholder="Enter Your Phone number" onChange={handleChange} />
                               {errors.phone && <p className="error" style={{color:"red",marginTop:"-65px",marginLeft:"30%"}}>{errors.phone}</p>}
                                   </div>
       
                            </div>
                            <div className="field">
                               <div><span>Address</span></div>
                               
                               <div> <textarea name="adress"  value={order.adress}  placeholder="Enter Your Address"  onChange={handleChange}/>
                                {errors.adress && <p  className="error" style={{color:"red",marginTop:"-65px",marginLeft:"30%"}} >{errors.adress}</p>}</div>

                            </div>
                             <div className="field">
                               <div><span>Nearest Point</span></div>
                              <div> <input type="text" name="phone"  value={order.point}  placeholder="Eg:Near al-noor masjid" onChange={handleChange} />
                               {errors.point && <p className="error" style={{color:"red",marginTop:"-65px",marginLeft:"30%"}}>{errors.point}</p>}
                                   </div>
       
                            </div>
                            <div className="field">
                               <div><span>Payment Method</span></div>
                               <div className="rdi" style={{gap:"5px"}}>
                              <div> <input type="radio" className="radio-btn" name="method" value="cod"  onChange={handleChange}/><label>Cash on delivery</label></div>
                           <div> <input type="radio" className="radio-btn" name="method" value="upi"onChange={handleChange}  /><label>Upi</label></div>
                           </div>
                           </div>
                           <div>
                               <button className="bookbtn" type="submit">Order</button>
                           </div>
                          
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
export default Order