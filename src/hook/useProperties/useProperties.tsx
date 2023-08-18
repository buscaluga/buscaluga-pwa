import { useInfiniteQuery } from "@tanstack/react-query";
import { PropertiesBody } from "../../model/Property";
import { fetchProperties } from "./api";

export const propertiesQueryKey = "properties-query-key";

const useProperties = (body: PropertiesBody) =>
  useInfiniteQuery({
    queryKey: [propertiesQueryKey],
    queryFn: (ctx) => fetchProperties({ ...body, pageToken: ctx.pageParam }),
    getNextPageParam: (lastPage, pages) => lastPage.nextPageToken,
  });

export default useProperties;
