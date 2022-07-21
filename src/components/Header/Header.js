import { HeaderButtons } from './HeaderButtons';
import { Logo } from './Logo';
import { Search } from './Search';

const Header = (props) => {
    const itemCount = props.itemCount;

    return (
        <header>
            <Logo />
            <Search />
            <HeaderButtons itemCount={itemCount} />
        </header>
    )
}

export { Header };
