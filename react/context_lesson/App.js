import Navbar from './components/Navbar';
import SearchProvider from './context/SearchProvider';
import Page from './containers/page';

const App = () => {
    return (
        <SearchProvider>
            <NavBar />
            <Page />
        </SearchProvider>
    );
};

export default App;