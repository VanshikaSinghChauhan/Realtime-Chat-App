import React from 'react'
import './userInfo.css'
import avatar from '../../../images/avatar.png'
import more from '../../../images/more.png'
import video from '../../../images/video.png'
import edit from '../../../images/edit.png'
import {useUserStore} from "../../../lib/userStore";

const UserInfo = () => {

  const { currentUser } = useUserStore();
  return (
    <div className='userInfo'>
        <div className="user">
            <img src={currentUser.avatar ||avatar} alt="avatar" />
            <h2>{currentUser.username}</h2>
        </div>
        <div className="icons">
         <img src={more} alt="more" />
         <img src={video} alt="video" />
         <img src={edit} alt="edit" />
        </div>
    </div>
  )
}

export default UserInfo