import courses from "./../data/collectedData"
import { useNavigate } from "react-router-dom";

const CoursesOverview = () => {
    const navigate = useNavigate();
    const overviewMapped = courses.map((course, i) => {
        let mengdenVideoer = 0;
        course.categories.forEach((category) => {        
            mengdenVideoer = category.videos.length + mengdenVideoer
        })

        const link = (mengdenVideoer > 0) ? `/spesifikt-fag/${i}/0/0` : "/fag"

        const handleClick = () => {
            setTimeout(() => {
                navigate(link);
            }, 200)
        };

        return (
            <tr key={i} onClick={handleClick} className="course-row anti-select">
                <td className="course-name">{course.course}</td>
                <td>{mengdenVideoer}</td>
                <td>{course.finished.status ? <p>Ja</p> : <p style={{lineHeight: "1.2em"}}>Nei, estimert ferdigstillelse:<br /><b>{course.finished.scheduled}</b></p>}</td>
            </tr>
        )
    });

    return (
        <table id="courses-overview-table">
            <thead>
                <tr>
                    <th style={{width: "60%"}}>Fag</th>
                    <th>Mengden videoer<br />(Inkludert planlagte videoer)</th>
                    <th>Hele pensum lagt til</th>
                </tr>
            </thead>
            <tbody>
                {overviewMapped}
            </tbody>
        </table>
    );
};

export default CoursesOverview;