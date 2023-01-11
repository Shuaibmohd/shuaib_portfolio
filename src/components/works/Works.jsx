import { useState } from 'react';
import './works.scss'

const Works = () => {

  const [currentSilde, setCurrentSilde] = useState(0)

  const data = [
    {
      id: "1",
      icon: "./assets/img/mobile.png",
      title: "Web Design",
      desc:
        "Here are some of my web designing projects",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/img/globe.png",
      title: "React Application",
      desc:
        "Here are some of my react projects",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/img/writing.png",
      title: "JavaScript App",
      desc:
        "Here are some of my javascript projects",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (dir) => {
    dir === "left"
    ? setCurrentSilde(currentSilde > 0 ? currentSilde - 1 : data.length - 1) 
    : setCurrentSilde(currentSilde < data.length -1 ? currentSilde + 1 : 0 )

  }

  return (
    <div className='work' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSilde * 100}vw)`}}>
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>
                    {item.desc}
                  </p>
                  <span>{item.title}</span>

                </div>
              </div>
              <div className="right">
                <img src={item.img } alt="" />
              </div>
            </div>
          </div>
            ))
        }
      </div>
      <img src="assets/img/arrow.png" className='arrow left' alt="" onClick={()=> handleClick("left")} />
      <img src="assets/img/arrow.png" className='arrow right' alt="" onClick={()=> handleClick()} />
    </div>
  )
}

export default Works