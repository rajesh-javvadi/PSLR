import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            // <div id='AboutUs' className='d-inline-block mt-4'>
            //     <div className='fs-4 fw-semibold px-3 pt-2 pb-0 text-center text-decoration-underline'>About Us</div>
            //     <div className=' p-3 pb-1 text-wrap lh-lg'>PSLR is all about posting your technical problems encountered while learning, and what is the solution for the problem and note on your learning with references. So you can refer it later. In PSLR you post your problem with solution and references, it makes easy to recollect the things you learnt so far, in the form of cards</div>
            //     <div className='ps-3 p'>&copy; 2025 PSLR</div>
            // </div>
            <div className="card p-2 m-2">
                <div className="card-body">
                    <h5 className="card-title text-center" id=''>About Us</h5>
                    <p className="card-text lh-lg">PSLR is all about posting your technical problems encountered while learning, and what is the solution for the problem and note on your learning with references. So you can refer it later. In PSLR you post your problem with solution and references, it makes easy to recollect the things you learnt so far, in the form of cards</p>
                    <div className='ps-3 p'>&copy; 2025 PSLR</div>
                </div>
            </div>
        )
    }
}
