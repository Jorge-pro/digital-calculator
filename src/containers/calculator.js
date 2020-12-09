import { Component } from 'react';
import { Button } from '../components/button';
import Display from '../components/display';

class Calculator extends Component {
  initialState = { firstValue: 0, secondValue: 0, operator: 1, isSum: false };

  constructor(props) {
    super(props); this.state = this.initialState;
  }

  putValue = (value) => {
    const lastValue = this.state.operator === 1 ? 
      this.state.firstValue : 
      this.state.secondValue;

    switch (this.state.operator) {
      case 1: this.setState({ firstValue: lastValue * 10 + value });
        break;
      case 2: this.setState({ secondValue: lastValue * 10 + value });
        break;
    }
  };

  getValue = () => {
    switch (this.state.operator) {
      case 1: return this.state.firstValue;
      case 2: return this.state.secondValue;
      case 3: return this.state.isSum ? 
        this.state.firstValue + this.state.secondValue : 
        this.state.firstValue - this.state.secondValue;
    }
  };

  pickOperation = (isSum) => {
    this.setState({ operator: 2, isSum: isSum });
  };

  execOperation = () => {
    this.setState({ operator: 3 });
  };

  clear = () => {
    this.setState(this.initialState);
  };

  render() {
    const { operator } = this.state;
    return (
      <div className={'calculator'}>
        <div>
          <Display value={this.getValue()} />
        </div>
        <div className={'buttonsContainer'}>
          <Button display={'1'}onClick={() => this.putValue(1)}
            disabled={operator === 3}/>
          <Button display={'2'}onClick={() => this.putValue(2)}
            disabled={operator === 3}/>
          <Button display={'3'}onClick={() => this.putValue(3)}
            disabled={operator === 3}/>
          <Button display={'4'}onClick={() => this.putValue(4)}
            disabled={operator === 3}/>
          <Button display={'5'}onClick={() => this.putValue(5)}
            disabled={operator === 3}/>
          <Button display={'6'}onClick={() => this.putValue(6)}
            disabled={operator === 3}/>
          <Button display={'7'}onClick={() => this.putValue(7)}
            disabled={operator === 3}/>
          <Button display={'8'}onClick={() => this.putValue(8)}
            disabled={operator === 3}/>
          <Button display={'9'}onClick={() => this.putValue(9)}
            disabled={operator === 3}/>
          <Button display={'0'}onClick={() => this.putValue(0)}
            disabled={operator === 3}/>
          <Button display={'+'}onClick={() => this.pickOperation(true)}
            disabled={operator !== 1}/>
          <Button display={'-'}onClick={() => this.pickOperation(false)}
            disabled={operator !== 1}/>
          <Button display={'='}onClick={() => this.execOperation()}
            disabled={operator === 1}/>
          <Button display={'C'}onClick={() => this.clear()} />
        </div>
      </div>
    );
  }
}

export default Calculator;
