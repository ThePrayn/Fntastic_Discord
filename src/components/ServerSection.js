import React from 'react'

export default function ServerSection() {
  return (
        
            <div className="server-info">
                <header>
                    <p>FNTASTIC TEAM</p>
                    <img src="image/down-arrow.svg" alt=""/>
                </header>
                <div className="channel-container">
                    <div>
                        <button type="button" className="server-category">
                            <div>
                                <img className="right-arrow" src="image/category-right-arrow.svg" alt=""/>
                                <p>Text channels</p>
                            </div>
                            <div className="add-new-category">
                                <img src="image/Category-plus.svg" alt=""/>
                            </div>
                        </button>
                        <div className="channel-list" id="Text-channel">
                            <ul>
                                <li>
                                    <div className="text-channel">
                                        <div className="header">
                                            <img src="image/Text-channel.svg" alt=""/>
                                            <p>channel-1</p>
                                        </div>
                                        <div className="channel-actions">
                                            <img src="image/Add-friend.svg" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-channel">
                                        <div className="header">
                                            <img src="image/Text-channel.svg" alt=""/>
                                            <p>channel-2</p>
                                        </div>
                                        <div className="channel-actions">
                                            <img src="image/Add-friend.svg" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-channel">
                                        <div className="header">
                                            <img src="image/Text-channel.svg" alt=""/>
                                            <p>channel-3</p>
                                        </div>
                                        <div className="channel-actions">
                                            <img src="image/Add-friend.svg" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-channel">
                                        <div className="header">
                                            <img src="image/Text-channel.svg" alt=""/>
                                            <p>channel-4</p>
                                        </div>
                                        <div className="channel-actions">
                                            <img src="image/Add-friend.svg" alt=""/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="server-category">
                            <div>
                                <img className="right-arrow" src="image/category-right-arrow.svg" alt=""/>
                                <p>Voice channels</p>
                            </div>
                            <div className="add-new-category">
                                <img src="image/Category-plus.svg" alt=""/>
                            </div>
                        </button>
                        <div className="channel-list" id="voice-channel">
                            <ul>
                                <li>
                                    <div className="voice-channel" id="voice-channel-1">
                                        <div className="header">
                                            <img src="image/Voice-channel.svg" alt=""/>
                                            <p>PlayGame</p>
                                        </div>
                                        <div className="channel-actions">
                                            <img src="image/Add-friend.svg" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="voice-channel" id="voice-channel-2">
                                        <div className="header">
                                            <img src="image/Voice-channel.svg" alt=""/>
                                            <p>Streams</p>
                                        </div>
                                        <div className="channel-actions">
                                            <img src="image/Add-friend.svg" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="voice-channel" id="voice-channel-3">
                                        <div className="header">
                                            <img src="image/Voice-channel.svg" alt=""/>
                                            <p>Chill</p>
                                        </div>
                                        <div className="channel-actions">
                                            <img src="image/Add-friend.svg" alt=""/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
    
  )
}
