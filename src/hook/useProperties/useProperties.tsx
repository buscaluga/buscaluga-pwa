import { useInfiniteQuery } from "@tanstack/react-query";
import { PropertiesBody, PropertiesParams } from "../../model/Property";
import { fetchProperties } from "./api";

export const propertiesQueryKey = "properties-query-key";

const useProperties = (params: PropertiesParams, body: PropertiesBody) =>
  useInfiniteQuery({
    queryKey: [propertiesQueryKey, body],
    queryFn: (ctx) =>
      fetchProperties({ ...params, pageToken: ctx.pageParam }, body),
    getNextPageParam: (lastPage, pages) => lastPage.nextPageToken,
  });

export default useProperties;
