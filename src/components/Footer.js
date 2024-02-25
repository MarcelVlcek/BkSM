import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='center-content'>
            <div className='copyright'>©2024 | Všetky práva vyhradené</div>
            <div className='bottom-nav'>
                <ul>
                    <li><Link to="/" >Domov</Link></li>
                    <li><Link to="/src/pages/News.js" >Aktuality</Link></li>
                    <li><Link to="/src/pages/HalfMarathon.js" >Hámornícky polmaratón</Link></li>
                    <li><Link to="/src/pages/Members.js" >Členovia klubu</Link></li>
                    <li><Link to="/src/pages/Contact.js">Kontakt</Link></li>
                </ul>
            </div>
            <div className='bottom-contact'>
            <a href="mailto:bkspartakmedzev.sk" title="Email">bkspartakmedzev@gmail.com</a>
            <a href="tel:0915444949" title="Telefónne číslo">+421 915 444 949</a>
            </div>
        </div>
    </div>
  )
}

export default Footer