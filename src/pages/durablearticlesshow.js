import Axios from 'axios'
import React from "react";
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
function Durablearticlesshow() {

    const [durablearticlesList, setDurablearticlesList] = useState([]);

    const getdurablearticles = () => {
        Axios.get('http://localhost:3001/durablearticles').then((Response) => {
            setDurablearticlesList(Response.data);
        });
    }

    return (
        <div className="App container">
            <br/>
            <div className="material">
                <button className="btn btn-primary" onClick={getdurablearticles}>แสดง</button>
                <br /><br />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">เลขครุภัณฑ์</th>
                            <th scope="col">ชื่อ</th>
                            <th scope="col">ยี่ห้อ</th>
                            <th scope="col">หน่วยนับ</th>
                            <th scope="col">ราคา/หน่วย</th>
                            <th scope="col">วันที่ซื้อ</th>
                            <th scope="col">วันที่รับ</th>
                            <th scope="col">วันที่ซ่อม</th>
                            <th scope="col">วันที่ซ่อมเสร็จ</th>
                            <th scope="col">ประเภทครุภัณฑ์</th>
                            <th scope="col">เลขบริษัท</th>
                            <th scope="col">เลขห้อง</th>
                            <th scope="col">แก้ไข</th>
                        </tr>
                    </thead>
                    <tbody>
                        {durablearticlesList.map((val, key) => {
                            return (
                                <tr>
                                    <td scope="row">{val.durablearticles_Id}</td>
                                    <td>{val.durablearticles_name}</td>
                                    <td>{val.durablearticles_brand}</td>
                                    <td>{val.durablearticles_unit}</td>
                                    <td>{val.durablearticles_price}</td>
                                    <td>{val.durablearticles_order_date}</td>
                                    <td>{val.durablearticles_delivery_date}</td>
                                    <td>{val.durablearticles_repair_date}</td>
                                    <td>{val.durablearticles_finish_date}</td>
                                    <td>{val.type_durablearticles_Id}</td>
                                    <td>{val.company_Id}</td>
                                    <td>{val.room_Id}</td>
                                    <td><Link class="btn btn-warning" to="/durablearticlesedit">แก้ไข</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Durablearticlesshow