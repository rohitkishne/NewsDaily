// import React, { Component } from 'react' // component is write here only in the case of class based component
import React from 'react'
import loading from './loading.gif'
// export class Spinner extends Component {
const Spinner =()=>{
    // render() {
        return (
            <div className='text-center'>
                <img className='my-3' src={loading} alt="loading" />
            </div>
        )
    // }
}

export default Spinner
