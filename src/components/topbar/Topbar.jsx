import './topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';


const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')} id='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>mshuaib</a>
          <div className="itemContainer">
            <PersonIcon className='icon' />
            <span>+91 780 082 2855</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className='icon' />
            <span>sheebukhan62@gmail.com</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </div>
        </div>
      </div>
    </div>
  )

}

export default Topbar