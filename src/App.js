import logo from './logo.svg';
import './App.css';
import Datatable from './Component/datatable/Datatable';
import Navigationbar from '../src/Component/NavBar/Navbar';
import FullWidthTabs from './Component/Tabs/Tabs';

function App() {
  return (
    <div className="App">
    <Navigationbar/>
    <div style={{paddingTop:'150px'}}>
      <FullWidthTabs/>
   {/* <Datatable/> */}
   </div>
    </div>
  );
}

export default App;
