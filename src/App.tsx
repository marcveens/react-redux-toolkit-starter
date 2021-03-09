import { Provider } from 'react-redux';
import { KanyeRest } from './KanyeRest/components/KanyeRest';
import { Counter } from './Counter/components/Counter';
import { store } from './store/store';
import './assets/styles/app.scss';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <KanyeRest />
        <Counter />
      </Provider>
    </div>
  );
}
