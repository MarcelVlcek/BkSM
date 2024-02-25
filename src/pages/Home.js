import './Home.css'
import ImageSlider from '../components/ImageSlider';
import { Link } from 'react-router-dom';
import tlacivo from '../download/tlacivo.pdf'
import { FaCloudDownloadAlt } from "react-icons/fa";
import crest from '../images/erbmedzev.png'

const Home = () => {
  return (
    <div className=''>
      <ImageSlider />
      <section className='about'>
        <h1>Vitajte na stránke bežeckého klubu Spartak Medzev</h1>
        <p>Klub bol založený v roku 2010. Pri zrode stáli <i className='gotFathers'>Ján Imling, Peter Paľa, Jozef Jaššo, Marián Vlček, Štefan Benedik a Ján Strömpl</i> .</p>
        
        <p>Naším cieľom je rozvíjať a propagovať vytrvalostný beh a iné vytrvalostné športy ako zdravý spôsob života.
           V neposlednom rade sa snažíme robiť dobré meno v bežeckom športe, vzorne reprezentovať klub a naše mesto Medzev.</p>

           <p>Členovia klubu organizujú každoročne Hámornícky polmaratón v rámci osláv dní mesta Medzev. <Link to="/src/pages/HalfMarathon.js" >(Viac tu)</Link></p>
      </section>

      <section className='support'>
        <article>
          <h2>PODPOR KLUB</h2>
          <p>Môžete nám pomôcť 2% z vaších daní.</p>
          <p>Budeme veľmi radi ak si vyberiete práve náš bežecký klub.</p>
          <p>Za podporu Vám všetkym zo <b> ♥ ĎAKUJEME</b>.</p>
        </article>
          <div className='download-btn'>
            <a href={tlacivo} download={tlacivo}><FaCloudDownloadAlt /> <b>Tlačivo 2%</b></a>
          </div> 
      </section>

      <section className='sponsor'>
       
        <a href="https://www.medzev.sk/" target='blank'>
          <h3>
            Mesto Medzev
          </h3>
           <img src={crest} alt="" />
        </a>

      </section>

    </div>
  )
}

export default Home;
