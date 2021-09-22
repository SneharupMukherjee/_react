import Counter from "./Components/Counter";
import Toggle from "./Components/Toggle";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  margin: 32,
  gap: 32
}

function App() {
  return (
    <div style={ styles }>
      <Counter />
      <Toggle />
    </div>
  );
}

export default App;
