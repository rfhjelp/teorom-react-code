import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const CategoryAndVideos = (props) => {
    const [open, setOpen] = useState(false);
    const courseI = props.courseI;
    const currentlyWatching_iVid = props.currentlyWatching_iVid;
    const currentlyWatching_iCategory = props.currentlyWatching_iCategory;
    const categoryObj = props.categoryObj;
    const iCategory = props.iCategory;

    const toggle = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    };

    useEffect(() => {
        if (currentlyWatching_iCategory === iCategory) {
            setOpen(true);
        }
    }, [currentlyWatching_iCategory, iCategory]);

    const videosMapped = categoryObj.videos.map((video, i) => {
        const titleSplitted = video.title.split("\n")
        let titleDisplay = titleSplitted.map((titlePart, i) => {
            const last = (i + 1 === titleSplitted.length)

            return (
                <Fragment key={i}>
                    {(titlePart.toLowerCase() === "kontroll oppgaver") ? <b>{titlePart}</b> : titlePart}
                    {(!last) && <br />}
                </Fragment>
            );
        });
        
        return (
            <div
                className="spesific-video-sidemenu anti-select"
                key={i}
                style={{
                    backgroundColor:
                        i === currentlyWatching_iVid &&
                        currentlyWatching_iCategory === iCategory
                            ? "rgba(161, 178, 194, 1)"
                            : "white",
                }}
            >
                <Link to={!(i === currentlyWatching_iVid && currentlyWatching_iCategory === iCategory) ? `/spesifikt-fag/${courseI}/${iCategory}/${i}` : ''} >
                    <p>
                        {`${i+1}.`}
                    </p>
                    <p>
                        {titleDisplay}
                    </p>
                </Link>
            </div>
        )
    });

    return (
        <div className="category-overview anti-select">
            <div>
                <div className="category" onClick={toggle} style={{width: "100%"}}>
                    <p style={{marginLeft: "2px"}}>{`${iCategory + 1}.`}</p>
                    <p>{categoryObj.name}</p>
                    <div>
                        <p className="video-amount-per-category">{categoryObj.videos.length} videoer</p>
                        {open ? <SlArrowDown /> : <SlArrowUp />}
                    </div>
                    
                </div>
            </div>
            {open && videosMapped}
        </div>
    );
};

export default CategoryAndVideos;
