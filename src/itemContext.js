import { createContext , useState , useContext } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({children}) {
    
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart , setShowCart] = useState(false);

    const handleAdd = (price) => {
        setTotal(total + price);
        setItem(item + 1)
      };
    
      const handleRemove = (price) => {
        if( total <= 0 || setItem <=0 ) {
          return
        }
        setTotal((prevState) => prevState-price);
        setItem((prevState) => prevState - 1)
      };

      const handleReset = (total , item) => {
        setTotal(total = 0);
        setItem(item = 0);
      }

      const toggle = () => {
        setShowCart(!showCart)
      }

    return (
        <itemContext.Provider value={
            {total , item , handleRemove, handleAdd , handleReset , toggle}
        }>
          {showCart && <CartModal toggle={toggle}/>}
            {children}
        </itemContext.Provider>
    )
}

export { itemContext, useValue };
export default CustomItemContext;