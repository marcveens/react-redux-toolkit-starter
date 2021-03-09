import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/RootState';
import { counterSlice } from '../state/counterSlice';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';
import '../styles/counter.scss';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const increase = () => dispatch(counterSlice.actions.increase());
  const decrease = () => dispatch(counterSlice.actions.decrease());

  return (
    <div className="counter">
      <div className="counter__icon counter__icon--upvote"  onClick={increase}>
        <ArrowDown />
      </div>
      {count}
      <div className="counter__icon counter__icon--downvote"  onClick={decrease}>
        <ArrowDown />
      </div>
    </div>
  );
};
