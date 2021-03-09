import { KanyeRestState } from '../KanyeRest/state/KanyeRestState';
import { CounterState } from '../Counter/state/CounterState';

export type RootState = {
  kanyeRest: KanyeRestState;
  counter: CounterState;
};
