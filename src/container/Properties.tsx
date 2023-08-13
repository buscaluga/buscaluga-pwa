import { useProperties } from "../hook/useProperties";
import { PropertiesGrid } from "../component/PropertiesGrid";

export function Properties() {
  const { properties } = useProperties();

  return (
    <div>
      <h1>Aluguel no Rio de Janeiro - RJ</h1>
      <PropertiesGrid properties={properties} />
    </div>
  );
}
