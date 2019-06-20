import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import axios from 'axios';

class LoanApp extends React.Component{
    
constructor(props) {
    super(props);

    this.state = {
    money: 2500,
    month: 12,
    result: null
    }
}
    

handleChange = money => {
    this.setState({
    money: money
    })

    axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.money}&numMonths=${this.state.month}`).then((response)=>{
    console.log(response.data)
    this.setState({result:response.data})
    })
    .catch((e)=>{console.log(e)});

};


handleChange2 = month => {
    this.setState({
    month: month
    })

    axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.money}&numMonths=${this.state.month}`).then((response)=>{
    console.log(response.data)
    this.setState({result:response.data})
    })
    .catch((e)=>{console.log(e)});

};

Rate_pay(){
     if(this.state.result){
         return(
         <div>
                <div className="mt-5 row">
                <div className="col">
                <label>Interest Rate:</label>
                <div className='value'>{this.state.result.interestRate}%</div>
                </div>
                </div>
                
                <div className="mt-5 row">
                <div className="col">
                <label>Monthly Payment:</label>
                <div className='value'>${this.state.result.monthlyPayment.amount}</div>
                </div>
                </div>
        </div>
         )
     }
 }
    
    render(){
        const { money, month } = this.state
        return (
                <div className="container">
                <div className="mt-5 row">
                <div className="col">
                <label>Loan Amount:</label>
                <Slider
                min={500}
                max={5000}
                value={money}
                onChange={this.handleChange}
                />
                <div className='value'>${money}</div>
                </div>
                </div>
            
                <div className="mt-5 row">
                <div className="col">
                <label>Loan Duration:</label>
                <Slider
                min={6}
                max={24}
                value={month}
                onChange={this.handleChange2}
                />
                <div className='value'>{month} months</div>
                </div>
                </div>
            
                {this.Rate_pay()}
                </div>
        );
    }
}

export default LoanApp;