import { useContext } from "react";
import AppContext from "../AppContext";

export const useAppData = () => useContext(AppContext);