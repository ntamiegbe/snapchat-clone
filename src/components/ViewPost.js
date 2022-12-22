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
        <div className='relative rounded-lg border-[2px] border-white'>
            <img src={selectedImage} alt="" />
            <div className="absolute top-0 right-0 m-3 text-white font-bold">
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

                >
                    {({ remainingTime }) => {
                        if (remainingTime === 0) {
                            navigate('/chats')
                        }
                        return remainingTime
                    }}
                </CountdownCircleTimer>
            </div>
        </div>
    )
}

export default ViewPost