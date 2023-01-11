import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    // console.log(textRef)
    init(textRef.current,
    { showCursor: true, 
      backDelay: 1300,
      backSpeed:60,
    strings: ['Developer', 'Freelancer', 'Designer' ] })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/img/img.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mohd Shuaib</h1>
          <h3>Frontend <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/img/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro