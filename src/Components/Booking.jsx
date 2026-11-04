import React,{useState} from "react";
import "./styleuser.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Booking(){
    const[book,setBook]=useState({name:"",phone:"",function:"",date:"",time:"",members:""});
    const[errors,setErrors]=useState({});
    const[success,setSuccess]=useState(false);
    const[booklist,setBooklist]=useState([]);


     const nav=useNavigate()

    function handleChange(e){
        const {name,value} = e.target;
        setBook(prev => ({...prev,[name]:value}));
        setErrors(prev =>({...prev,[name]:""}));
    }

    function handleSubmit(e){
        e.preventDefault();

        const err = {};
        if(!book.name.trim())      err.name  =  "name is required";
        if(!/^[6-9]\d{9}$/.test(book.phone)) err.phone = "Enter a valid 10 digit phone number";
        if(!book.function==="")      err.function  =  "Please select a function name";
        if(!book.date.trim())      err.date  =  "date is required";
        if(!book.time.trim())      err.time  =  "time is required";
        if(!book.members.trim())      err.members  =  "Number of members is required";

          if(Object.keys(err).length>0){
            setErrors(err);
            return;
        }

        setBooklist([...booklist,book]);
        // setSuccess(true);
        alert("Booked successfully✅✨")
        setBook({name:"",phone:"",function:"",date:"",time:"",members:""});

        setTimeout(()=>{
            nav('/booking')
        },1200);

      }

    return(
        <>
        <div>
       <header>
                <nav className="user-navbar">          
                    <div className="logo">
                        {/* <i className="fa-solid fa-crown"></i>  */}
                        <h2> Grand Palace Restaurant </h2>
                        <span style={{color:"#e8c59d",fontSize:"20px",fontStyle:"italic"}}>& Banquet Hall</span>
                    </div>
                    <div className="navs">
                         <input type="checkbox" id="menu-checkbox"/>
                       <label htmlFor="menu-checkbox" className="menutoggle">&#9776;</label>
                        <ul className="nav-links">
                            <li className="link"><Link to ="/user">Home</Link></li>
                            {/* <li className="link"> <a href="#about">cart</a></li> */}
                            <li className="link"> <Link to="/wishlist">whishlist</Link></li>
                            <li className="link"><a href="/cart">Cart</a></li>
                            {/* <li className="link"> <a href="#contact"></a></li> */}
                        </ul>
                    </div>
                    <div className="nav-icon">
                        <i className="bi bi-cart fs-3"></i>
                        <i className="bi bi-heart fs-3"></i>
                    </div>
                </nav>
            </header>
            </div>
        <section className="booking">
            <div className="book1">
                <h1> Banquate Hall </h1>
                <div className="underline" style={{marginLeft:"50px",marginTop:"-30px",marginBottom:"20px"}}></div>
                <div className="about">
                    <h3>About our Hall</h3>
                    <h4>Where Every Celebration Becomes a Beautiful Memory</h4>
                    <p>Welcome to Grand palace Banquet Hall, an elegent and spaciuos venue designed 
                        to make your special occasions truly unforgettable.From beautiful weddings and receptions to birthdays,
                        engagements, anniversaries, and corporate events, our hall provides the 
                        perfect setting for every celebrattion.
                             Our beautifully designed interiors, comfortable seating,modern lighting,
                             specious dining area,and professional services ensure that you and your guests
                             enjoy a memorable experience from start to finish. 
                    </p>
                </div>
                <div className="bkicon">
                    <div className="bicon2">
                        <i className="bi bi-people"></i>
                        <h6>Speccious Hall</h6>
                        <p>Up to 1000 Guests</p>
                    </div>
                     <div className="bicon2">
                        <i className="bi bi-cup-hot"></i>
                        <h6>Elegent Interiors</h6>
                        <p>Luxury & Comfort </p>
                    </div>
                     <div className="bicon2">
                        <i className="bi bi-egg-fried"></i>
                        <h6>Catering Services</h6>
                        <p>Delicious Food</p>
                    </div>
                     <div className="bicon2">
                        <i className="bi bi-car-front "></i>
                        <h6>Ample Parking</h6>
                        <p>Hassle Free Parking</p>
                    </div>
                </div>
            </div>
            <div className="book2">
                <div className="book-form">
                    <h4>Book Here</h4>
                    <h6>celebrate your special Moment With us</h6>
                   
                <form className="hallbook" onSubmit={handleSubmit}>
                    
                    <div className="field">
                       <div><span>Full Name</span></div> 
                        <div><input type="text" name="name" placeholder="Enter Your Name" value={book.name} onChange={handleChange} />
                      {errors.name && <p  className="error" style={{color:"red", marginTop:"-65px",marginLeft:"35%"}}>{errors.name}</p>}
                     </div>
                    </div>
                     <div className="field">
                        <div><span>Phone</span></div>
                       <div> <input type="text" name="phone" placeholder="Enter Your Phone number" value={book.phone} onChange={handleChange} /></div>
                         {errors.phone && <p  className="error" style={{color:"red", marginTop:"-65px",marginLeft:"35%"}}>{errors.phone}</p>}

                     </div>
                     <div className="field">
                        <div><span> Name of Function</span></div>
                        <div>
                        <select  name="function" onChange={handleChange} value={book.function}>
                            <option value="Nikkah" >Nikkah</option>
                             <option value="Marriage" >Marrage</option>
                            <option value="Birthday" >Birthday</option>
                            <option value="Corporate meetingh" >Corporate meeting</option>
                            <option value="Family function" >Family function</option>
                            <option value="Meetup">Meetup</option>
                            <option value="Others" >Others</option>
                        </select></div>
                         {errors.function && <p  className="error" style={{color:"red", marginTop:"-65px",marginLeft:"35%"}}>{errors.function}</p>}

                    </div>
                     <div className="field">
                       <div><span>Date</span></div>
                        <div><input type="date" name="date" value={book.date} onChange={handleChange} />
                        {errors.date && <p  className="error" style={{color:"red", marginTop:"-65px",marginLeft:"35%"}}>{errors.date}</p>}
</div>
                    </div>
                     <div className="field">
                        <div><span>Time</span></div>
                       <div><input type="time" name="time" value={book.time} onChange={handleChange} />
                         {errors.time && <p  className="error" style={{color:"red", marginTop:"-65px",marginLeft:"35%"}}>{errors.time}</p>}
</div>
                    </div>
                     <div className="field">
                        <div><span>Number of Members</span></div>
                      <div className="rdi">
                        <div><input type="radio" className="radio-btn" name="members" value="50" onChange={handleChange}/><label>1-50</label></div>
                        <div><input type="radio" className="radio-btn" name="members" value="100" onChange={handleChange}/><label>50-100</label></div>
                        <div><input type="radio" className="radio-btn" name="members" value="150" onChange={handleChange}/><label>100-150</label></div>
                       <div><input type="radio" className="radio-btn" name="members" value="200" onChange={handleChange}/><label>150-200</label></div>
                     <div> <input type="radio" className="radio-btn" name="members" value="250" onChange={handleChange}/><label>Above 250</label></div>
                      </div>
                     {errors.members && <p  className="error" style={{color:"red", marginTop:"-65px",marginLeft:"35%"}}>{errors.members}</p>}
                    </div>
                    {/* <div className="field">
                        <input type="checkbox">All the above details are true .Confirm Booking /</input>>
                    </div> */}
                    <button type="submit" className="bookbtn">
                        Book
                    </button>
                </form>
                 </div>
            </div>
        </section>
        <section className="gallary">
            <h2>Our Gallary</h2>
            <div className="gals">
                   <div className="gal">
                    <img src="/images/fac1.jpg"></img>
                </div>
                <div className="gal">
                    <img src="/images/fac2.jpg"></img>
                </div>
                <div className="gal">
                    <img src="/images/fac3.jpg"></img>
                </div>
                <div className="gal">
                    <img src="/images/fac4.jpg"></img>
                </div>
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
export default Booking