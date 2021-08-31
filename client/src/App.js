import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { withRouter } from 'react-router';

// import Ingresar from './pages/Ingresar';
import Registro from './pages/Registro';
import login from './pages/Login'
import RegistroCompany from './pages/RegistroEmpresa'
import home from './pages/Home'
import dashboard from './pages/Dashboard2'

import 'antd/dist/antd.css';
import './assets/css/index.css';

class App extends PureComponent 
{
    componentDidMount() {
        const { history, location } = this.props;
        const { pathname } = location;
        if (pathname === '/') {
            history.push('/ingresar');
        }
    }

    render() {
        return (
            <Layout className="app-layout">
                <Switch>
                    <Route path="/ingresar" component={login} />
                    <Route path="/registrarse" component={Registro} />
                    <Route path="/registrar-empresa" component={RegistroCompany} />
                    <Route path="/home" component={home} />
                    <Route path="/dashboard" component={dashboard} />
                </Switch>
            </Layout>
        );
    }
}

export default withRouter(App);
