import React from 'react'
import'./Msg.css';

const Msg = () => {
  return (
    <div className='msg'>
        <div className='m1'>
        <h1>-DO YOU HAVE ANY  QUESTIONS</h1>
        <form>
        <label>Your Name :</label><br/>
        <input ></input><br/><br/><br/>
        <label>Your Email :</label><br/>
                        <input   ></input><br/><br/><br/>
                        <label>Subject :</label><br/>
                        <input></input><br/><br/><br/>
                        <label>Your Message(Opt) :</label><br/><br/>
                        <input  ></input><br/><br/><br/>
                        <button>Send Message</button>
        </form>
        </div>
        <div className='m2'>
            <img src='/images/img2.png'></img>
        </div>

    </div>
  )
}

export default Msg