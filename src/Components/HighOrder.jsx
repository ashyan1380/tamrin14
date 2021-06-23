import React , { useState, useEffect } from 'react';
import CustomPaginationActionsTable from './CustomPaginationActionsTable';
import { style } from './loading.css';
import logo from './logo.svg';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// import { BrowserRouter as Router, 
//     Route, 
//     Link , 
//     Switch ,
//     Redirect 
// } from 'react-router-dom';


const HighOrder = Component => {
    // eror handling
    const createNotification = (type) => {
       
          switch (type) {
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
            }
    }
    const NewComonent = ()=>{
        const [useInfo, setUseInfo] = useState();

        useEffect(() => {
            const fetchData = async() =>{
                try{
                    const response=await fetch("https://60d1c0dc5b017400178f44c7.mockapi.io/users/users/");
                    const users = await response.json();
                    // console.log(users);
                    setUseInfo(users);
                }
                catch{
                    createNotification('error');
                };
            }
            fetchData();
        }, []);

        if(!useInfo)return <div className="loading">
            <img src={logo} className="App-logo" alt="logo" />
        </div>;

        return <CustomPaginationActionsTable useInfo={[useInfo]} />;
    }
    return NewComonent;
}
export default HighOrder;