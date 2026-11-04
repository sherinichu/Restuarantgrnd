import React from "react";
import "./Style.css";
import { useState } from "react";
import Counter from "./Counter";
import {useInView} from "react-intersection-observer";
import { Link } from "react-router-dom";

function Home(){
    const{ref ,inView} =useInView({
        triggerOnce:true,
        threshold:0.3,
    })
   
    return(
        <> 
        
            <header>
                <nav className="navbar">          
                    <div className="logo">
                       
                        <h2> Grand Palace Restaurant </h2>
                        <span style={{color:"#E8D8C4",fontSize:"20px",fontStyle:"italic"}}>& Banquet Hall</span>
                    </div>
                    
                    <div className="navs">
                        <input type="checkbox" id="menu-checkbox"/>
                       <label htmlFor="menu-checkbox" class="menutoggle">&#9776;</label>
                        <ul className="nav-links">
                            <li className="link"><a href="#">Home</a></li>
                            <li className="link"> <a href="#about">About</a></li>
                            <li className="link"> <a href="#hall">Banquet Hall</a></li>
                            <li className="link"><a href="#menu">Menu</a></li>
                            <li className="link"> <a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="user">
                        <div className="icon-box" >
                        <Link to="/reg"><i className="bi bi-person-plus fs-3"></i></Link>
                        <span className="icon-text">SignUp</span>
                        </div>
                        <div className="icon-box">
                        <Link to="/log"><i className="bi bi-box-arrow-in-right fs-3"></i></Link>
                       <span className="icon-text">Login</span>
                        </div>
                    </div>
                </nav>
            </header>
        <div className="container-fluid">
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
            <div className="carousel-indicators">
                <button type="button " data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></button>
                <button type="button " data-bs-target="#mycarousel" data-bs-slide-to="1" ></button>
                <button type="button " data-bs-target="#mycarousel" data-bs-slide-to="2" ></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="/images/wal1.jpg"/>
                     <div className="carousal2">
                     <h1>Experience Fine Dining <br/>Like Never Before </h1>
                     <p>Delicious cuisine,elegent ambiance,and unforgettable moments for every occasion.<br/>
                     Fresh ingredients,authentic flavors, and beautifully crafted dishes served with love.<br/>
                   <b style={{color:"hsl(0, 21%, 95%)",height:'30px',width:"110px",padding:"5px",fontweight:"bold"}}>since 1943</b></p>
                   </div>
                </div>
                 <div className="carousel-item ">
                    <img className="d-block w-100" src="/images/car1.jpg"/>
                </div>
                 <div className="carousel-item ">
                    <img className="  d-block" w-100 src="/images/wal2.jpg"/>
                           <div className="carousal2">
        <h1>Crafted by Passion, <br/>Served with Love </h1>
        <p>"Cooking is  an art ,and every dish tells a story of passion,flavour,and perfection. " </p>

    </div>
                </div>
            </div>
            <button className="carousel-control-next" data-bs-target="#mycarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
            <button className="carousel-control-prev" data-bs-target="#mycarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
        </div>
    </div>
   
        <section className="aboutpage" id="about" >
            <i>-Get to know us-</i>
            <div className="line" style={{marginLeft:"42%",marginTop:"5px"}}></div>
            <h1>About us</h1>
            <p>Good food, Warm hospitality and unforgettable experiences
            that's what we promise to deliver.</p>
            <div className="subabout">
            <div className="about1">
                <h3>Our story</h3>
                <h1>Passion for Food,<br/>Love for people</h1>
                <div className="line"></div>
                <p>We started with a simple idea- to serve<br/>delicious food in place where people feel<br/>
                at home.Over the years, our dedication to<br/>quality, taste and service has made us a <br/>favourite for
                families,friends and celebrations.<br/><br/>
                  From casual dining to grand events, we put <br/>
                  our heart into everything we do.  </p>
                  <button>Our menu</button>
              </div>
            
                <div className="about2">
               <div className="cards ">
                <div className="card ">
                    <img src="/images/ab1.jpg" />
                    <div className="card-title">
                        <div className="round-icon">
                            <i className="bi bi-shop fs-2 text-warning"></i>
                        </div>
                        <h3>Elegent Ambience</h3>
                        <p> A warm and inviting space<br/>designed for your comfort.</p>
                    </div>
                   
                </div>
               
                <div className="card ">
                    <img src="/images/ab2.jpg" />
                    <div className="card-title">
                        <div className="round-icon">
                        <i className="bi bi-award fs-2 text-warning"></i>
                        </div>
                        <h3>Expert Chefs</h3>
                        <p> Our chefs craft every fish with fresh ingrediants and authentic flavours.</p>
                    </div>
                    {/* <div className="line"></div> */}
                </div>
               
                <div className="card ">
                    <img src="/images/ab3.jpg" />
                    <div className="card-title">
                        <div className="round-icon">                          
                              <i className="bi bi-people fs-2 text-warning"></i>
                             </div>
                        <h3>Happy Customers</h3>
                        <p> your happiness is our greatest reward.</p>
                    </div>
                    {/* <div className="line"></div> */}
                </div>
               
                <div className="card ">
                    <img src="/images/ab4.jpg" />
                    <div className="card-title">
                        <div className="round-icon">
                        <i className="bi bi-building fs-2 text-warning"></i>
                        </div>
                        <h3>perfect Celebrations</h3>
                        <p> From birthday parties to weddings,our hall makes every event memorable.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="rating" ref={ref} >
            <div className="subrat">
                <i className="bi bi-fork-knife fs-2 text-warning"></i>
                <h2><Counter end={150} start={inView} /></h2>
                <h5>Delicious Dishes</h5>
            </div>
             <div className="subrat">
                <i className="bi bi-emoji-smile fs-2 text-warning"></i>
                <h2><Counter end={3000}  start={inView} /></h2>
                <h5>Happy Customers</h5>
            </div>
             <div className="subrat">
                <i className="bi bi-calendar-event fs-2 text-warning"></i>
                <h2><Counter end={500}  start={inView} /></h2>
                <h5>Event Hosted</h5>
            </div>
             <div className="subrat">
                <i className="bi bi-award-fill fs-2 text-warning"></i>
                <h2><Counter end={10}  start={inView} /></h2>
                <h5>Year of Experiance</h5>
            </div>

        </div>
    </section>

    <section className="banquet-hall" id="hall">
        <i>-celebrate with us-</i>
        <div className="line" style={{marginLeft:"43%"}}></div>
         <h1 >BANQUET HALL</h1>
        <h6>Host your Special Moments</h6>
      <div className="hall">
        <div className="subhall-1">
            <h2 style={{color:"#b56732",marginLeft:"30px"}}>Perfect for</h2>
            <div className="events ">
                <div className="event">
                    <i className="bi bi-heart-fill"></i>
                    <h3>WEDDING</h3>
                </div>
                 <div className="event">
                 <i className="bi bi-cake2-fill"></i>
                    <h3>BIRTHDAYS</h3>
                </div>
                 <div className="event">
                                         <i className="bi bi-balloon-heart-fill"></i>
                    <h3>ENGAGEMENTS</h3>
                </div>
                 <div className="event">
                     <i className="bi bi-briefcase-fill"></i>
                    <h3>CORPORATE MEETINGS</h3>
                </div>
                 <div className="event">
                    <i className="bi bi-people-fill"></i>
                    <h3>FAMILY FUNCTIONS</h3>
                </div>
                 <div className="event">
                                    <i className="bi bi-stars "></i>
                    <h3>MEETUPS</h3>
                </div>
            </div>

             <h2 style={{color:"#b56732",marginLeft:"30px"}}>Our Fecilities</h2>
             <div className="facilities">
                <div className="fac">
                    <img src="/images/fac1.jpg"></img>
                </div>
                <div className="fac">
                    <img src="/images/fac2.jpg"></img>
                </div>
                <div className="fac">
                    <img src="/images/fac3.jpg"></img>
                </div>
                <div className="fac">
                    <img src="/images/fac4.jpg"></img>
                </div>
                                                        

             <div>
             </div>
            </div>

        </div>
        <div className="subhall-2">
         <h2 >Celebrate</h2>
         <h1>EVERY OCCASION<br/> IN STYLE</h1>
        <b ><p style={{marginLeft:"-20px", marginTop:"20px"}} >Make every celebration unforgettable in our elegant banquet hall.From intimate family gatherings to grand 
            wedding receptions, Our beautifully designed banquet hall provides the perfect setting for 
            unforgettable memories. Enjoy exceptional catering,elegant decor, and personalized service tailored to Your event. </p></b>
            <div className="buttons">
             <button className="btn">Book Now</button>
              <button className="btn">For Enquiry</button>
             </div>
      
      </div>
      </div>

    </section>

    {/* menu  */}

    <section className="menu" id="menu">
        <i>-Order with us-</i>
        <div className="line" style={{marginLeft:"42%",marginTop:"5px"}}></div>
        <h1> Our Signature Dishes</h1>
        <div className="foods">
            <div className="food">
                <img src="/images/biriyani.jpg"></img>
                <h3>chicken Biriyani</h3>
                <p>Juicy chicken cooked in arich,creamy tomato sauce</p>
            </div>
             <div className="food">
                <img src="/images/pizza.jpg"></img>
                <h3>Farmhouse Pizza</h3>
                <p>Loaded with fresh vegitables,melted cheese, and savory topping</p>
            </div>
             <div className="food">
                <img src="/images/pasta.jpg"></img>
                <h3>Creamy white sauce pasta</h3>
                <p>Perfectly cooked pasta tossed in a smooth,cheesy white sauce.</p>
            </div>
             <div className="food">
                <img src="/images/tiramisu.jpg"></img>
                <h3>Classic Tiramisu</h3>
                <p>A delightful italian dessert with cofee,cream, and cocoa layers.</p>
            </div>
             <div className="food">
                <img src="/images/burger.jpg"></img>
                <h3>Classic Burger</h3>
                <p> A Juicy grilled patty layered with fresh veggies and menlted cheese.</p>
            </div>
             <div className="food">
                <img src="/images/mojito.jpg"></img>
                <h3>Mojito</h3>
                <p> A refreshing blend of mint,lime and sparkling soda.</p>
            </div>
             <div className="food">
                <img src="/images/juice.jpg"></img>
                <h3>Fresh juices</h3>
                <p> Naturally squeezed fruit jiuces bursting with freshness and flavor.</p>
            </div>
        </div>
        <div className="fbutton">
            <button className="fbtn">Order Now</button>
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
export default Home