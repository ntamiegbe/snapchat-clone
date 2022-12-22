import React, { useCallback, useRef } from 'react'
import Webcam from 'react-webcam'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../features/cameraSlice';
import { useNavigate } from 'react-router-dom';

const videoConstraints = {
    width: 350,
    height: 450,
    facingMode: "user"
}

const Webcamera = () => {
    const webcamRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const captureImage = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        dispatch(setCameraImage(imageSrc))
        navigate('/preview')
    }, [webcamRef])

    return (
        <div className="relative rounded-lg border-[2px] border-white">
            <Webcam
                audio={false}
                width={videoConstraints.width}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />

            <RadioButtonCheckedIcon
                onClick={captureImage}
                className="absolute left-[50%] bottom-0 my-3 cursor-pointer text-white -translate-x-5"
                fontSize='large'
            />
        </div>
    )
}

export default Webcamera