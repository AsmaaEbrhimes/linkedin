

import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import user_imge from "../../imges/1660002772504.jpg"
import "./Popup.css"
import shortid from 'shortid';


import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actions/action';

const Model = ({ handleClose, showModal}) => {

    const dispatch = useDispatch();

    const [posteditor, setposteditor] = useState("");
    const [image, setimage] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const video = useRef("")



    const showViseo = () => {
        video.current.style.display = "block"
    }

    const handelImage = (e) => {
        const imges = e.target.files[0];

        if (imges === "") {
            alert('no found imges');
        } else {
            setimage(imges);
        }
    };

    const reset = () => {
        setimage("");
        setposteditor("");
        setVideoUrl("")
    };


    const HandelPost = (e) => {
        e.preventDefault();
        const postData = {
            id:shortid.generate(),
            posteditor: posteditor,
            image: image,
            videoUrl: videoUrl
        };
        dispatch(addPost(postData))
        reset();
        handleClose();
    };
    return (
        <>
            <Modal show={showModal} onHide={handleClose} id="custom-modal">
                <Modal.Header closeButton onClick={reset}></Modal.Header>
                <Modal.Body>
                    <div className='popup_uesr'>
                        <div className='popup_flex'>
                            <img src={user_imge} alt="" />
                            <div>
                                <h5>Asmaa Ebrhime</h5>
                                <p>Post to Anyone</p>
                            </div>
                            <i className="fa-solid fa-caret-down "></i>
                        </div>
                        <textarea placeholder='What do you want talk about' autoFocus={true} value={posteditor} onChange={(e) => setposteditor(e.target.value)} />
                        {image ? <img className='img_model' src={URL.createObjectURL(image)} alt="" /> : ""}
                        {videoUrl && (
                            <ReactPlayer
                                url={videoUrl}
                                controls={true}
                                width='90%'
                                height='230px'
                                style={{ position: "absolute" }}
                            />
                        )}
                        <div className='post_EDITOR_Icon'>
                            <div className='flex_post_icons'>
                                <label className='picture' htmlFor='input_file'><i className="fa-regular fa-image"></i></label>
                                <input onChange={(e) => handelImage(e)} type="file" id="input_file" />

                                <label onClick={showViseo} style={{ cursor: "pointer" }} htmlFor='video'> <i className="fa-brands fa-youtube"></i></label>
                                <input ref={video} onChange={(e) => setVideoUrl(e.target.value)} type="text" id="video" placeholder="Enter video URL" style={{ display: "none", position: "absolute", bottom: "120px", width: "90%", padding: "10px", border: "none", border: "1px solid #ccc", outline: "none" }} />
                                <i className="fa-solid fa-calendar-days"></i>
                                <i className="fa-solid fa-certificate"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <div className={posteditor ? "active" : ''}>
                                <button className='post' onClick={(e) => HandelPost(e)}>Post</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Model;






