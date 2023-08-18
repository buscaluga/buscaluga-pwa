import { useProperties } from "../hook/useProperties";
import { PropertiesGrid } from "../component/PropertiesGrid";
import { PropertiesBody } from "../model/Property";

export function Properties() {
  const { data } = useProperties({} as PropertiesBody);
  const properties = data?.pages.flatMap((p) => p.properties);

  return (
    <div>
      <h1>Aluguel no Rio de Janeiro - RJ</h1>
      <PropertiesGrid properties={properties || []} />
    </div>
  );
}
