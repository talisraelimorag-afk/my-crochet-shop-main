import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decQuantity, incQuantity } from "./CartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round" onClick={() => dispatch(decQuantity(pizzaId))}>
        -
      </Button>
      <p>{currentQuantity}</p>
      <Button type="round" onClick={() => dispatch(incQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
