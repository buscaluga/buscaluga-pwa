import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchSuggestions, fetchSuggestionsMock } from "./api";
import { SuggestionParams } from "../../model/SearchSuggestion";
import { switchMockAction } from "../../util/mock";

export const suggestionsQueryKey = "suggestions-query-key";

const useSuggestions = (params: SuggestionParams) =>
  useInfiniteQuery({
    queryKey: [suggestionsQueryKey, params],
    queryFn: (ctx) => {
      const fetch = switchMockAction(fetchSuggestions, fetchSuggestionsMock);
      return fetch({ ...params, pageToken: ctx.pageParam });
    },
    getNextPageParam: (lastPage, pages) => lastPage.nextPageToken,
  });

export default useSuggestions;
