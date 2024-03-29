import React from 'react';
import ReactDOM from 'react-dom';
import MotelActions from './actions/MotelActions';
import MotelGrid from './components/MotelGrid.jsx';

setInterval(function () {
    MotelActions.fetchList();
}, 5000);

ReactDOM.render(<MotelGrid />, document.getElementById('app'));