import React, { Component, useEffect, useState } from 'react'
import PresenComp from './PresenComp.js'

export default function MainCompo() {
    const [APIData, setAPIData] = useState([])
    const baseURL = 'https://64953411b08e17c91791bb74.mockapi.io/Film_list'
    useEffect(() => {
        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status)
                } else {
                    return response.json()
                }
            })

            .then((data) => {
                setAPIData(data)
            })

            .catch((error) => {
                console.log(error.message)
            })
    }, [])
    return (
        <PresenComp Props={APIData} />
    )
}


// export default class MainCompo extends Component {

//     constructor() {
//         super();
//         this.state = {
//             Movies: Films
//         }
//     }

//     render() {
//         return (
//             <PresenComp Props={this.state.Movies} />
//         )
//     }
// }