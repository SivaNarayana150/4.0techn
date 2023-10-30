// Write your code here.
import './index.css'

const technologyCards = props => {
  const {CardDetails} = props
  const {title, description, className, imgUrl} = CardDetails

  return (
    <li>
      <div className={className}>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt="avtar" />
      </div>
    </li>
  )
}
export default technologyCards
