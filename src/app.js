import React from 'react';
import ReactDOM from 'react-dom';

import MenuBar from './components/menu_bar';

const App = () => {
    return (
        <div>
            <MenuBar />
            <div>Hi!</div>
        </div>
    );
}

ReactDOM.render(App(), document.querySelector('.container'));