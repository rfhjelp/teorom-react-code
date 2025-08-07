import { Link } from "react-router-dom";
import { SlArrowRightCircle, SlArrowLeftCircle  } from "react-icons/sl";
import Description from "./Description";
import Share from "./Share";

const VideoDisplay = (props) => {
    const link = props.video.link;
    const videoName = props.video.title
    const nesteLink = props.nesteLink
    const forrigeLink = props.forrigeLink

    return (
        <div id="video-player">
            {
                link
                ? <iframe src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameBorder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
                : <h2 style={{color: "crimson", marginBottom: "50px"}}>Videoen er enten under produksjon <i>(mest sannsynlig)</i> eller så har en error oppstått <i>(minst sannsynlig)</i></h2>
            }
            <div id="video-info">
                <div id="video-info-top">
                    <h1>{videoName}</h1>
                    <div>
                        {link && <Share link={link}/>}
                        {forrigeLink && <Link to={forrigeLink}><button><span><SlArrowLeftCircle size={24}/>Forrige</span></button></Link>}
                        {nesteLink && <Link to={nesteLink}><button><span>Neste<SlArrowRightCircle size={24}/></span></button></Link>}
                    </div>
                </div>
                {
                    ('description' in props.video)
                    ?
                        <Description
                            information={props.video.description}
                        />
                    : <div></div>
                }
            </div>
        </div>
    )
};

export default VideoDisplay;