import { useParams, useNavigate } from "react-router-dom";
import courses from "./../data/courses.json"
import { useEffect } from "react";

const RedirectToVideoWithID = () => {
    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        let fag = false;
        let kategori = false;
        let video = false;
        courses.forEach((course, i1) => {
            course.categories.forEach((category, i2) => {
                category.videos.forEach((videoObj, i3) => {
                    if (videoObj.link === id) {
                        fag = i1
                        kategori = i2
                        video = i3
                    }
                    console.log("---------------- looking for id -> current compare");
                    console.log(id);
                    console.log(videoObj.link);
                    console.log(videoObj.link === id);
                })
            });
        });

        if (!(typeof fag === "boolean")) {
            navigate(`/spesifikt-fag/${fag}/${kategori}/${video}`, { replace: true })
        } else {
            navigate('/', { replace: true })
        }
    })

    return (
        <div style={{ margin: "10px auto", width: "225px", textAlign: "center" }}>
            <h1>Vent litt!</h1>
            <p>Du blir sent videre til videoen ...</p>
            <p>Video ID: {id}</p>
        </div>
    );
};

export default RedirectToVideoWithID;