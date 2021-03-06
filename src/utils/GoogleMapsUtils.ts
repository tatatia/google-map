
export const loadMapApi = () => {
    const mapsURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&language=en=quarterly`
    const scripts = document.getElementsByTagName('script')
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(mapsURL) === 0) {
            return scripts[i]
        }
    }

    const googleMapScript = document.createElement('script')
    googleMapScript.src = mapsURL
    googleMapScript.async = true
    googleMapScript.defer = true
    window.document.body.appendChild(googleMapScript)

    return googleMapScript
}
//TODO: https://www.youtube.com/watch?v=Id2NtV3TcMQ (Part 2)
