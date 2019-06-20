import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import LoanApp from './LoanApplicationComponent'

class App extends React.Component{
    render(){
        return(
                <div className="App">
                    <Navbar dark color="primary">
                        <div className="container">
                        <NavbarBrand href="/">Loan Application</NavbarBrand>
                        </div>
                    </Navbar>
                    <LoanApp/>
                </div>
        );
    }
}

export default App;
