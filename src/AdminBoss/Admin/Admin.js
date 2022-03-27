import React from 'react';
import "./Admin.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddData from '../Pages/AddData/AddData';
import Footer from '../../components/footer/Footer';
import MakeAdmin from '../Pages/MakeAdmin/MakeAdmin';
// import 'react-tabs/style/react-tabs.css';
const Admin = () => {



    return (
        <>

            <Tabs>
                <div>
                    <div className="Admin-header d-flex flex-column justify-content-center align-items-center">
                        <h1 className="fs=5 fw-bold text-primary">THIS IS ADMIN PLACE . ✌</h1>
                        <TabList id="myDIV" className="d-flex w-50 pt-5 justify-content-between">
                            <Tab className="btn btn-outline-danger text-light active">UPLOAD NEW</Tab>
                            <Tab className="btn btn-outline-danger text-light">DATA TABLE</Tab>
                            {/* <Tab className="btn btn-outline-danger text-light" disabled>DISABLED</Tab> */}
                            <Tab className="btn btn-outline-danger text-light">UPDATE & DELETE</Tab>
                            <Tab className="btn btn-outline-danger text-light">MAKE ADMIN</Tab>
                        </TabList>
                    </div>
                    <div className="container">
                        <TabPanel>
                            <AddData />
                        </TabPanel>
                        <TabPanel>
                            a for apply
                        </TabPanel>

                        {/* <TabPanel>
                        c for cat
                    </TabPanel> */}
                        <TabPanel>
                            d for dog
                        </TabPanel>
                        <TabPanel>
                            <MakeAdmin/>
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
            <Footer />

        </>

    );
};

export default Admin;