import React from 'react'
import NavBar  from './NavBar';
import SideBar from './SideBar';


class Dashboard extends React.Component {
    render() {
      return (
        <div className="dashboard">
        <NavBar/>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <SideBar/>
              </div>
              <div className="col-md-9">
                
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Dashboard