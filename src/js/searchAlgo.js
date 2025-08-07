import course from "./../data/courses.json"

function searchAlgo(searchWord) {
    // Formating
    const removedWhiteSpace = searchWord.trim()
    const wordArray1 = removedWhiteSpace.split(/\s+/)
    let wordArray2 = []
    wordArray1.forEach(word => {
        wordArray2.push(word.toLowerCase())
    })

    // Search algo
    let matchingVideos = []
    course.forEach((singleCourse, singleCourse_i) => {
        singleCourse.categories.forEach((category, category_i) => {
            category.videos.forEach((video, video_i) => {
                let added = false
                wordArray2.forEach(word => {
                    if (video.title.toLowerCase().includes(word) && !added) {
                        matchingVideos.push({...video, grade: singleCourse.grade, category: category.name, icategory: category_i, icourse: singleCourse_i, ivideo: video_i});
                        added = true
                    }
                })
            })
        })
    })
    // Return results
    return matchingVideos;
};

export default searchAlgo;