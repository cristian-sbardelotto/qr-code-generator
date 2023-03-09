import React, { useState } from 'react';

import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import './App.css';

const App = () => {
  const [ input, setInput ] = useState('');
  const [ download, setDownload ] = useState('');

  const handleDownload = (linkUrl) => {
    QRCodeLink.toDataURL(linkUrl, {
      width: 600,
      margin: 3
    }, (error, url) => {
      setDownload(url);
    })
  };


  const handleInputValue = (e) => {
    const inputValue = e.target.value;

    setInput(inputValue);
    handleDownload(inputValue);
  };


  return (
    <main>
      <h1>QR Code Generator</h1>

      <p>Digite seu link e faça o download do QR Code!</p>

      { input && <QRCode value={input} size={150} /> }
  
      <input type='text' onChange={(e) => handleInputValue(e)} />

      <a href={download} download={'qrcode.png'}>Baixar QR Code</a>
    </main>
  );
};

export default App;
