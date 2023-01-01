import React, { Component } from 'react';
import Timer from './Timer';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="row">
        <h1>Personal Trainer</h1>
        <p className='para'>Personal Trainer for normal working man or woman. It is suitable for everyone. It opens 24/7.</p>
        <div className="CardGroup">
          <div className='CounterCard'>
            <h4><Timer max={1200} speed={1} /></h4>
            <hr />
            <p className="boldText">Gym Members</p>
          </div>
          <div className='CounterCard'>
            <h4><Timer max={100} speed={10}/></h4>
            <hr />
            <p className="boldText">Gym Equipments</p>
          </div>
        </div>
      </div>
    );
  }
}
