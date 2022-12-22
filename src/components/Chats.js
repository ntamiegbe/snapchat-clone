import { Home, Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Chats = () => {

    const navigate = useNavigate()

    const backToHome = () => {
        navigate('/')
    }

    return (
        <div className='relative w-[350px] h-[600px]'>
            <div className="flex justify-between items-center bg-white h-14 p-4">
                <div className="flex items-center space-x-2">
                    <Avatar sx={{ width: 30, height: 30 }} className='cursor-pointer'/>
                    <Search sx={{ width: 25, height: 25 }} className='bg-gray m-1 p-1 rounded-full text-smoke cursor-pointer' />
                </div>
                <div className=" font-bold">Chat</div>
                <div className="flex items-center space-x-2">
                    <PersonAddIcon sx={{ width: 25, height: 25 }} className='bg-gray m-1 p-1 rounded-full text-smoke cursor-pointer' />
                    <Home sx={{ width: 25, height: 25 }} className='bg-gray m-1 p-1 rounded-full text-smoke cursor-pointer' onClick={backToHome}/>
                </div>
            </div>

            <div className="h-[500px] bg-white p-4">Chats Section</div>
        </div>
    )
}

export default Chats