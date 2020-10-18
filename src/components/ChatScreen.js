import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
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
      <p className="chatScreen__timestamp">YOU MATCHED WITH TSOY ON 17/10/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
