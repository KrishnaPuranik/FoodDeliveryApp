import {useEffect, useState} from 'react';

const User = ({name}) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("User useEffect set interval");
        }, 1000);
        return (() => {
            console.log("Unmounting: User useEffect set interval");
            clearInterval(timer);
        })
    }, [])

    return (
        <div className='user-card'>
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Bengaluru</h3>
            <h4>Contact: krishnamurthypuranik@gmail.com</h4>
        </div>
    );
}

export default User;