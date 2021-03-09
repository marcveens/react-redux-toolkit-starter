import { AsyncData } from '../../store/AsyncData';
import { KanyeRestQuote } from '../types/KanyeRestQuote';

export type KanyeRestState = {
  quote: AsyncData<KanyeRestQuote>;
};