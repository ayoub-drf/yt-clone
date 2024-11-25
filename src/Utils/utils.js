const numberConvertor = (num) => {
    if (num >= 1E6) {
        return `${Math.floor(num / 1E6)}M`
    } else if (num >= 1E3) {
        return `${Math.floor(num / 1E3)}K`
    } else {
        return num
    }
};

const apiKey = import.meta.env.VITE_YOUTUBE_KEY;



export {
    numberConvertor,
    apiKey,
}


  