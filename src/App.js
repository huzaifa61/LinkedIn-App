import React,{useEffect} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/UserSlice"
import Header from './Header';
import Sidebar from './Sidebar';
import Siddebar from './Siddebar';
import Feed from './Feed';
import { auth } from './firebase';
import Login from "./Login";
import { useDispatch } from 'react-redux';
import Widgets  from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){

        dispatch(
          login({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,
          photoUrl : userAuth.profilePic,

      })
  );


      } else{
        dispatch(logout());

      }
    });

  },[]);
  return(
    <div className="app">
      <Header />
     {/* APP Body */}

    {/* Sidebar */}
    

    {!user ? <Login /> :(

<div className="app_body">
<Sidebar />
    <Feed />
<Widgets />
    </div>
    )}
   
     {/* Feed */}

     {/*widgest */}

    </div>
  );
}

export default App;
