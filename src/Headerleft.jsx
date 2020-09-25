import React from "react";

function Headerleft(){
    return   <div className="topleft">
                <p className="topword">The Most Powerfull Checking Account</p>
                 <h3 className="words">Our checking account gives you higher returns than a saving accounts with no hidden fees.</h3>
                <br></br>
                <input className="email" type="email" placeholder="What's your email?"></input>
                <button className="btn" type="submit">></button>
                <br></br>
                <div>
                    <div className="play">
                    <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/googleplay%403x.png" alt="" width="100" height="50"/>
                    
                    </div> 
                    <div className="apple">
                    <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/applepay%403x.png" alt="" width="100" height="50" />
                    </div>
                </div>
            </div>
            
}
export default Headerleft;