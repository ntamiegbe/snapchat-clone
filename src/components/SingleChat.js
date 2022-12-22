import { StopRounded } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import ReactTimeago from 'react-timeago'
import { selectImage } from '../features/appSlice'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'

const SingleChat = ({ id, username, timestamp, read, imageUrl, profilePic }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openPost = () => {
    if (!read) {
      dispatch(selectImage(imageUrl))
      db.collection("posts").doc(id).set({
        read: true
      },
        {
          merge: true
        }
      )
      navigate('/chats/view')
    }
  }

  return (
    <div className='flex items-center justify-between p-2 cursor-pointer hover:opacity-75' onClick={openPost}>
      <Avatar src={profilePic} />
      <div className="flex-1 px-4">
        <h4 className='text-[13px] font-semibold'>{username}</h4>
        <p className='text-[10px]'>{!read ? "Tap to load" : "Opened"} - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>
      </div>
      {!read && <StopRounded className='text-red' />}
    </div>
  )
}

export default SingleChat