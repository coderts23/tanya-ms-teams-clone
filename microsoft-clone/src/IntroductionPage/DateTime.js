import  React, { useState , useEffect } from 'react';

const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <span> {date.toLocaleTimeString()}</span>
            <span> {date.toLocaleDateString()}</span>
        </div>
    )
}

export default DateTime;