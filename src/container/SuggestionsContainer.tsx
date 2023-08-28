import { LazyLoad, Rect } from "../component/LazyLoad";
import { SuggestionsContent } from "../component/SuggestionsContent";
import { useSearchContext } from "../context/SearchContext";
import { useAllSuggestions } from "../hook/useSuggesions";
import SuggestionsResult from "../asset/lazy-load/SuggestionsResult";
import { SmallText } from "../component/Text";
import { Button } from "../component/Button";
import { ListItem } from "../component/ListItem";
import { ReactComponent as LocationSVG } from "../asset/icon/Location.svg";
import { repeat } from "../util/repeat";

const citiesLazyloadQty = 3;
const neighborhoodsLazyloadQty = 3;
const streetsLazyloadQty = 3;

export function SuggestionsContainer() {
  const { search } = useSearchContext();
  const { term } = search;

  const allSuggestions = useAllSuggestions();
  const { everyIsLoading } = allSuggestions;

  const CitiesSuggestions = () => {
    const {
      allCities,
      hasCities,
      citiesQuery: { isFetching, fetchNextPage, hasNextPage },
    } = allSuggestions;

    return (
      <>
        {hasCities && (
          <SmallText style={{ paddingBottom: "5px" }}>
            <b>Cidades</b>
          </SmallText>
        )}

        {allCities.map((city) => (
          <ListItem
            key={`city-${city}`}
            title={<b>{city}</b>}
            icon={<LocationSVG />}
            verticalPadding="10.5px"
          />
        ))}

        {isFetching &&
          repeat(citiesLazyloadQty, (k) => (
            <LazyLoad key={`cities-lazyload-${k}`}>
              <ListItem
                title={
                  <Rect isAbsolute={false} width="117" height="14" rx="7" />
                }
                icon={<Rect isAbsolute={false} width="24" height="24" rx="8" />}
                verticalPadding="10.5px"
              />
            </LazyLoad>
          ))}

        {hasNextPage && (
          <Button
            type="text"
            disabled={isFetching}
            onClick={() => {
              fetchNextPage();
            }}
          >
            Ver mais
          </Button>
        )}
      </>
    );
  };

  const NeighborhoodsSuggestions = () => {
    const {
      allNeighborhoods,
      hasNeighborhoods,
      neighborhoodsQuery: { isFetching, fetchNextPage, hasNextPage },
    } = allSuggestions;

    return (
      <>
        {hasNeighborhoods && (
          <SmallText style={{ paddingBottom: "5px", paddingTop: "5px" }}>
            <b>Bairros</b>
          </SmallText>
        )}

        {allNeighborhoods.map((neighborhood) => (
          <ListItem
            key={`neighborhood-${JSON.stringify(neighborhood)}`}
            title={<b>{neighborhood.name}</b>}
            subTitle={neighborhood.city}
            icon={<LocationSVG />}
          />
        ))}

        {isFetching &&
          repeat(neighborhoodsLazyloadQty, (k) => (
            <LazyLoad key={`neighborhoods-lazyload-${k}`}>
              <ListItem
                title={
                  <Rect isAbsolute={false} width="117" height="14" rx="7" />
                }
                icon={<Rect isAbsolute={false} width="24" height="24" rx="8" />}
                verticalPadding="10.5px"
              />
            </LazyLoad>
          ))}

        {hasNextPage && (
          <Button
            type="text"
            disabled={isFetching}
            onClick={() => {
              fetchNextPage();
            }}
          >
            Ver mais
          </Button>
        )}
      </>
    );
  };

  const StreetsSuggestions = () => {
    const {
      allStreets,
      hasStreets,
      streetsQuery: { isFetching, fetchNextPage, hasNextPage },
    } = allSuggestions;

    return (
      <>
        {hasStreets && (
          <SmallText style={{ paddingBottom: "5px", paddingTop: "5px" }}>
            <b>Ruas</b>
          </SmallText>
        )}

        {allStreets.map((street) => (
          <ListItem
            key={`street-${JSON.stringify(street)}`}
            title={<b>{street.name}</b>}
            subTitle={street.neightborhood}
            icon={<LocationSVG />}
          />
        ))}

        {isFetching &&
          repeat(streetsLazyloadQty, (k) => (
            <LazyLoad key={`streets-lazyload-${k}`}>
              <ListItem
                title={
                  <Rect isAbsolute={false} width="117" height="14" rx="7" />
                }
                icon={<Rect isAbsolute={false} width="24" height="24" rx="8" />}
                verticalPadding="10.5px"
              />
            </LazyLoad>
          ))}

        {hasNextPage && (
          <Button
            type="text"
            disabled={isFetching}
            onClick={() => {
              fetchNextPage();
            }}
          >
            Ver mais
          </Button>
        )}
      </>
    );
  };

  if (term === "") {
    return <SmallText>Digite cidade, bairro ou rua</SmallText>;
  }

  if (everyIsLoading) {
    return (
      <LazyLoad style={{ marginTop: "13px" }}>
        <SuggestionsResult />
      </LazyLoad>
    );
  }

  return (
    <SuggestionsContent>
      <CitiesSuggestions />
      <NeighborhoodsSuggestions />
      <StreetsSuggestions />
    </SuggestionsContent>
  );
}
