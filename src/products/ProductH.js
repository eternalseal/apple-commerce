import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductH(props) {

  const percentOff = (
    <div
      className="badge bg-dim py-2 text-white position-absolute"
      style={{ top: "0.5rem", left: "0.5rem" }}
    >
      Rating - {props?.product?.rating}
    </div>
  );

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-4">
            <Link to={`/products/${props?.product?.id}`}>
              {percentOff}
              <img
                className="rounded-start bg-dark cover w-100 h-100"
                alt=""
                src={props?.product?.image}
              />
            </Link>
          </div>
          <div className="col-8">
            <div className="card-body h-100">
              <div className="d-flex flex-column h-100">
                <h5 className="card-title text-dark text-truncate mb-1">
                  {props?.product?.name}
                </h5>
                <span className="card-text text-muted mb-2 flex-shrink-0">
                  ${props?.product?.price} USD
                </span>
                <div className="mt-auto d-flex">
                  <button className="btn btn-outline-dark ms-auto">
                    <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductH;
