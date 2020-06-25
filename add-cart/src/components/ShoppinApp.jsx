import React from 'react'
import Navbar from './NavBar'
import Routes from '../Routes/Routes'

export default class ShoppingApp extends React.Component{
    render(){
        return(
            <div>
                <h1> main page</h1>
                <Navbar />
                <Routes />
            </div>
        )
    }
}