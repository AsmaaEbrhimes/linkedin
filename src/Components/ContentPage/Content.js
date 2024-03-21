import { Row, Col, Container } from "react-bootstrap";
import backgrounduser from "../../imges/0_IMK4r0ciK6Sa7k_k.png"
import imguser from "../../imges/1660002772504.jpg"
import ReactPlayer from 'react-player';
import keyImage from "../../imges/1631001730791.jpg"
import personImg from "../../imges/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
import loder from "../../imges/loader.svg"
import Model from "../popup/Model"
import "./Content.css"
import { useRef, useState, useEffect } from "react"
import { connect } from 'react-redux';
import { RemovePost } from "../../redux/actions/action"

const Content = (props) => {
    const [list, setlist] = useState()
    const [listVisible, setListVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loding, setloding] = useState(true)
    const moreref = useRef()
    // const action = useRef()
    const titleref = useRef()
    const imgref = useRef()
    const showModel = () => {
        setShowModal(true)
    }

    const handleClose = () => setShowModal(false)

    const ShowMore = (e) => {
        if (e.currentTarget.innerHTML === 'Show more') {
            moreref.current.classList.add('accrdion')
            e.currentTarget.innerHTML = "Show Less"
        } else {
            moreref.current.classList.remove('accrdion')
            e.currentTarget.innerHTML = "Show more"

        }
    }

    useEffect(() => {
        setloding(true);
        setTimeout(() => {
            setloding(false);
        }, 3500);
    }, [props.posts]);



    const copyPost = (e) => {
        const spanElement = e.currentTarget
        spanElement.innerHTML = 'coppied <i class="fa-solid fa-check check"></i>'
        const textToCopy = titleref.current.innerText;
        navigator.clipboard.writeText(textToCopy);
    }

    const handlePaste = async (event) => {
        const textFromClipboard = await navigator.clipboard.readText();
        event.target.innerText = textFromClipboard;
    }


  
    const DeletePost = (id) => {
        props.deletePost(id)
    }

    const Show = (id) => {
        setlist(id)
    }

    const toggleList=()=>{
        setListVisible(!listVisible)
    }

    return (
        <>
            <Model handleClose={handleClose} showModal={showModal} />
            <Container>
                <Row>
                    <Col xs="12" md="3" l="2" xl="2" className="one_row">
                        <div className="first">
                            <img className="img_background" src={backgrounduser} alt="" />
                            <img className="user_image" src={imguser} alt="" />
                            <p>Welcome, Asmaa!</p>
                            <p>Add a photo</p>
                        </div>
                        <div className="border_bottom"></div>
                        <div ref={moreref} className="content_user">
                            <div className="second">
                                <div className="desc">
                                    <p>Profile viewrs</p>
                                    <p>71</p>
                                </div>
                                <div>
                                    <div className=" desc">
                                        <p>post impresissions</p>
                                        <p>295</p>
                                    </div>
                                    <div className="border_bottom"></div>
                                </div>
                                <div>
                                    <p className="parch">Strengthen your profile with an AI writing assistant</p>
                                    <p>Try Premium for EGP0</p>
                                    <div className="border_bottom"></div>
                                    <p className="line_top">My items</p>
                                </div>
                            </div>

                            <div className="last">
                                <div className="flex">
                                    <div>
                                        <p>Groups</p>
                                        <p>Events</p>
                                        <p>Followed Hashtages</p>
                                    </div>
                                    <div>
                                        +
                                    </div>
                                </div>
                                <p className="last_desc">Discover more</p>
                            </div>
                        </div>
                        <div className="border_bottom"></div>
                        <button onClick={(e) => ShowMore(e)} className="show_more">Show more</button>
                    </Col>

                    <Col xs="12" md="9" l="2" xl="6" className="two_row">
                        <div className="card_posts_user">
                            <div className="flex_post">
                                <div>
                                    <img src={imguser} alt="" />
                                    <input onClick={showModel} placeholder="start a post" />
                                </div>
                                <ul className="post_user_list">
                                    <li><i class="fa-regular fa-image"></i><p>Media</p></li>
                                    <li><i class="fa-regular fa-calendar-days"></i><p>Events</p></li>
                                    <li><i class="fa-solid fa-newspaper"></i><p>Artcile</p></li>
                                </ul>
                            </div>
                            {loding ? (
                                <img className="loding" src={loder} alt="" />
                            ) : (
                                props.posts?.map((ele) => (
                                    <div id={ele.id} className="creat_post_user">
                                        <div className="desc_post">
                                            <div className="flex_desc_post">
                                                <img src={imguser} alt="" />
                                                <div className="desc">
                                                    <p>AsmaaEbrhime</p>
                                                    <p>front End Devoloper</p>
                                                </div>
                                            </div>
                                            <h2  onClick={() => Show(ele.id)} className="dots">...</h2>
                                            <p onPaste={handlePaste} ref={titleref}>{ele.posteditor}</p>
                                            {ele.image && <img onPaste={handlePaste} ref={imgref} className="img_post_user" src={URL.createObjectURL(ele.image)} alt="User Image" />}
                                            <ReactPlayer
                                                url={ele.videoUrl}
                                                controls={true}
                                                width='100%'
                                                height='300px'
                                            />
                                          <div className={`dots ${listVisible ? 'active' : ''}`} onClick={toggleList}>
                                            <ul id={ele.id} className={"Action_button " + (list === ele.id ? "block" : "none")}>
                                                <li onClick={(e) => copyPost(e)}><i class="fa-regular fa-copy"></i><span>copy Link</span></li>
                                                <li onClick={() => DeletePost(ele.id)}><i class="fa-solid fa-trash"></i>Delete</li>
                                            </ul>
                                           
                                        </div>
                                    </div>
                                    </div>
                                   
                                ))
                            )}
                        </div>
                    </Col>

                    <Col xs="12" md="12" l="2" xl="2" className="row_there">
                        <div className="artclies">
                            <p>Asmaa unlock your full potenial with linkedin premiume</p>
                            <img src={keyImage} alt="" />
                            <h6>See who s viwed your profile in the last 90 days</h6>
                            <button>Try foe free</button>
                        </div>
                        <img className="person" src={personImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}




const mapStateToProps = (state) => ({
    posts: state.post.posts
});

const mapDispatchToprop = (dispatch) => {
    return {
        deletePost: (id) => dispatch(RemovePost(id))
    }

}

export default connect(mapStateToProps, mapDispatchToprop)(Content);











