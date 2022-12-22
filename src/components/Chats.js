import { Home, Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase';
import SingleChat from './SingleChat';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/appSlice';

const Chats = () => {

    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, [])

    const navigate = useNavigate()

    const backToHome = () => {
        navigate('/')
    }

    return (
        <div className='relative w-[350px] h-[420px]'>
            <div className="flex justify-between items-center bg-white h-14 p-4">
                <div className="flex items-center space-x-2">
                    <Avatar sx={{ width: 30, height: 30 }} src={user.profilePic} className='cursor-pointer' />
                    <Search sx={{ width: 25, height: 25 }} className='bg-gray m-1 p-1 rounded-full text-smoke cursor-pointer' />
                </div>
                <div className=" font-bold">Chat</div>
                <div className="flex items-center space-x-2">
                    <PersonAddIcon sx={{ width: 25, height: 25 }} className='bg-gray m-1 p-1 rounded-full text-smoke cursor-pointer' />
                    <Home sx={{ width: 25, height: 25 }} className='bg-gray m-1 p-1 rounded-full text-smoke cursor-pointer' onClick={backToHome} />
                </div>
            </div>

            <div className="h-[400px] bg-white p-2 overflow-scroll scrollbar-hide">
                {posts.map(({ id, data: { profilePic, username, timestamp, imageUrl, read } }) => (
                    <SingleChat
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chats