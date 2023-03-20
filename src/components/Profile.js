import React from 'react'

export default function Profile() {
  return (
    <div>
        <div className="profile-card">
                <div className="profile-info">
                    <div className="profile-picture">
                        <img src="image/Profile/Profile-Picture.svg" alt=""/>
                        <span className="status"></span>
                    </div>
                    <div className="profile-text">
                        <p className="username">User</p>
                        <p className="userid">#0001</p>
                    </div>
                </div>
                <div className="voice-actions">
                    <img className="action" src="image/Profile/Profile-mute.svg" alt="mute"/>
                    <img className="action" src="image/Profile/Profile-deafen.svg" alt="deafen"/>
                    <img className="action" src="image/Profile/Profile-settings.svg" alt="settings"/>
                </div>
            </div>
    </div>
  )
}
