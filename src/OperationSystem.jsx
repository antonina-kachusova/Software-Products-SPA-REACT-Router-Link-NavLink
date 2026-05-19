import { Link } from 'react-router-dom'

function OperationSystem() {

  return (
    <>
    <section className="page-content">
     <h1>Operating Systems</h1>
      <p>Learn more about desktop and mobile operating systems.</p>
      <Link to="/product">Back</Link>
    </section>
    </>
  )
}

export default OperationSystem
