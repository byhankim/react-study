// import Store from './Store'
import { useSelector, useDispatch } from 'react-redux'
// useDispatch: gives ability to dispatch an action
import { increment, decrement, signIn } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>{isLogged ? '로그아웃' : '로그인'}</button>
      {isLogged ? <h3>Value Info I shouldn't see</h3> : ''}
      {/* <Store />  */}
    </div>
  );
}

export default App;
