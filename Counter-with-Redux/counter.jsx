import { useDispatch,useSelector } from "react-redux";
import { increment,decrement,reset } from "../Fetures/CounterSlice";

const counter=()=>{
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>1+</button>
            <button onClick={()=>dispatch(decrement())}>1-</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
        </div>

    )
}
export default counter