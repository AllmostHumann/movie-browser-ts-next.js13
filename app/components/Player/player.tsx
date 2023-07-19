import { fetchMovieVideo } from "@/app/api/hooks/movies/useMovieVideos";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player/youtube";

export const Player = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["movieVideo", { id }],
    queryFn: () => fetchMovieVideo({ id }),
  });

  const renderTrailer = data?.results?.find(
    (vid) => vid.name === "Official Trailer"
  );

  return (
    <ReactPlayer
      className="relative top-0 left-0"
      url={`https://www.youtube.com/watch?v=${renderTrailer?.key}`}
      width="100%"
      height="100%"
      light={true}
    />
  );
};
