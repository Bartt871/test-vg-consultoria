import { useContext } from "react"
import { ToastMessageContext } from ".";

export const useToastMessage = () => useContext(ToastMessageContext);