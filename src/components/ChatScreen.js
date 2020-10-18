import React, { useState } from 'react';
import '../styles/ChatScreen.css';

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: 'Tsoy',
      image:
        'https://russianlife.com/sites/default/cache/file/CAE71C57-8C47-4607-A0D55EE6B6DA6628_fullpage.jpg',
      message: 'Dobroe utra ⛅',
    },
    {
      name: 'Tsoy',
      image:
        'https://russianlife.com/sites/default/cache/file/CAE71C57-8C47-4607-A0D55EE6B6DA6628_fullpage.jpg',
      message: 'Kak dela?',
    },
    {
      message: 'No hablo ruso',
    },
  ]);

  return (
    <div className="chatScreen">
      <h2>Chatscreen</h2>
    </div>
  );
}

export default ChatScreen;
