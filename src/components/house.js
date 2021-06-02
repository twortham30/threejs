import React, {useState} from 'react';



function House() {
    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(count + 1); 
    }

return (
   
   <button onClick={counter}>Number is {count} </button>
); 

};
export default House;