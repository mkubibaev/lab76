import React, {Component} from 'react';
import Layout from "./components/Layout/Layout";
import Messages from "./containers/Messages/Messages";

class App extends Component {
    render() {
        return (
            <Layout>
                <Messages/>
            </Layout>
        )
    }
}

export default App;
