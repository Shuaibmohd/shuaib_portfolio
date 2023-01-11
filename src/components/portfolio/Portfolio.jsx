import './portfolio.scss';
import ProductList from '../portfolioList/PortfolioList'
import { useEffect, useState } from 'react';
import {
  featurePortfolio,
  webApp,
  jsPortfolio,
  designPortfolio,
  reactProjects} from '../../data'

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  
  const list = [
    {
        id:"featured",
        title: "Featured"
    },
    {
        id:"web",
        title: "Web App"
    },
    {
        id:"design",
        title: "Design"
    },
    {
        id:"react",
        title: "React Projects"
    },
    {
        id:"jsProject",
        title: "JS Projects"
    },
  ]

  useEffect(()=> {
    switch(selected){
      case "featured":
        setData(featurePortfolio);
        break;
      case "web":
        setData(webApp);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "react":
        setData(reactProjects);
        break;
      case "jsProject":
        setData(jsPortfolio);
        break;
      default:
        setData(featurePortfolio);
    }
  },[selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <ProductList  title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map((portfolioData) => (
        <div className="item">
          <img src={portfolioData.img} alt={portfolioData.title} />
          <h3>{portfolioData.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio