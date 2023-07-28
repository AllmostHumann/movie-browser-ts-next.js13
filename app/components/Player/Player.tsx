import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchMovieVideo } from "@/app/api/hooks/movies/useMovieVideos";
import ReactPlayer from "react-player/youtube";
import Modal from "react-modal";
import PlayButton from "./images/playButton.svg";
import CloseButton from "./images/closeButton.svg";

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
        overlayClassName="fixed bg-[#0f0f0f] inset-0"
        className="absolute top-[40px] left-[40px] right-[40px] bottom-[40px]"
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${renderTrailer?.key}`}
          width="100%"
          height="100%"
          muted
          controls
          playing
        />
        <button className="absolute top-0 right-0" onClick={handleCloseModal}>
          <CloseButton className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-white" />
        </button>
      </Modal>
    </>
  );
};
