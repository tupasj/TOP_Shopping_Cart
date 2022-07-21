const HeaderButtons = (props) => {
    const itemCount = props.itemCount;

    return (
        <div className="header-buttons">
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-cart-shopping"><span className="cart-counter">{itemCount}</span></i>
        </div>
    )
}

export { HeaderButtons };