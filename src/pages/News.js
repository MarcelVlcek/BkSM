import "./News.css"
import OneArticle from "../components/OneArticle"
import dataNews from '../dataNews'

const Actuality = () => {
  return (<div className="news-wrapper">
      {
        dataNews.map((oneArticle) =>{
          return <OneArticle key={oneArticle.id} {...oneArticle} />
        })
      }    
    
    </div>
    
  )
}

export default Actuality