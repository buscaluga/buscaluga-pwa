import PropertyCardStyled from "./PropertyCardStyled";

import Image from "@jy95/material-ui-image";
import { Property } from "../../model/Property";
import { formatPrice } from "../../util/price";

interface PropertyCardProps {
  property: Property;
}

function PropertyCard({ property }: PropertyCardProps) {
  const { address, price, images } = property;

  return (
    <PropertyCardStyled>
      <div>
        <header>
          <Image
            src={images[0]}
            className={"card-image"}
            style={{ paddingTop: "70%" }}
            cover={true}
            animationDuration={3000}
          />
        </header>
        <section>
          <h2>{address.street}</h2>
          <sub>{`${address.neighborhood}, ${address.city}`}</sub>
          <p>R$ {formatPrice(price.value)}</p>
        </section>
      </div>
    </PropertyCardStyled>
  );
}

export default PropertyCard;
