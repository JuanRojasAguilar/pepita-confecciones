import { createContext } from "react";
import useMaterialApi from "../hooks/useMaterialApi";

const { getAllFromApi } = useMaterialApi();

const data = getAllFromApi();
console.log(data)

const MaterialContext = createContext(data);

export default MaterialContext;