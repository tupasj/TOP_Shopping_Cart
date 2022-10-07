const CartRemoveOrderBtn = (props) => {
    const itemCount = props.itemCount;
    const setItemCount = props.setItemCount;
    const id = props.id;
    const removeOrderByID = props.removeOrderByID;
    const inputDefaultVal = props.inputDefaultVal;

    const decrementItemCount = (value) => {
        setItemCount(itemCount - value);
    };

    const deleteOrder = (id) => {
        decrementItemCount(inputDefaultVal);
        removeOrderByID(id.target.id);
    };

    return (
        <button id={id} className="order__remove-order" onClick={deleteOrder}>
        Remove from cart
        </button>
    );
};

export { CartRemoveOrderBtn };
