import { useState } from "react";
export default function Card({img , title , desc , price , review}){
    const [data , setData] = useState(true);
    
    return(
        <div>
            <div style={
                {
                    backgroundImage: `url(${img})` ,
                    width:"300px" , 
                    height:"300px" , 
                    backgroundRepeat:"no-repeat" , 
                    backgroundSize:"cover" ,
                    borderRadius: "12px" , 
                    backgroundPosition : "center center"
                    }}>
            </div>
            <div style={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
            <h1>{title}</h1>
            <h3 style={{margin : "0px" , fontWeight:"normal"}}>
                <i className="fa-solid fa-star" style={{color: data? "" : "gold"}} onClick={()=> setData(v => !v)}></i>
                {review}</h3>
            <i></i>
            </div>
            <h3 style={{color : "grey" , fontWeight : "normal" , margin: "0px"}}>{desc}</h3>
           <h3>{price}$</h3>
        </div>
    )
}