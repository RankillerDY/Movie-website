import React, { Component } from 'react'
import { Films } from './slider/Film_list.js';
import PresenComp from './PresenComp.js'

export default class MainCompo extends Component {
    constructor() {
        super();
        this.state = {
            Movies: Films
        }
    }

    render() {
        return (

            <PresenComp Props={this.state.Movies} />
        )
    }
}
