import React from "react";
import '../css/app.css'

const ImageList = (props) => {
    // console.log(props)
    const images = props.images.map(image => {
        return (
            <img className="img" key={image.id} src={image.webformatURL}/>
        )
    });
    return (
        <div className="grid">
            {images}
        </div>
    )
}

export default ImageList;