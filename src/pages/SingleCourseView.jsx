import { useParams } from "react-router-dom";
import VideoDisplay from "../components/spesificCourse/VideoDisplay";
import CourseVideoList from "../components/spesificCourse/CourseVideoList";
import courses from "./../data/courses.json"
import NotFound from "./NotFound";

const SingleCourseView = () => {
    let { fag, kategori, video } = useParams();
    fag = parseInt(fag)
    kategori = parseInt(kategori)
    video = parseInt(video)

    const videoObject = courses[fag]?.categories?.[kategori]?.videos?.[video]

    if (videoObject) {
        let nesteLink = false;
        let forrigeLink = false;
        const courseObject = courses[fag]

        //Neste
        if (!(courseObject.categories[kategori].videos.length - 1 === video)) {
            nesteLink = `/spesifikt-fag/${fag}/${kategori}/${video + 1}`
        } else if (!(courseObject.categories.length - 1 === kategori)) {            
            nesteLink = `/spesifikt-fag/${fag}/${kategori + 1}/0`
        }

        //Forrige
        if (video > 0) {
            forrigeLink = `/spesifikt-fag/${fag}/${kategori}/${video - 1}`
        } else if (kategori > 0) {
            forrigeLink = `/spesifikt-fag/${fag}/${kategori - 1}/${courseObject.categories[kategori - 1].videos.length - 1}`
        };

        return (
            <div id="single-course-view">
                <VideoDisplay
                    video={videoObject}
                    nesteLink={nesteLink}
                    forrigeLink={forrigeLink}
                />
                <CourseVideoList 
                    icourse={fag}
                    course={courseObject}
                    category={kategori}
                    video={video}
                />
            </div>
        );
    } else {
        return <NotFound />
    };
};

export default SingleCourseView;