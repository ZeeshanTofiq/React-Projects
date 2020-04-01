import React from 'react';
import { Router, Route} from 'react-router-dom';
import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamEdit from './StreamEdit';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import Header from './Header';
import history from '../history';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Header />
                    <Route path='/' exact={true} component={StreamList} />
                    <Route path='/new' exact={true} component={StreamCreate} />
                    <Route path='/edit/:id' exact={true} component={StreamEdit} />
                    <Route path='/delete/:id' exact={true} component={StreamDelete} />
                    <Route path='/show/:id' exact={true} component={StreamShow} />
                </Router>
            </div>
        );
    }
}

export default App;