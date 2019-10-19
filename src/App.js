import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import * as math from 'mathjs';

class App extends React.Component{
  state = {input : ' ',
          isClicked: true};

  onValueCal = (value) => {
    this.setState({input: this.state.input + value});
  }

  onPercentValue = () => {
    this.setState({input: this.state.input / 100})
  }

  addNegPos = () => {

    if (this.state.isClicked === false){
      this.setState({input: this.state.input.replace("-",'') ,
                      isClicked : true});

    }else if(this.state.isClicked){
      this.setState({input: "-"+ this.state.input,
                      isClicked: false});
    }
  }
  
  onHandleClear = () => {
    this.setState({input : " "})
  }

  onHandleEqual = () => {
    this.setState({input: math.round(math.evaluate(this.state.input),2)});
  }

  render(){
    return (
      <div className="App">
        <div className="wrapper">
            <Input value={this.state.input}></Input>
            <div className="row">
                <Button val="AC" onHandleClick={this.onHandleClear}/>
                <Button id="clicked" onHandleClick={this.addNegPos} val="+/-"/>
                <Button onHandleClick={this.onPercentValue} val="%"/>
                <Button onHandleClick={this.onValueCal} val="/"/>
            </div>
            <div className="row">
                <Button onHandleClick={this.onValueCal} val="7"/>
                <Button onHandleClick={this.onValueCal} val="8"/>
                <Button onHandleClick={this.onValueCal} val="9"/>
                <Button onHandleClick={this.onValueCal} val="*"/>
            </div>
            <div className="row">
                <Button onHandleClick={this.onValueCal} val="4"/>
                <Button onHandleClick={this.onValueCal} val="5"/>
                <Button onHandleClick={this.onValueCal} val="6"/>
                <Button onHandleClick={this.onValueCal} val="-"/>
            </div>
            <div className="row">
                <Button onHandleClick={this.onValueCal} val="1"/>
                <Button onHandleClick={this.onValueCal} val="2"/>
                <Button onHandleClick={this.onValueCal} val="3"/>
                <Button onHandleClick={this.onValueCal} val="+"/>
            </div>
            <div className="row">
                <Button onHandleClick={this.onValueCal}  val="0"/>
                <Button/>
                <Button onHandleClick={this.onValueCal}  val="."/>
                <Button onHandleClick={this.onHandleEqual} val="="/>
            </div>
        </div>
      </div>
    );
  }
}
export default App;