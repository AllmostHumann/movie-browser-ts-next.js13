import { searchQueryParamName } from "./useQueryParameter";
import { usePathname, useRouter } from "next/navigation";

export const useReplaceQueryParameter = () => {
  const location = usePathname();
  const router = useRouter();

  return (value: string) => {
    const searchParams = new URLSearchParams();

    if (value === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, value);
    }
    router.push(`${location}?${searchParams.toString()}`);
  };
};
