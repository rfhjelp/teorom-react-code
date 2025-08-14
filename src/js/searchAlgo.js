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
                let add = false
                let wordCounter = 0;
                wordArray2.forEach(word => {
                    if (video.title.toLowerCase().includes(word) && !add) {
                        add = true
                        wordCounter = wordCounter + 1
                    } else if (video.title.toLowerCase().includes(word) && add) {
                        wordCounter = wordCounter + 1
                    }
                })
                if (add) {
                    matchingVideos.push({...video, grade: singleCourse.grade, category: category.name, icategory: category_i, icourse: singleCourse_i, ivideo: video_i, wordCounter: wordCounter});
                };
            })
        })
    })
    //sorting results
    if (matchingVideos.length > 1) {
        matchingVideos.sort((a, b) => {
            return b.wordCounter - a.wordCounter
        });
    }

    // Returning results
    return matchingVideos;
};

export default searchAlgo;