import { Product } from "../business/Products";

abstract class SortStrategy {
  abstract sort(products: Product[]): Product[];
}

export class SortByName extends SortStrategy {
  sort(products: Product[]): Product[] {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
  }
}
export class SortByPrice extends SortStrategy {
  sort(products: Product[]): Product[] {
    return [...products].sort((a, b) => a.priceCents - b.priceCents);
  }
}

export class SortByStars extends SortStrategy {
  sort(products: Product[]): Product[] {
    return [...products].sort(
      (a, b) => a.rating.getStars() - b.rating.getStars()
    );
  }
}

export class SortByBoughtCount extends SortStrategy {
  sort(products: Product[]): Product[] {
    return [...products].sort(
      (a, b) => a.rating.getCount() - b.rating.getCount()
    );
  }
}

export class Sorter {
  #sortStrategy: SortStrategy;

  constructor(sortStrategy: SortStrategy) {
    this.#sortStrategy = sortStrategy;
  }

  sort(products: Product[], isDescending: boolean) {
    const sorted = this.#sortStrategy.sort(products);
    if (isDescending) sorted.reverse();
    return sorted;
  }
}
