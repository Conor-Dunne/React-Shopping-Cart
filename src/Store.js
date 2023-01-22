import { Link } from "react-router-dom";
import { useParams } from "react-router";

export function Store({ products }) {
  return (
    <div className="grid">
      {products.map((item) => (
        <Link to={`/product/${item.id}`}>
          <article key={item.id}>
            <img
              src={item.thumbnail}
              alt="product"
              style={{
                maxWidth: "100%",
                maxHeight: "120px",
              }}
            ></img>
            <p>{item.title}</p>
            <h1
              style={{
                fontWeight: "800",
              }}
            >
              ${item.price}
            </h1>
          </article>
        </Link>
      ))}
    </div>
  );
}

export function ProductPage({ products }) {
  let { id } = useParams();
  console.log("ni", products);
  const product = products.find((obj) => obj.id === Number(id));
  console.log("yo", product);

  return (
    <div>
      <h1>{product.title}</h1>
      <h1>{id}</h1>

      {product.images.map((ref) => (
        <img
          src={ref}
          alt="product"
          style={{
            maxWidth: "100%",
            maxHeight: "120px",
          }}
        ></img>
      ))}
    </div>
  );
}
