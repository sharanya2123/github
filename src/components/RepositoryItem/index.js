// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {RepositoryDetails} = props
  const {
    name,
    imageurl,
    starsCount,
    forksCount,
    issuesCount,
  } = RepositoryDetails

  return (
    <li className="repository-item">
      <img className="repository-image" src={imageurl} alt={name} />
      <h1 className="repository-name">{name}</h1>
      <div className="starts-container">
        <img
          className="stars-icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="stars-text">{starsCount} stars</p>
      </div>
      <div className="stars-container">
        <img
          className="stars-icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="stars-text">{forksCount} forks</p>
      </div>
      <div className="stars-container">
        <img
          className="stars-icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="stars-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
