import { useParams } from "react-router-dom";
import MensClothing from "../../assets/data/MensClothing.json";
import WomensClothing from "../../assets/data/WomensClothing.json";

const ProductView = (props) => {
    const urlParam = useParams();

    return (
        <div>
            <p>Hello from ProductView</p>
            <p>Params: {urlParam.paramId}</p>
        </div>
    )
}

export { ProductView };
