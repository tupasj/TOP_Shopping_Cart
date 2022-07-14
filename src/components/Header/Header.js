import { HeaderButtons } from './HeaderButtons';
import { Logo } from './Logo';
import { Search } from './Search';

const Header = () => {
    return (
        <header>
            <Logo />
            <Search />
            <HeaderButtons />
        </header>
    )
}

export { Header };