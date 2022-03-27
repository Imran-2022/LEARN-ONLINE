import React from 'react';
import "./Admin.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const Admin = () => {

    
 
    return (
        <Tabs>
            <div>
                <div class="Admin-header d-flex flex-column justify-content-center align-items-center">
                    <h1 class="fs=5 fw-bold text-primary">THIS IS ADMIN PLACE . ✌</h1>
                    <TabList id="myDIV" className="d-flex w-50 pt-5 justify-content-between">
                        <Tab className="btn btn-outline-danger text-light active">DATA TABLE</Tab>
                        <Tab className="btn btn-outline-danger text-light">UPLOAD NEW</Tab>
                        {/* <Tab className="btn btn-outline-danger text-light" disabled>DISABLED</Tab> */}
                        <Tab className="btn btn-outline-danger text-light">UPDATE & DELETE</Tab>
                        <Tab className="btn btn-outline-danger text-light">MAKE ADMIN</Tab>
                    </TabList>
                </div>
                <div className="container">
                    <TabPanel>
                        a for apply
                    </TabPanel>
                    <TabPanel>
                        b for ball
                    </TabPanel>
                    {/* <TabPanel>
                        c for cat
                    </TabPanel> */}
                    <TabPanel>
                        d for dog
                    </TabPanel>
                    <TabPanel>
                        e for egg
                    </TabPanel>
                </div>
            </div>
        </Tabs>

    );
};

export default Admin;