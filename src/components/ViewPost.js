import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectSelectedImage } from '../features/appSlice'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const ViewPost = () => {
    const navigate = useNavigate()
    const selectedImage = useSelector(selectSelectedImage)

    useEffect(() => {
        if (!selectedImage) {
            navigate('/chats')
        }
    }, [selectedImage])

    return (
        <div className='relative'>
            <img src={selectedImage} alt="" />
            <CountdownCircleTimer
                isPlaying
                duration={10}
                strokeWidth={6}
                size={50}
                colors={[
                    ["#004777", 0.33],
                    ["#F7B801", 0.33],
                    ["#A30000", 0.33]
                ]}
                className="absolute top-0 right-0 m-3"
            >
                {({ remainingTime }) => {
                    if (remainingTime === 0) {
                        navigate('/chats')
                    }
                    return remainingTime
                }}
            </CountdownCircleTimer>
        </div>
    )
}

export default ViewPost