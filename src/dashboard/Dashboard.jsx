import React, {Component} from 'react';
import {Navigate} from "react-router-dom";
import Tableau from "../Tableau";

class Dashboard extends Component {

    componentDidMount() {
        this.props.switchTab();
    }

    render() {
        const token = sessionStorage.getItem('token');

        const dashboardUrls = {
          desktop: "https://prod-useast-b.online.tableau.com/t/datazymes2021/views/GPPCITracker/Main?%3Aembed=y&%3Atabs=n#1"
        };

        if (token == null) {
            return <Navigate to={'/login'}/>
        }

        return (
          <div className="App">
          <Tableau dashboardUrls={dashboardUrls} />
        </div>
        );
    }
}
export default Dashboard;
