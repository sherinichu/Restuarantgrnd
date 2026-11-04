import React,{useContext} from "react";
import "./styleuser.css"
import { myContext } from "./Context/Context";
import { Link } from "react-router-dom";

function Cart(){
    const{cart,setCart}=useContext(myContext)

    const handleRemove=(index)=>{
        const newcart=[...cart]
        newcart.splice(index,1);
        setCart(newcart);
    }
    return(
        <><div>
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
                            <li className="link"><Link to="/booking">Hall booking</Link></li>
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
                  <section className="food-items">
                <h1 style={{marginLeft:"40%"}}>Cart</h1>
                <div className="underline-s"></div>
                <div className="row g-4 mt-5 mb-5">
                     {cart.map((item,index) =>(
                <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="card food-card h-100 shadow">
                    <img className="card-img-top" src={item.image}></img>
                    {/* <div className="wishlist" onClick={()=>handleWishlist(item)}><i className={`bi ${wishlist.includes(item.id) ? "bi-heart-fill text-danger" : */}
                    {/* "bi-heart" } fs-4`}></i></div> */}
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                         <div className="rating-card">
                        <i className="bi bi-star-fill "></i>
                        <span className="fw-bold ">4.8</span>
                        <span className="text-muted">(324)</span>
                    </div>
                        <p className="card-text">{item.des}</p>
                        <h4 className="text-danger">{item.price}</h4>
                        <div><button className="removebtn" onClick={()=>handleRemove(index)}><i className="bi bi-trash"></i></button></div>
                        <div className="btnord" ><button><Link className="ordlnk" to="/order">Order</Link></button></div>
                    </div>
                  </div>
                  </div>
                    ))}
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
}export default Cart