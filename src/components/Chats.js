import React from 'react';
import Chat from '../components/Chat';
import '../styles/Chats.css';

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Tsoy"
        message="Dobroe Utra ⛅"
        timestamp="2 minutes ago"
        profilePic="https://russianlife.com/sites/default/cache/file/CAE71C57-8C47-4607-A0D55EE6B6DA6628_fullpage.jpg"
      />
      <Chat
        name="Matt"
        message="Hey there 💟 "
        timestamp="7 minutes ago"
        profilePic="https://i.pinimg.com/originals/27/b4/1b/27b41bf1806566af972852194b01bac5.jpg"
      />
      <Chat
        name="Donald"
        message="Dont vote for me please 🤨  "
        timestamp="15 minutes ago"
        profilePic="https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2020/09/28/5f724a21c9cd6.r_1601410202161.319-821-2775-2039.jpeg"
      />
      <Chat
        name="Yuri"
        message="Hi, i went to space 🚀 "
        timestamp="18 minutes ago"
        profilePic="https://recuerdosdepandora.com/wp-content/uploads/2011/04/yuri-gagarin.jpg"
      />
    </div>
  );
}

export default Chats;
