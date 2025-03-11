import { useState } from "react"

export default function ImageSlider(props) {
    const images = props.images

    const[activeImage, setActiveImage] = useState(0)
    return(
        <div className="w-full h-full items-center aspect-square flex-col relative">
            <img src = {images[activeImage]} className="w-full aspect-square object-cover"></img>
            <div className="w-full h-[100px] backdrop-filter  backdrop-blur-md absolute  " >
                <div className="w-full h-full flex items-center justify-center  overflow-hidden">
                    {images.map((image, index) => (
                        <img 
                        onClick={() => setActiveImage(index)} src={image} key={index} className="w-16 h-16  object-cover cursor-pointer"></img>
                    ))}

                </div>
            </div>

        </div>
    )
}