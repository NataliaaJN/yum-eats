import { ProductMatch } from './product-match';

export type WinePairing = {
  pairedWines: string[];
  pairingText: string;
  productMatches: ProductMatch[];
};
