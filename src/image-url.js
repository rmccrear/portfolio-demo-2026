
const imageUrl = (photoId, w, h, sepia, sat) => {
    let url =  "https://images.unsplash.com/" + photoId + "?q=80&h=" + h + "&w=" + w + "&sepia=" + sepia + "&sat=" + sat
    console.log(url)
    return url
}

export default imageUrl