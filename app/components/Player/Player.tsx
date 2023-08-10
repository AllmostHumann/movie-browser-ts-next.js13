"use client";
import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { useParams, usePathname } from "next/navigation";
import { fetchMovieVideo } from "@/app/api/hooks/movies/useMovieVideos";
import ReactPlayer from "react-player/youtube";
import Modal from "react-modal";
import PlayButton from "./images/playButton.svg";
import { fetchTvShowVideo } from "@/app/api/hooks/tv/useTvShowsVideos";

export const Player = () => {
  const { id } = useParams();
  const pathname = usePathname();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [movieVideo, tvShowVideo] = useQueries({
    queries: [
      {
        queryKey: ["movieVideo", { id }],
        queryFn: () => fetchMovieVideo({ id }),
        enabled: !!pathname.includes("/movies/movie/"),
      },
      {
        queryKey: ["tvShowVideo", { id }],
        queryFn: () => fetchTvShowVideo({ id }),
        enabled: !!pathname.includes("tv/show"),
      },
    ],
  });

  const renderMovieTrailer = movieVideo?.data?.results?.findLast(
    (vid) => vid.name
  );
  const renderTvShowTrailer = tvShowVideo?.data?.results?.findLast(
    (vid) => vid.name
  );

  const handleOpenModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="absolute grid place-self-center cursor-pointer"
      >
        <PlayButton className="hover:fill-yellow-500 fill-none w-auto h-[40px] md:w-auto md:h-[80px]" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        overlayClassName="fixed bg-[#0f0f0f] inset-0"
        className="absolute top-[40px] left-[40px] right-[40px] bottom-[40px] outline-none"
      >
        {pathname.includes("/movies/movie/") && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${renderMovieTrailer?.key}`}
            width="auto"
            height="100%"
            muted
            controls
            playing
          />
        )}
        {pathname.includes("tv/show") && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${renderTvShowTrailer?.key}`}
            width="auto"
            height="100%"
            muted
            controls
            playing
          />
        )}
      </Modal>
    </>
  );
};
