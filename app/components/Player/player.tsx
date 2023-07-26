import { fetchMovieVideo } from "@/app/api/hooks/movies/useMovieVideos";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player/youtube";
import Modal from "react-modal";
import { useState } from "react";
import PlayButton from "./images/playButton.svg";

export const Player = () => {
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data } = useQuery({
    queryKey: ["movieVideo", { id }],
    queryFn: () => fetchMovieVideo({ id }),
  });

  const renderTrailer = data?.results?.findLast((vid) => vid.name);

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
        overlayClassName="fixed bg-black inset-0 overflow-hidden"
        className="absolute top-[40px] left-[40px] right-[40px] bottom-[40px] p-[20px]"
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${renderTrailer?.key}`}
          width="100%"
          height="100%"
          muted
          controls
          playing
        />
      </Modal>
    </>
  );
};
