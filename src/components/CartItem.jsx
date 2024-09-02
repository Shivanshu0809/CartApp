import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {FcDeleteDatabase} from "react-icons/fc";
// import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";
import { MdDelete } from "react-icons/md";




const CartItem = ({item, itemIndex}) => {
  
    const dispatch = useDispatch();

    const removeFromCart =() =>{
      dispatch(remove(item.id));
      toast.success("Item Removed");
    }
  
  return(
  <div className="">
    <div className=" flex gap-6 items-center lg:justify-center lg:w-[35vw] sm:w-[100vw] border-b-4 border-gray-400 mb-2 py-2 sm:px-4">

          <div className="h-[150px] w-[150px]  ">
              <img className="h-[150px] " src={item.image} />
          </div>
          
      <div className="flex flex-col gap-2">
              <h1 className="lg:text-lg md:text-lg max-sm:text-sm font-semibold">{item.title}</h1>
              <h1 className="max-sm:text-xs">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
        <div className="flex justify-between items-center max-sm:justify-around">
                <p className="text-green-600 font-semibold">${item.price}</p>
          <div
             onClick={removeFromCart} className="text-red-500 cursor-pointer">
             <MdDelete/>
          </div>
        </div>

      </div>


    </div>

  </div>
  )
};

export default CartItem;
