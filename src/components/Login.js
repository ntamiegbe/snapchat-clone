import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../firebase'

const Login = () => {

    const dispatch = useDispatch()

    const login = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch(
                    login({
                        username: result.user.displayName,
                        profilePic: result.user.photoURL,
                        id: result.user.uid
                    })
                )
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div>
            <div className="flex items-center justify-center flex-col">
                <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" className='h-[300px] object-contain' />
                <div className="bg-snapchat m-3 p-2 rounded-lg cursor-pointer border-2 border-white hover:scale-105" onClick={login}>
                    <h2 className=' font-bold text-center text-white uppercase text-2xl px-[1.5rem]'>Login</h2>
                </div>
            </div>
        </div>
    )
}

export default Login