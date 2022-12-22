import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetCameraImage, selectCameraImage } from '../features/cameraSlice'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { AttachFile, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';
import { storage, db } from '../firebase'
import firebase from 'firebase'
import { selectUser } from '../features/appSlice';

const Preview = () => {
  const cameraImage = useSelector(selectCameraImage)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    if (!cameraImage) {
      navigate('/')
    }
  }, [cameraImage, navigate])

  const closePreview = () => {
    dispatch(resetCameraImage())
  }

  const sendPost = () => {
    const id = uuidv4()
    const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage, 'data_url')

    uploadTask.on('state_changed', null, (error) => {
      console.log(error)
    }, () => {
      storage.ref('posts').child(id).getDownloadURL().then((url) => {
        db.collection('posts').add({
          imageUrl: url,
          username: user.username,
          profilePic: user.profilePic,
          read: false,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
      })
      navigate('/chats')
    })
  }

  return (
    <div className='relative rounded-lg border-[2px] border-white'>
      <CloseIcon onClick={closePreview} className="absolute top-0 m-4 text-white cursor-pointer font-bold" fontSize='large' />
      <div className="flex flex-col space-y-4 text-white absolute right-0 m-4 cursor-pointer">
        <TextFields />
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <Timer />
      </div>
      <img src={cameraImage} alt="" />
      <div className="absolute bottom-0 right-0 flex text-black space-x-3 bg-snapchat m-3 p-2 rounded-lg cursor-pointer" onClick={sendPost}>
        <h2 className=' font-bold'>Send</h2>
        <Send />
      </div>
    </div>
  )
}

export default Preview