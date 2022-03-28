import React from 'react';
import "./Admin.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddData from '../Pages/AddData/AddData';
import Footer from '../../components/footer/Footer';
import MakeAdmin from '../Pages/MakeAdmin/MakeAdmin';
import DataTable from '../Pages/DataTable/DataTable';
// import 'react-tabs/style/react-tabs.css';
const Admin = () => {
    return (
        <>
            <Tabs>
                <div>
                    <div className="Admin-header d-flex flex-column justify-content-center align-items-center">
                        <h1 className="fs=5 fw-bold text-primary">THIS IS ADMIN PLACE . ✌</h1>
                        <TabList id="myDIV" className="d-flex w-50 pt-5 justify-content-between">
                            <Tab className="btn btn-outline-danger text-light active">DATA TABLE <small style={{ fontSize: "10px" }}>(UPDATE & DELETE)</small></Tab>

                            <Tab className="btn btn-outline-danger text-light ">UPLOAD NEW</Tab>
                            {/* <Tab className="btn btn-outline-danger text-light" disabled>DISABLED</Tab> */}
                            <Tab className="btn btn-outline-danger text-light">MAKE ADMIN</Tab>
                        </TabList>
                    </div>
                    <div className="container">
                        <TabPanel>
                            <DataTable />
                        </TabPanel>
                        <TabPanel>
                            <AddData />
                        </TabPanel>
                        <TabPanel>
                            <MakeAdmin />
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
            <Footer />
        </>
    );
};

export default Admin;