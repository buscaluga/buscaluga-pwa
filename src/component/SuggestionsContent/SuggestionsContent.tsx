import {
  CitySuggestion,
  NeightborhoodSuggestion,
  StreetSuggestion,
  Suggestions,
} from "../../model/SearchSuggestion";
import { ListItem } from "../ListItem";
import { SmallText } from "../Text";
import SuggestionsContentStyled from "./SuggestionsContentStyled";
import { ReactComponent as LocationSVG } from "../../asset/icon/Location.svg";

interface SuggestionsContentProps {
  cities: Suggestions<CitySuggestion>;
  neighborhoods: Suggestions<NeightborhoodSuggestion>;
  streets: Suggestions<StreetSuggestion>;
}

const SuggestionsContent = ({
  cities,
  neighborhoods,
  streets,
}: SuggestionsContentProps) => {
  const hasCities = cities.length !== 0;
  const hasNeighborhoods = neighborhoods.length !== 0;
  const hasStreets = streets.length !== 0;

  return (
    <SuggestionsContentStyled>
      {hasCities && (
        <SmallText>
          <b>Cidades</b>
        </SmallText>
      )}
      {cities.map((city) => (
        <ListItem
          key={`city-${city}`}
          title={<b>{city}</b>}
          icon={<LocationSVG />}
        />
      ))}

      {hasNeighborhoods && (
        <SmallText>
          <b>Bairros</b>
        </SmallText>
      )}
      {neighborhoods.map((neighborhood) => (
        <ListItem
          key={`neighborhood-${neighborhood.name}`}
          title={<b>{neighborhood.name}</b>}
          subTitle={neighborhood.city}
          icon={<LocationSVG />}
        />
      ))}

      {hasStreets && (
        <SmallText>
          <b>Ruas</b>
        </SmallText>
      )}
      {streets.map((street) => (
        <ListItem
          key={`street-${street.name}`}
          title={<b>{street.name}</b>}
          subTitle={street.neightborhood}
          icon={<LocationSVG />}
        />
      ))}
    </SuggestionsContentStyled>
  );
};

export default SuggestionsContent;
