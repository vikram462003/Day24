import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import {Button} from 'react-bootstrap';


function App() {
  const data=[{
    name:"Fancy Product",
    price:"$40.00 - $80.00",
    actions:"View Options"  
  },
  {
    name:"Special Item",
    fakeprice:"$20.00",
    price:"$18.00",
    actions:"Add to cart" 
  },
  {
    name:"Sale Item",
    fakeprice:"$50.00",
    price:"$25.00",
    actions:"Add to cart" 
  },
  {
    name:"Popular Item", 
    price:" $40.00",
    actions:"Add to cart" 
  },
  {
    name:"Fancy Product",
    price:" $120.00 - $280.00",
    actions:"View Options"  
  }

]

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <FancyProduct
                  name={data[0].name}
                  price={data[0].price}
                  action={data[0].actions}
                  />
                  <SpecialItem
                  name={data[1].name}
                  fakeprice={data[1].fakeprice}
                  price={data[1].price}
                  action={data[1].actions}
                />
                <SaleItem
                 name={data[2].name}
                 fakeprice={data[2].fakeprice}
                 price={data[2].price}
                 action={data[2].actions}/>
                 <PopularItem
                 name={data[3].name}
                 price={data[3].price}
                 action={data[3].actions}
                 />
                 <SaleItem
                 name={data[2].name}
                 fakeprice={data[2].fakeprice}
                 price={data[2].price}
                 action={data[2].actions}/>
                 <FancyProduct
                 name={data[4].name}
                 price={data[4].price}
                 action={data[4].actions}
                 />
                 <SpecialItem
                 name={data[1].name}
                 price={data[1].price}
                 action={data[1].actions}
                  fakeprice={data[1].fakeprice}
                  />
                 <PopularItem
                 name={data[3].name}
                 price={data[3].price}
                 action={data[3].actions}/>
                </div>
            </div>
        </section>
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
    </div>
     
  );
}
function FancyProduct({name,price,action}){
   
  return(
                    <div className="col mb-5">
                        <div className="card h-100">
                           
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">{name}</h5>
                                    
                                    {price}
                                </div>
                            </div>
                           
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{action}</a></div>
                            </div>
                           
                        </div>
                    </div>
                    );
}
function SpecialItem({name,price,action,fakeprice}){
    var [show, setShow] = useState(true);
    function addtoCart() {
   
        setShow(!show);
      }
      function removeCart() {
        
        setShow(!show);
      }
  return(
    <div className="col mb-5">
                        <div className="card h-100">
                           
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                           
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">{name}</h5>
                                   
                                
                                    
                                    <span className="text-muted text-decoration-line-through">{fakeprice}</span>
                                    {price}
                                </div>
                            </div>
                            {show ?
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={addtoCart} href="#">{action}</a></div>
                            </div>:
                            <div className='removecart'><Button variant="outline-danger" onClick={removeCart}>Remove cart</Button></div>

                            }
                        </div>
                    </div>
  );
}
function SaleItem({name,price,action,fakeprice}){
    var [show, setShow] = useState(true);
    function addtoCart() {
     
      setShow(!show);
    }
    function removeCart() {
      
      setShow(!show);
    }
  return (
  <div className="col mb-5">
  <div className="card h-100">
     
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
      
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      
      <div className="card-body p-4">
          <div className="text-center">
              
              <h5 className="fw-bolder">{name}</h5>
            
              <span className="text-muted text-decoration-line-through">{fakeprice}</span>
              {price}
          </div>
      </div>
     
    {show? <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a class="btn btn-outline-dark mt-auto" onClick={addtoCart} href="#">{action}</a></div>
      </div>:<div className='removecart'><Button variant="outline-danger" onClick={removeCart}>Remove cart</Button></div>
      }
  </div>
</div>);
}

function PopularItem({name,price,action}){
    var [show, setShow] = useState(true);
    function addtoCart() {
     
      setShow(!show);
    }
    function removeCart() {
      
      setShow(!show);
    }
  return(
  <div className="col mb-5">
  <div className="card h-100">
    
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
   
      <div className="card-body p-4">
          <div className="text-center">
            
              <h5 className="fw-bolder">{name}</h5>
           
              <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
              </div>
              
              {price}
          </div>
      </div>
    
      {show? <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a class="btn btn-outline-dark mt-auto" onClick={addtoCart} href="#">{action}</a></div>
      </div>:<div className='removecart'><Button variant="outline-danger" onClick={removeCart}>Remove cart</Button></div>
      }

  </div>
</div>);
}

export default App;
