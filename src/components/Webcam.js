import React, { useCallback, useRef } from 'react'
import Webcam from 'react-webcam'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../features/cameraSlice';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
}

const Webcamera = () => {

    const webcamRef = useRef()

    const dispatch = useDispatch()

    const captureImage = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        dispatch(setCameraImage(imageSrc))
    }, [webcamRef])
 
    return (
        <div className="flex items-center justify-center">

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
                className="text-2xl"
            />

        </div>
    )
}

export default Webcamera