import React,{useContext, useState,useEffect} from "react";
import "./styleuser.css"
import { myContext } from "./Context/Context";
import { Link } from "react-router-dom";

 

function User(){

     const{food,setFood,cart,setCart,wishlist,setWishlist}=useContext(myContext);
     const[search,setSearch]=useState('');
     const[category,setCategory]=useState('all')
     const images=["/images/off1.png","/images/off2.png","/images/oferjuice.png"];
     const[currentimage,setCurrentimage]=useState(0)

     const filteredFood=
           food.filter((item)=>{
            const searchMatch=item.name.toLowerCase().includes(search.toLowerCase()) || item.category .toLowerCase().includes(search.toLowerCase())||
                item.price.toString().includes(search);

            const categoryMatch=category==="all" ||  item.category===category
            
            return searchMatch && categoryMatch
           });


     const handleWishlist=(pdt)=>{
        if(wishlist.includes(pdt)){
        setWishlist(wishlist.filter((pro)=>pro !== pdt))
        }
        else{
            setWishlist([...wishlist,pdt])
        }
     }     
     console.log(wishlist);

     const handleCart  =(pdt)=>{
        if(cart.includes(pdt)){
            setCart(cart.filter((pro)=>pro!==pdt))
        }
        else{
            setCart([...cart,pdt])
        }
     }
     console.log(cart);

      useEffect(()=>{
        const interval=setInterval(() => {
            setCurrentimage((prev)=>(prev+1) % images.length)
        }, 3000);
        return () =>clearInterval(interval)
      },[])

    return(
        <><div>
       <header>
                <nav className="user-navbar">          
                    <div className="logo">
                        {/* <i className="fa-solid fa-crown"></i>  */}
                        <h2> Grand Palace Restaurant </h2>
                        <span  className="sp" style={{color:"#e8c59d",fontSize:"20px",fontStyle:"italic"}}>& Banquet Hall</span>
                    </div>
                    <div className="navs">
                          <input type="checkbox" id="menu-checkbox"/>
                       <label htmlFor="menu-checkbox" className="menutoggle">&#9776;</label>
                        <ul className="nav-linksh">
                            <li className="link"><Link to ="/user">Home</Link></li>
                            <li className="link"> <Link to="/cart">cart</Link></li>
                            <li className="link"> <Link to="/wishlist">whishlist</Link></li>
                            <li className="link"><Link to="/booking">Hall booking</Link></li>
                            {/* <li className="link"><Link to="/home">logout</Link></li> */}
                        </ul>
                    </div>
                    <div className="nav-icon">
                       <Link to="/cart"> <i className="bi bi-cart fs-3"></i></Link>
                        <Link to="/wishlist"><i className="bi bi-heart fs-3"></i></Link>
                        <Link to="/home"><i className="bi bi-power fs-3"></i></Link>
                    </div>
                </nav>
            </header>
            </div>
            <section className="navbar2">
              <div className="search-field">
                <input type="search" name="search" placeholder="Search here" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
              </div>
                <div className="search-icon"><i className="bi bi-search"></i></div>
                <div className="food-menu">
                    <div className="item"><button onClick={()=>setCategory('all')}>All</button></div>
                    <div className="item"><button onClick={()=>setCategory('breakfast')}>Break Fast</button></div>
                    <div className="item"><button onClick={()=>setCategory('lunch')}>Lunch</button></div>
                    <div className="item"><button onClick={()=>setCategory('dinner')}>Dinner</button></div>
                    <div className="item"><button onClick={()=>setCategory('burger')}>Burgers</button></div>
                    <div className="item"><button onClick={()=>setCategory('curry')}>Curry</button></div>
                    <div className="item"><button onClick={()=>setCategory('juice')}>Juices</button></div>
                     <div className="item"><button onClick={()=>setCategory('mojito')}>Mojitto</button></div>
                     <div className="item"><button onClick={()=>setCategory('fries')}>Fries</button></div>
                </div>
            </section>
            <section className="wal">
                <div>
                    <img src="/images/fdwall.jpeg"></img>
                </div>
            </section>
            <section className="food-items">
                <h1>Our Special Dishes</h1>
                <div className="underline"></div>
                <div className="row g-4 mt-5 mb-5">
                     {filteredFood.map((item) =>(
                <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="card food-card h-100 shadow">
                    <img className="card-img-top" src={item.image}></img>
                    <div className="wishlist" onClick={()=>handleWishlist(item)}><i className={`bi ${wishlist.includes(item) ? "bi-heart-fill text-danger" :
                    "bi-heart" } fs-4`}></i></div>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                         <div className="rating-card">
                        <i className="bi bi-star-fill fs-6 "></i>
                        <span className="fw-bold ">4.8</span>
                        <span className="text-muted">(324)</span>
                    </div>
                        <p className="card-text">{item.des}</p>
                        <h4 className="text-danger">{item.price}</h4>
                        <div className="cart" onClick={()=>{handleCart(item)}}><i className= {`bi ${cart.includes(item) ? "bi-cart-fill text-warning" :"bi-cart" }  fs-4` }></i></div>
                        <div className="btno"><button><Link  className="ordlnk" to="/order">Order</Link></button></div>
                    </div>
                  </div>
                  </div>
                    ))}
                  </div>
            
            </section>

            <section className="offers">
                <h1>Today Offers</h1>
               <div className="underline"></div>
                <div className="offer-pic">
                    <div className="carousel-offer">
                       <img src={images[currentimage]}  alt="slide"></img>
                    </div>
                    <div className="carousel-dots">
                        {images.map((images,index)=>(
                            <span key={index} className={currentimage === index ? "dot active":"dot"}
                            onClick={()=>setCurrentimage(index)}></span>
                        ))}
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
export default User