import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MyNavbar } from './components/MyNavbar';
import { MyFooter } from './components/MyFooter';
import { MySlider } from './components/MySlider';
import { Products } from './components/Products/Products';

export default function App() {
    return (
        <div className="App">
            < MyNavbar />
            < MySlider />
            < Products />
            < MyFooter />
        </div>
    );
}
