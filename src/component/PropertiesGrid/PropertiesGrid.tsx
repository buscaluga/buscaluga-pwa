import { Property } from "../../model/Property";
import { PropertyCard } from "../PropertyCard";
import { PropertiesGridStyled } from "./PropertiesGridStyled";

interface GridProps {
  properties: Property[];
}

function PropertiesGrid({ properties }: GridProps) {
  return (
    <PropertiesGridStyled>
      {properties.map((property) => (
        <PropertyCard property={property} />
      ))}
    </PropertiesGridStyled>
  );
}

export default PropertiesGrid
