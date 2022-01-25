import { Link } from "react-router-dom"

const MissingPage = () => {
  return (
    <main className="missing-page">
      <div>
        <h1
          style={{color: '#555', textShadow: '1px 1px 4px #ccc'}}
        >404 not found</h1>
        <Link to="/">Go back to home page</Link>
      </div>
    </main>
  )
}

export default MissingPage