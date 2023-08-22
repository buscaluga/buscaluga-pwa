import { useProperties } from "../hook/useProperties";
import { PropertiesGrid } from "../component/PropertiesGrid";
import { PropertiesBody } from "../model/Property";
import { SmallText } from "../component/Text";

export function PropertiesContainer() {
  const { data } = useProperties({} as PropertiesBody);
  const properties = data?.pages.flatMap((p) => p.properties);

  return (
    <div>
      <SmallText>{data?.pages[0].quantity} imóveis encontrados</SmallText>
      <PropertiesGrid properties={properties || []} />
    </div>
  );
}
