import React , { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import { style } from './loading.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, useParams} from 'react-router-dom';



const HighUserInfo = Component => {
    const NewComonent = ()=>{
        const {id} = useParams();
        const [useInfo, setUseInfo] = useState();

        useEffect(() => {
            const fetchData = async() =>{
                const response=await fetch("https://60d1c0dc5b017400178f44c7.mockapi.io/users/users/");
                const user = await response.json();
                console.log(user[id]);
                setUseInfo(user[id]);
            }
            fetchData();
        }, []);

        if(!useInfo)return <div className="loading">
            <img src={logo} className="App-logo" alt="logo" />
        </div>;

        return <UserInfo useInfo={[useInfo]} />;
    }
    return NewComonent;
}
export default HighUserInfo;