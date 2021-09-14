import React,{useState} from "react";
import "./Album.css"
import Images from "./Images";

const Album = () => {
const [selectedImg, setSelectedImg]= useState(Images[0])

//To do make img overlay on top of selected image to show upload,change cover, change prof buttons
// buttons will not render on image area
// dont use vertical images!

 //  const getAllImgs = async () => {
 //  const updateUserCover = async () => {
 //  const updateUserAvatar = async () => {


//add on click events to buttons bellow and propper mapping to db
    return (

        <div className="Album">
            <div className="container">
                <img src = {selectedImg} alt="Selected" ClassName="selected"/>
                <button>Upload Image</button>
                <button>Change Profile Photo</button>
                <button>Change Cover Photo</button>
                <div classname="imgContainer">
                    {Images.map((img, index)=> (
                        <img
                        width= "250px"
                        height="250px"
                        style={{border:selectedImg === img ? "4px solid purple" : "" }}
                        key = {index}
                        src = {img}
                        alt = "test" 
                        onClick={()=> setSelectedImg(img)}
                        />
                    ))}
                </div>
            </div>
        </div> 
    )
}

export default Album
