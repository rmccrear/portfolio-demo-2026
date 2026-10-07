
const imageUrl = (w, h, sepia, sat) => {
    let url =  "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?q=80&h=" + h + "&w=" + w + "&sepia=" + sepia + "&sat=" + sat
    console.log(url)
    return url
}

export default imageUrl