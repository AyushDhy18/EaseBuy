import { useContext } from "react";
import { alertContext, cartContext, userContext } from "./Contexts";

const withProvider = (Provider) => (IncomingComponent) => (props) => {
  const contextData = useContext(Provider);
  return <IncomingComponent {...props} {...contextData} />;
};
export default withProvider;

export const withAlert = withProvider(alertContext);
export const withUser = withProvider(userContext);
export const withCart = withProvider(cartContext);
