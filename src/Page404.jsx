import { Link } from 'react-router-dom'

function Page404() {

  return (
    <>
      <section className="page-content not-found-page">
        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not exist or has been moved.
        </p>

        <Link className="back-home-link" to="/">
          Go back home
        </Link>
      </section>
    </>
  )
}

export default Page404
