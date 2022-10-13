import React, {Component} from 'react';
import {Navigate} from "react-router-dom";

class Dashboard extends Component {

    componentDidMount() {
        this.props.switchTab();
    }

    render() {
        const token = sessionStorage.getItem('token');

        const dashboardUrls = 
          "https://prod-useast-b.online.tableau.com/t/datazymes2021/views/GPPCITracker/Main?%3Aembed=y&%3Atabs=n#1";
       

        if (token == null) {
            return <Navigate to={'/login'}/>
        }

        return (
          <div>          
          <iframe title='dashboard' src={dashboardUrls} height={'1500px;'} width={'105%'}/>         
        </div>
 
        );
    }
}
export default Dashboard;
