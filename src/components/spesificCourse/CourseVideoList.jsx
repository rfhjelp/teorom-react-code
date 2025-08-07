import CategoryAndVideos from "./CategoryAndVideos2";

const CourseVideoList = (props) => {
    const icourse = props.icourse
    const course = props.course
    const icategory = props.category
    const ivideo = props.video

    const categoriesMapped = course.categories.map((category, i) => (
        <CategoryAndVideos
            courseI={icourse}
            currentlyWatching_iVid={ivideo}
            currentlyWatching_iCategory={icategory}
            categoryObj={category}
            iCategory={i}
            key={i}
        />
    ));

    return (
        <div id="video-list" className="anti-select">
            <div>
                <h1>{course.course}</h1>
            </div>
            <div style={{marginTop: "15px"}}>
                {categoriesMapped}
            </div>
        </div>
    )
};

export default CourseVideoList;