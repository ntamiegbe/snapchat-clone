import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectSelectedImage } from '../features/appSlice'

const ViewPost = () => {
    const navigate = useNavigate()
    const selectedImage = useSelector(selectSelectedImage)

    useEffect(() => {
        if (!selectedImage) {
            navigate('/chats')
        }
    }, [selectedImage])

    return (
        <div>
            <img src={selectedImage} alt="" />
        </div>
    )
}

export default ViewPost