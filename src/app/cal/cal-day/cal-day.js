import React from 'react';
require('./cal-day.css');

export default class CalDay extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="cal-day">
        <table>
          <tbody>
          <tr><td>1</td></tr>
          <tr><td>2</td></tr>
          <tr><td>3</td></tr>
          <tr><td>4</td></tr>
          </tbody>
      </table>
      </div>
    )
  }
}