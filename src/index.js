import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/leaflet.markercluster/dist/MarkerCluster.css';
import '../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
