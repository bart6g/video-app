import React, { useEffect, useContext } from "react";
// import getVideoId from "get-video-id";
import { Container } from "./contentElements";
// import { fetchData } from "../../api/fetchData";
import VideoBox from "../video/VideoBox";
import { VideosContainer } from "../video/videoElements";
import { VideoContext } from "../../context/videoContext";
import AddVideo from "../addvideo/AddVideo";
import DeleteModal from "../modals/DeleteModal";
const Home = () => {
  // const [text, setText] = useState("");
  const { videos, videoList, setVideoList } = useContext(VideoContext);
  // const [message, setMessage] = useState({ success: false, message: "" });
  // const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    if (videos) {
      setVideoList(
        videos.map(({ id, snippet, statistics, list }, index) => (
          <VideoBox
            id={id}
            key={id}
            snippet={snippet}
            statistics={statistics}
            index={index}
            list={list}
          />
        ))
      );
    } else {
      setVideoList([]);
    }
  }, [videos]);

  // const addVideo = (e) => {
  //   e.preventDefault();

  //   let obj = getVideoId(text);

  //   if (obj.id === null) {
  //     return setMessage({
  //       success: false,
  //       message: "No video with such id or link on youtube's platform",
  //     });
  //   }
  //   fetchData(obj.id, videos, setVideos, setMessage);
  // };
  return (
    <Container animated={true}>
      <AddVideo />
      <VideosContainer>{videoList ? videoList : null}</VideosContainer>
    
    </Container>
  );
};

export default Home;
