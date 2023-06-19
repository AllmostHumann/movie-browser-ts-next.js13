import { useSearchParams } from "next/navigation";

const useQueryParameter = ({ paramName }: { paramName: string }) => {
  const location = useSearchParams();
  return location.get(paramName);
};

export const searchQueryParamName = "search";
export default useQueryParameter;
