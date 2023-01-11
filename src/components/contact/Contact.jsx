import { useState } from 'react';
import './contact.scss'

const Contact = () => {

  const [message, setMessage] = useState(false)

  const handleClick = (e) => {
    // e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/img/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder='email' />
          <textarea placeholder='Message'></textarea>
          <button type='send' onClick={()=>handleClick()}>Send</button>
          {message && <span>Thanks, I'll reply ASAP :</span> }
        </form>
      </div>
    </div>
  )
}

export default Contact 