import './card.css';


export const Card = ({title, description, image, url, repo}) => {
  return (
    
        <div className='card-container'>
            <div className='container-img'>
                <img src={`./${image}.jpg`} alt={title} />
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            <p>{description}</p>
            <div className='icons-card'>
              {repo&&(<a href={repo} target="_blank" rel="noopener noreferrer"><img className='img-github' src='/icons8-github-64.png' alt='icono-git-hub'/></a>)} 
              <a href={url} target="_blank" rel="noopener noreferrer"><img className='img-web' src='/icons8-www-60.png' alt='icono-git-hub'/></a> 
            </div>
       
        </div>

  )
}
