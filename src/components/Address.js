import { useContext } from "react";
import addressContext from "../utils/addressContext";
import Shimmer from "./Shimmer";
const Address = ({ counter }) => {
  const { address } = useContext(addressContext);
  // console.log(address);
  if (!counter) return;
  if (counter > 0 && !address) return <Shimmer />;

  // return <Shimmer />;
  return (
    <div className="grid grid-cols-4 p-3 ml-3 ">
      {address.map((element) => {
        return (
          <div key={element.id} className="bg-cyan-400 m-3 p-3 rounded-md">
            <h3>
              Street Address :<span>{element.street_address}</span>
            </h3>
            <h3>
              Street Name :<span> {element.street_name}</span>
            </h3>
            <h3>
              City :<span> {element.city}</span>
            </h3>
            <h3>
              State :<span> {element.state}</span>
            </h3>
          </div>
        );
      })}
    </div>
  );
};
export default Address;
