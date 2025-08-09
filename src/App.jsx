import { useContext } from 'react';
import Quote from './Quote';
import { ThemeProvider, ThemeContext } from './ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Quote of the Day</h1>
        <ThemeToggle />
        <Quote />
      </div>
    </ThemeProvider>
  );
}
