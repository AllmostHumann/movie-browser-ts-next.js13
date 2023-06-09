// import Image from "next/image";
// import { Rating } from "../Rating/rating";
// import placeholderImage from "./../../Tiles/MovieTile/images/noMoviePoster.png";
// import { MovieDetailsResponse } from "@/app/api/types/movies/moviesDetails";
// import { apiConfig } from "@/app/api/config/apiRoutes";

// export const About = ({
//   details,
// }: {
//   details: MovieDetailsResponse | undefined;
// }) => {
//   return (
//     <div className="grid-y-[16px] mt-[16px] grid grid-cols-6 justify-center gap-[16px] bg-white p-[16px] shadow-[0px_4px_12px_0px#bac7d57f] grid-areas-layoutMovile md:mt-[64px] md:grid-cols-5 md:gap-x-[40px] md:p-[40px] md:grid-areas-layout">
//       {details?.poster_path ? (
//         <Image
//           className="w-full rounded-[5px] grid-in-p"
//           src={`${apiConfig.posters.endpoint}${details.poster_path}`}
//           alt="moviePoster"
//           width={0}
//           height={0}
//           unoptimized
//           priority
//         />
//       ) : (
//         <Image
//           className="w-full rounded-[5px] grid-in-p"
//           src={placeholderImage}
//           alt="placeholderImage"
//         />
//       )}
//       <div className="mb-0 flex flex-col gap-[8px] justify-self-start grid-in-i md:mb-[24px] md:gap-[24px]">
//         <h1
//           className="m-0 text-[16px] font-medium leading-[120%] md:text-[36px] md:font-semibold"
//           data-as={`${details?.backdrop_path ? "h2" : "h1"}`}
//         >
//           {details?.title}
//         </h1>
//         <span className="text-[13px] font-normal leading-[120%]  md:text-[22px]">
//           {details?.release_date?.slice(0, 4)}
//         </span>
//         <div className="flex flex-col gap-[8px] text-[12px] md:text-[18px]">
//           {details?.production_countries && (
//             <div className="flex flex-wrap">
//               <span className="hidden md:mr-[10px] md:block ">Production:</span>
//               <span className="hidden md:block md:text-[18px]">
//                 {details?.production_countries[0]?.name}
//               </span>
//               <span className="inline md:hidden md:text-[12px]">
//                 {details?.production_countries[0]?.iso_3166_1}
//               </span>
//             </div>
//           )}
//           <div className="flex flex-wrap">
//             <span className="hidden md:mr-[10px] md:block">Release date:</span>
//             {details?.release_date?.replaceAll("-", ".")}
//           </div>
//         </div>
//         <div className="flex gap-[8px] flex-wrap md:gap-[16px]">
//           {details?.genres?.map((genre) => (
//             <div
//               className="rounded-[5px] bg-mystic px-[8px] py-[4px] text-[10px] md:px-[16px] md:py-[8px] md:text-[14px]"
//               key={genre.id}
//             >
//               {genre.name}
//             </div>
//           ))}
//         </div>
//         <Rating
//           about={true}
//           poster={false}
//           averageVotes={details?.vote_average?.toFixed(1)}
//           voteAmount={details?.vote_count}
//         />
//       </div>
//       <p className="col-start-2 row-start-2 m-0 text-[14px] leading-[160%] grid-in-d md:text-[20px]">
//         {details?.overview}
//       </p>
//     </div>
//   );
// };
