import { HeaderButtons } from './HeaderButtons';
import { Logo } from './Logo';
import { Search } from './Search';

const Header = (props) => {
    const itemCount = props.itemCount;
    const setType = props.setType;

    return (
        <header>
            <Logo setType={setType} />
            <Search />
            <HeaderButtons itemCount={itemCount} />
        </header>
    );
};

export { Header };
