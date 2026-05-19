import { Link } from 'react-router-dom';

function Product() {
  return (
    <section className="page-content">
      <h1>Products</h1>

      <p>
        Explore our software products and operating system solutions.
      </p>

      <div className="product-links">
        <Link className="product-card" to="/product/software">
          <h2>Software</h2>
          <p>Productivity, design, and development tools.</p>
        </Link>

        <Link className="product-card" to="/product/os">
          <h2>Operating Systems</h2>
          <p>Desktop and mobile operating system solutions.</p>
        </Link>
      </div>
    </section>
  );
}

export default Product;