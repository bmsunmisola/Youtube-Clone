import axios from "axios"

const baseUrl = "https://www.googleapis.com/youtube/v3/videos"

export const get_popular_videos = async () => {
    try{
      const response = await axios.get(baseUrl,{
        params: {
            part: "snippet",
            chart: "mostPopular",
            regionCode: "NG",
            maxResults: 100,
            key: "AIzaSyAkIXto0r868gXLkFGQCFNpxI7VzJm5PV8"
        }
      });
     return response.data.items
    }catch(error){
            console.log(error)
    }
}