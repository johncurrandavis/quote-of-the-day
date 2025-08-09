import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Quote() {
  const { theme } = useContext(ThemeContext);
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://api.quotable.io/random');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setQuote({ text: data.content, author: data.author });
    } catch (err) {
      console.error(err);
      setQuote({ text: 'Could not load quote.', author: '' });
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const styles = {
    background: theme === 'light' ? '#f4f4f4' : '#222',
    color: theme === 'light' ? '#222' : '#f4f4f4',
    padding: '2rem',
    textAlign: 'center',
    borderRadius: '10px',
    maxWidth: '500px',
    margin: 'auto'
  };

  return (
    <div style={styles}>
      {quote ? (
        <>
          <p style={{ fontSize: '1.5rem' }}>"{quote.text}"</p>
          <p>- {quote.author || 'Unknown'}</p>
          <button onClick={fetchQuote}>Next Quote</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

