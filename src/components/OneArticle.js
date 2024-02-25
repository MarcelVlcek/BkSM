import './OneArticle.css'
import {useState} from 'react'


const OneArticle = (props) => {
    const [show, setShow] = useState(false)

    return (
    <>
        <section className='one-article'>
            <img src={props.image} alt=''></img>
            <h2>{props.title}</h2>
            <button onClick={ () => setShow(!show) }>čítaj viac</button>
            { show && <p>{props.content}</p>}
        </section>
        
    </>
  )
}

export default OneArticle