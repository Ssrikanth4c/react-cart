import React from 'react'
import {Route} from 'react-router-dom'
// import {Route} from 'react-router-dom'
import Cart from '../components/Cart'
import Home from '../components//Home'
import SignIn from '../components/SignIn'


export default function Routes (props){
    const {app} = props  
   {
       return(
        <>
        <Route  path='/' exact render={(props)=><Home {...props} app={app}/> } />
        <Route  path='/cart'  render={(props)=><Cart {...props} app={app}/> } />
       <Route  path='/signin' render={(props)=><SignIn {...props} app={app}/>}/>
        </>
       )
   } 
}