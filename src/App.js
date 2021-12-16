import './App.css';
import TableUsers from './component/tableUser/TableUsers'

import {Component} from 'react'

class App extends Component {
    render() {
        return (
            <div id="pageContainer">
                <TableUsers/>
            </div>
        );
    }
}

export default App;
