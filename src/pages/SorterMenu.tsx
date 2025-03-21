import { useRef, useState } from "react";
import { Product } from "../business/Products";
import "../styles/Sorter.css";
import {
  SortByName,
  SortByPrice,
  SortByStars,
  SortByBoughtCount,
  Sorter,
} from "../utils/SortStrategy";

interface Props {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SorterEnum = [
  new Sorter(new SortByName()),
  new Sorter(new SortByPrice()),
  new Sorter(new SortByStars()),
  new Sorter(new SortByBoughtCount()),
];

const SorterMenu = (props: Props) => {
  const { products, setProducts } = props;
  const [sorter, setSorter] = useState<Sorter>(new Sorter(new SortByName()));
  const descendingRef = useRef<boolean>(false);

  const handleSelectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSorter(SorterEnum[Number.parseInt(event.target.value)]);
  };

  const toggleDescending = () => {
    descendingRef.current = !descendingRef.current;
  };

  const sort = () => {
    setProducts(sorter.sort(products, descendingRef.current));
  };

  return (
    <div className="sort-menu">
      <div className="sort-by">Sort By:</div>
      <select onChange={handleSelectSort}>
        <option value={0}>Product Name</option>
        <option value={1}>Product Price</option>
        <option value={2}>Rating Stars</option>
        <option value={3}>Bought Count</option>
      </select>
      <div className="toggle">
        <input type="checkbox" onClick={toggleDescending} />
        <div className="descending">Descending</div>
      </div>
      <button onClick={sort}>Sort</button>
    </div>
  );
};

export default SorterMenu;
