import "./ProductFilters.css";
import { useProducts } from "../../contexts/productContext";

const ProductFilters = () => {
  const {
    productState,
    productDispatch,
    filterTypes,
    toggleFilter,
    showFilter,
  } = useProducts();

  const {
    BRAND,
    CATEGORY,
    SORT_BY,
    IN_STOCK,
    FAST_DELIVERY,
    RATING,
    PRICE_RANGE,
    CLEAR_FILTERS,
  } = filterTypes;

  return (
    <aside className={`product-sidebar ${showFilter ? "show-filter" : null}`}>
      <div className="title">
        <div className="heading-3">Filters</div>

        <div className="clear-wrapper">
          <a
            className="clear-filter"
            onClick={() =>
              productDispatch({
                type: CLEAR_FILTERS,
                payload: { data: productState.products },
              })
            }
          >
            Clear
          </a>
          <button
            className="btn btn-floating btn-secondary"
            onClick={toggleFilter}
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>

      <div className="filters">
        <div className="filter-wrapper">
          <div className="filter-title">
            Price: &#8377;{productState.priceRange}
          </div>
          <div className="filter-value">
            <div className="filter-price">
              <span>&#8377; 0</span>
              <span> &#8377; 1500 </span>
            </div>
            <input
              type="range"
              list="steplist"
              min="0"
              max="1500"
              step="300"
              value={productState.priceRange}
              onChange={(e) =>
                productDispatch({
                  type: PRICE_RANGE,
                  payload: { value: e.target.value },
                })
              }
            />
            <datalist id="steplist">
              <option>0</option>
              <option>300</option>
              <option>600</option>
              <option>900</option>
              <option>1200</option>
              <option>1500</option>
            </datalist>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="filter-title">Popular Brands</div>
          <div className="filter-value filter-category">
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("SAMSUNG")}
                value="SAMSUNG"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              SAMSUNG
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("APPLE")}
                value="APPLE"  
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              Apple
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("AMAZON")}
                value="AMAZON"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              AMAZON
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("NIKON")}
                value="NIKON"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              NIKON
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("SONY")}
                value="SONY"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              SONY
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("HUAWEI")}
                value="HUAWEI"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              HUAWEI
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("CANON")}
                value="CANON"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              CANON
            </label>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="filter-title">Category</div>
          <div className="filter-value filter-category">
  <label>
    <input
      type="checkbox"
      value="Cameras"
      checked={productState.category.includes("Cameras")}
      onChange={(e) =>
        productDispatch({
          type: CATEGORY,
          payload: { value: e.target.value },
        })
      }
    />{" "}
    Cameras
  </label>
  <label>
    <input
      type="checkbox"
      value="Laptops & PCs"
      checked={productState.category.includes("Laptops & PCs")}
      onChange={(e) =>
        productDispatch({
          type: CATEGORY,
          payload: { value: e.target.value },
        })
      }
    />{" "}
    Laptops & PCs
  </label>
  <label>
    <input
      type="checkbox"
      value="Smart Devices"
      checked={productState.category.includes("Smart Devices")}
      onChange={(e) =>
        productDispatch({
          type: CATEGORY,
          payload: { value: e.target.value },
        })
      }
    />{" "}
    Smart Devices
  </label>
</div>

        </div>

        <div className="filter-wrapper">
          <div className="filter-title">Rating</div>
          <div className="filter-value filter-rating">
            <label>
              <input
                type="radio"
                name="rating"
                checked={productState.rating === 4}
                onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 4 } })
                }
              />{" "}
              4 <i className="fa-solid fa-star"></i> & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                checked={productState.rating === 3}
                onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 3 } })
                }
              />{" "}
              3 <i className="fa-solid fa-star"></i> & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                checked={productState.rating === 2}
                onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 2 } })
                }
              />{" "}
              2 <i className="fa-solid fa-star"></i> & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                checked={productState.rating === 1}
                onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 1 } })
                }
              />{" "}
              1 <i className="fa-solid fa-star"></i> & above
            </label>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="filter-title">Sort By</div>
          <div className="filter-value filter-sort">
            <label>
              <input
                type="radio"
                name="sort"
                checked={productState.sortBy === "HIGH_TO_LOW"}
                onChange={() =>
                  productDispatch({
                    type: SORT_BY,
                    payload: { value: "HIGH_TO_LOW" },
                  })
                }
              />{" "}
              Price - High to Low
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                checked={productState.sortBy === "LOW_TO_HIGH"}
                onChange={() =>
                  productDispatch({
                    type: SORT_BY,
                    payload: { value: "LOW_TO_HIGH" },
                  })
                }
              />{" "}
              Price - Low to High
            </label>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="filter-title">Others</div>
          <div className="filter-value filter-category">
            <label>
              <input
                type="checkbox"
                checked={productState.inStock}
                onChange={(e) =>
                  productDispatch({
                    type: IN_STOCK,
                    payload: { checked: e.target.checked },
                  })
                }
              />{" "}
              In Stock
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.fastDelivery}
                onChange={(e) =>
                  productDispatch({
                    type: FAST_DELIVERY,
                    payload: { checked: e.target.checked },
                  })
                }
              />{" "}
              Fast Delivery
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export { ProductFilters };
