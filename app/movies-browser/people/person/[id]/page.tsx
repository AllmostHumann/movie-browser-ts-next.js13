// "use client";

// import { useQueries } from "@tanstack/react-query";
// import { useParams, useRouter, useSearchParams } from "next/navigation";
// import { useEffect } from "react";
// import qs from "qs";
// import { Main } from "@/app/components/Main/main";
// import { Container } from "@/app/components/Container/container";
// import { About } from "@/app/components/MoviePage/About/about";
// import { Cast } from "@/app/components/MoviePage/Cast/cast";
// import { Crew } from "@/app/components/MoviePage/Crew/crew";
// import { Poster } from "@/app/components/MoviePage/Poster/poster";
// import { fetchPersonDetails } from "@/app/api/hooks/people/usePersonDetails";
// import { fetchPersonCredits } from "@/app/api/hooks/people/usePersonCredits";
// import { LoadingPage } from "@/app/components/Status/Loading/loading";
// import { ErrorPage } from "@/app/components/Status/Error/error";
// import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";

// export default function MovieDetails() {
//   const { person_id, id } = useParams();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const query = searchParams.get(searchQueryParamName) || null;

//   useEffect(() => {
//     if (query) {
//       router.replace(
//         `/movies-browser/people?` +
//           qs.stringify(
//             { [searchQueryParamName]: query, page: 1 },
//             { skipNulls: true }
//           )
//       );
//     }
//   }, [query, router]);

//   const [personDetails, personCredits] = useQueries({
//     queries: [
//       {
//         queryKey: ["personDetails", { person_id }],
//         queryFn: () => fetchPersonDetails({ person_id }),
//         keepPreviousData: true,
//       },
//       {
//         queryKey: ["personCredits", { id }],
//         queryFn: () => fetchPersonCredits({ id }),
//         keepPreviousData: true,
//       },
//     ],
//   });

//   const {
//     data: details,
//     isLoading: detailsLoading,
//     error: detailsError,
//   } = personDetails;
//   const {
//     data: credits,
//     isLoading: creditsLoading,
//     error: creditsError,
//   } = personCredits;

//   if (detailsLoading && creditsLoading) {
//     return <LoadingPage />;
//   }

//   if (detailsError && creditsError instanceof Error) {
//     return <ErrorPage />;
//   }

//   return (
//     <>
//       <Poster details={details} />
//       <Main
//         list={false}
//         page={true}
//       >
//         <Container>
//           <About details={details} />
//           <Cast credits={credits?.cast} />
//           <Crew credits={credits?.crew} />
//         </Container>
//       </Main>
//     </>
//   );
// }
