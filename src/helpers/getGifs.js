export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=tKnbcTmpsoPTBUY8vBSbPx0wzSpRWno1`
    const res = await fetch(url)
    const {data} = await res.json()

    let gif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized.url
        }
    })
    return gif
}