import Page from './containers/page.jsx';
import Navbar from './components/Navbar.jsx'
import TextColorProvider from './context/TextColorProvider.js';
import BackgroundColorProvider from './context/BackgroundColorProvider.js'

const App = () => {
  return (
    <>
      <TextColorProvider>
        <BackgroundColorProvider>
          <div><Navbar /></div>
          <div><Page /></div>
        </BackgroundColorProvider>
      </TextColorProvider>
 
    </>
  );
}

export default App;
