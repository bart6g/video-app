import axios from "axios";
require("dotenv").config();
const APIKey = process.env.REACT_APP_KEY;

export const fetchData = async (id, videos, setVideos, setMessage) => {
  const response = await axios
    .get(
      `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${APIKey}&part=snippet,statistics&fields=items(id,snippet,statistics)`
    )
    .then((res) => {
      if (res.status === 200) {
        const actVideos = [...videos];
        const tempVideo = res.data.items[0];
        const index = actVideos.findIndex((el) => el.id === tempVideo.id);
        if (index === -1) {
          actVideos.push({
            ...tempVideo,
            list: { dislike: false, like: false },
          });
          setVideos(actVideos);
          setMessage({
            success: true,
            message: "Video was successfully added.",
          });
        } else {
          setMessage({
            success: false,
            message: "Video is already in your collection.",
          });
        }
      }
    })
    .catch((err) => {
      console.log(process.env.REACT_APP_KEY);
      setMessage({
        success: false,
        message: "Something went wrong.",
      });
    });
  return response;
};
