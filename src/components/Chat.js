import React, { useState } from 'react'

export default function Chat() {

    const [messages, setMessage] = useState([
        {
            user: 'DoomSlayer',
            picture: 'image/User-img/Picture-1.svg',
            text: 'Mauris magna nunc, lobortis a faucibus vel, imperdiet ac orci. Quisque id orci non lacus faucibus elementum vel eu ipsum. Mauris fringilla aliquet leo id pulvinar. Pellentesque in facilisis mauris. Cras in metus non orci aliquet vestibulum. Aliquam ullamcorper semper velit eget dapibus. Aliquam eu efficitur risus. Phasellus tincidunt felis nec finibus interdum. Proin eleifend magna purus, ac vulputate massa ultrices sed.'
          },
          {
            user: 'Nomad',
            picture: 'image/User-img/Picture-2.svg',
            text: 'Nulla dapibus velit vel neque fermentum, ac vehicula eros bibendum. Fusce vel orci eros. Ut elementum ornare magna. Etiam venenatis elementum nibh non feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras blandit vitae felis vitae fermentum. Donec tempor, libero id congue sollicitudin, metus dui elementum orci, non finibus mauris nisl et velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi purus ipsum, rhoncus facilisis est ut, pretium efficitur sapien. Curabitur finibus urna ac metus dignissim, vitae vestibulum dui pulvinar. Vestibulum luctus lectus eget vestibulum interdum. Ut id odio lectus.'
          },
          {
            user: 'Dante',
            picture: 'image/User-img/Picture-3.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu dui tincidunt, vulputate ipsum ac.'
          },
          {
            user: 'TheWildEight',
            picture: 'image/User-img/Picture-3.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tincidunt libero, vulputate cursus mi. Suspendisse at finibus sapien. Mauris dictum eros eu nibh tristique feugiat. Ut enim orci, dapibus.'
          },
    ]);


    const [newMessage, setNewMessage] = useState('')

    const sendMessage = () => {
        setMessage([...messages, {
            user: 'Super cool person from Fntastic',
            picture: 'image/Profile/Profile-Picture.svg',
            text: newMessage
          }]);
        setNewMessage('')
      };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }

  };


  return (
    <div>
        <div className="chat-section">
            <div className="chat-title">
                <div className="title">
                    <img src="image/Main-Title-Text.svg" alt=""/>
                    <p>channel-1</p>
                </div>
                <div className="actions">
                    <img src="image/Title/Title-Bar-Actions-1.svg" alt=""/>
                    <img src="image/Title/Title-Bar-Actions-2.svg" alt=""/>
                    <img src="image/Title/Title-Bar-Actions-3.svg" alt=""/>
                    <img src="image/Title/Title-Bar-Actions-4.svg" alt=""/>
                    <input type="text" placeholder="Search"/>
                    <img src="image/Title/Title-Bar-Actions-5.svg" alt=""/>
                    <img src="image/Title/Title-Bar-Actions-6.svg" alt=""/>
                </div>
            </div>
            <div>
                <div className="chat-container">
                    <div className="chat-text">
                        <div className="header">
                            <div className="chat-icon">
                                <img src="image/Text-channel.svg" fill="#fff" alt=""/>
                            </div>
                            <h2>#Channel-1 </h2>
                            <p className="fancy date"><span>8 March 2023</span></p>
                        </div>
                        <div className="chat">
                        <div>
                                {messages.map((message, index) => (
                                <div key={index} className="message-content">
                                    <div className="profile-picture">
                                    <img src={message.picture} alt="User-img" />
                                    <span className="status-text"></span>
                                    </div>
                                    <div className="message-text">
                                    <h6>{message.user}</h6>
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="message-input">
                                <input type="text" placeholder="Write message to #channel-1 channel." value={newMessage} onChange={(event) => setNewMessage(event.target.value)} onKeyDown={handleKeyDown}/>
                            </div>
                        </div>
                    </div>
                    <div className="user-list">
                        <h5>Online - 4</h5>
                        <div className="online-user">
                            <img src="image/User-img/Picture-1.svg" alt=""/>
                            <span className="status-users"></span>
                            <h5>DoomSlayer</h5>
                            
                        </div>
                        <div className="online-user">
                            <img src="image/User-img/Picture-2.svg" alt=""/>
                            <span className="status-users"></span>
                            <h5>Nomad</h5>
                        </div>
                        <div className="online-user">
                            <img src="image/User-img/Picture-3.svg" alt=""/>
                            <span className="status-users"></span>
                            <h5>Dante</h5>
                        </div>
                        <div className="online-user">
                            <img src="image/User-img/Picture-1.svg" alt=""/>
                            <span className="status-users"></span>
                            <h5>Vi</h5>
                        </div>
                        <h5>Offline - 3</h5>
                        <div className="offline-user">
                            <img src="image/User-img/Picture-2.svg" alt=""/>
                            <h5>Niko Belick</h5>
                        </div>
                        <div className="offline-user">
                            <img src="image/User-img/Picture-3.svg" alt=""/>
                            <h5>TheWildEight</h5>
                        </div>
                        <div className="offline-user">
                            <img src="image/User-img/Picture-1.svg" alt=""/>
                            <h5>Ezio Auditore</h5>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
