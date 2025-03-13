import { Product } from "../data/Products";
import "../styles/Sorter.css";
import {
  SortByName,
  SortByPrice,
  SortByStars,
  SortByBoughtCount,
  Sorter,
} from "../utils/SortStrategy";

interface Props {
  sorter: Sorter;
  setSorter: React.Dispatch<React.SetStateAction<Sorter>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SorterMenu = (props: Props) => {
  const { sorter, setSorter, products, setProducts } = props;

  const sort = () => {
    setProducts(sorter.sort(products));
  };

  return (
    <div className="sort-menu">
      <div className="sort-by">Sort By:</div>
      <select>
        <option
          onClick={() => {
            setSorter(new Sorter(new SortByName()));
            console.log(sorter);
          }}
        >
          Product Name
        </option>
        <option
          onClick={() => {
            setSorter(new Sorter(new SortByPrice()));
            console.log(sorter);
          }}
        >
          Product Price
        </option>
        <option
          onClick={() => {
            setSorter(new Sorter(new SortByStars()));
            console.log(sorter);
          }}
        >
          Rating Stars
        </option>
        <option
          onClick={() => {
            setSorter(new Sorter(new SortByBoughtCount()));
            console.log(sorter);
          }}
        >
          Bought Count
        </option>
      </select>
      <div className="toggle">
        <input
          type="checkbox"
          onClick={() => {
            sorter.toggleDescending();
          }}
        />
        <div className="descending">Descending</div>
      </div>
      <button onClick={sort}>Sort</button>
    </div>
  );
};

export default SorterMenu;
