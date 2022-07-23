import React from "react";
import HelloWorld from '../Components/HelloWorld';
function Home() {
    return(
        <div className="text-2xl font-bold">
            This is Home Page
            <HelloWorld name='Rohit'></HelloWorld>
        </div>
    )
}

export default Home