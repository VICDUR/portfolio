import { Card } from '../card/Card'
import { dataPortfolio } from '../data/data'

import './cards.css'

export const Cards = () => {
  return (
    <div className='cards'>
       {
        dataPortfolio.map(({id, title, description, image, url, repo})=> (
            <div key={id} className='cards-container'>
            <Card 
                title={title} 
                description={description}
                image={image}
                url={url}
                repo={repo}
                />
            </div>
        ))
        }
    </div>
  )
}
