import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput/TextInput';

function App() {
  const [story, setStory] = useState('');

  return (
    <>
      <div id="TextInput">
        <h1 style={{ color: '#f1bcff' }}>
          <b>NarrateMate</b>
        </h1>

        <h2>
          <b>Know Before You Narrate</b>
        </h2>

        <br />

        <p style={{ color: 'white' }}>
          Paste your text below to calculate your
        </p>

        <p style={{ color: 'white' }}>
          <b style={{ color: '#ffb3ba' }}>Character count, </b>
          <b style={{ color: '#ffdfba' }}>word count, </b>
          <b style={{ color: '#ffffba' }}>estimated narration time, </b>
          and{' '}
          <b style={{ color: '#baffc9' }}>price per word.</b>
        </p>

        <p style={{ color: 'white' }}>
          Plan your recordings, estimate project costs, and price your
          narration services with confidence.
        </p>

        <br />

        <TextInput
          value={story}
          onTextChange={setStory}
          placeholder="Paste your text here..."
        />
      </div>

      <div id="dataDisplay">
        <br></br>
        <legend><h2><b>Text Statistics</b></h2></legend>

        <p>
          <b style={{ color: '#ffb3ba' }} >Character Count:</b> {story.length}
        </p>

        <p>
          <b style={{ color: '#ffdfba' }} >Word Count:</b>{' '}
          {story.trim() === '' ? 0 : story.trim().split(/\s+/).length}
        </p>

        <p>
          <b style={{ color: '#ffffba' }} >Estimated Narration Time:</b> {' '}
          {story.trim() === ''
            ? 0
            : (story.trim().split(/\s+/).length / 150).toFixed(2)}{' '}
          minutes
        </p>

        <p>
          <b style={{ color: '#baffc9' }} >Price (10¢ per word):</b> $
          {story.trim() === ''
            ? 0
            : (story.trim().split(/\s+/).length * 0.10).toFixed(2)} 
            {/* 10 cents per word */}
        </p><br></br>
        <button style={{color: '#120802',backgroundColor: '#f1bcff',border: 'none',padding: '10px 20px',cursor: 'pointer',borderRadius: '8px',marginBottom: '24px',}} onClick={() => setStory('')}>Reset</button>
      </div>
    </>
  );
}

export default App;
