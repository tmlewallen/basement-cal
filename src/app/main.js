import React from 'react';
import ReactDOM from 'react-dom';
import Cal from './cal/cal';

class Main extends React.Component {
  render(){
    return (<Cal/>);
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Main/>, app);