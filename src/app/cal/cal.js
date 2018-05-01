import React from 'react';
import CalDay from './cal-day/cal-day';
require('./cal.css');

export default class Cal extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let weeks = [];
    for (let i = 0; i < 5; i++){
      let week = [];
      for (let j = 0; j < 7; j++){
        week.push(<CalDay key={(i+1)*j}/>)
      }
      weeks.push(<div className="col-md-12" key={i}>{week}</div>);
    }
    return (
      <div className="container">
        <div className="row">
          {weeks}
        </div>
      </div>
    );
  }
}