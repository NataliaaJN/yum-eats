import { ItemDetail } from './item-detail';
import { Length } from './step-length';

export type Step = {
  number: number;
  step: string;
  ingredients: ItemDetail[];
  equipment: ItemDetail[];
  length?: Length;
};
