import React,{useEffect} from 'react';
import './upbutton.css';

const Upbutton = () => {

    useEffect(()=>{

        const handleScroll = () => {
            const button = document.getElementById("upbutton");
            if(window.scrollY > 400){
                button.style.display = 'block';
            }
            if(window.scrollY < 400){
                button.style.display = 'none';
            }
        };
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
    },[])

    
    function handleClick(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return(
        <>
            <button id='upbutton' onClick={handleClick}>↑</button>  
        </>
    );
}

export default Upbutton