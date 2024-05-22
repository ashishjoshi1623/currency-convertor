import React from 'react'
import './inputbox.css'

function InputBox() {
    return (
        <>
            <section className='Input-box'>
                <div className='container'>
                    <div className='curr-value-div'>
                        <label htmlFor="">From</label>
                        <label htmlFor="">Currency Type</label>
                    </div>
                    <div className='curr-code-div'>
                        
                        <input className='p-2 rounded my-2' type="number" />
                        <input className='p-2 rounded my-2' type="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default InputBox