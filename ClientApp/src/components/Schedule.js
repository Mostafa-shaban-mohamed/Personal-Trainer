import React, { Component } from 'react';

export class Schedule extends Component {
    static displayName = Schedule.name;

    render() {
        return (
            <div className='row'>
                <h1>Schedule</h1>
                
                    <a class="sched-card" href="#">
                        <h3>Nasr City, Women</h3>
                        <p class="small">From 9 am to 6 pm</p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                    </a>
                    <a class="sched-card" href="#">
                        <h3>Nasr City, Men</h3>
                        <p class="small">From 6 am to 9 am</p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                    </a>
                    <a class="sched-card" href="#">
                        <h3>Giza, Women</h3>
                        <p class="small">From 9 am to 6 pm</p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                    </a>
                    <a class="sched-card" href="#">
                        <h3>Giza, Men</h3>
                        <p class="small">From 6 am to 9 am</p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                    </a>
            </div>
        );
    }
}