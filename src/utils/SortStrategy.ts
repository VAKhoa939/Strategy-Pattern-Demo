import { Product } from "../data/Products";

class SortStrategy {
  sort(products: Product[]): Product[] {
    return products;
  }
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
    return [...products].sort((a, b) => a.rating.stars - b.rating.stars);
  }
}

export class SortByBoughtCount extends SortStrategy {
  sort(products: Product[]): Product[] {
    return [...products].sort((a, b) => a.rating.count - b.rating.count);
  }
}

export class NoSort extends SortStrategy {}

export class Sorter {
  sortStrategy: SortStrategy;
  descending: boolean;

  constructor(sortStrategy: SortStrategy) {
    this.sortStrategy = sortStrategy;
    this.descending = false;
  }

  toggleDescending = () => {
    this.descending = !this.descending;
  };

  sort(products: Product[]) {
    const sorted = this.sortStrategy.sort(products);
    if (this.descending) sorted.reverse();
    return sorted;
  }
}
