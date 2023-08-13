import { Property } from "../../model/Property";
import { useState } from "react";
import { fetchProperties } from "./api";

type SetProperties = React.Dispatch<React.SetStateAction<Property[]>>;

async function setStateProperty(setProperties: SetProperties) {
  const response = await fetchProperties();

  setProperties(response.properties);
}

function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isStarted, setIsStarted] = useState(false);

  if (!isStarted) {
    setStateProperty(setProperties);
    setIsStarted(true);
  }

  return { properties, setIsStarted };
}

export default useProperties;
