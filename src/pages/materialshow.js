import Axios from 'axios'
import React from "react";
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

function Materialshow() {

  const [materialList, setMaterialList] = useState([]);

  const getmaterial = () => {
    Axios.get('http://localhost:3001/material').then((Response) => {
      setMaterialList(Response.data);
    });
  }

  return (
    <div className="App container"><br/>
      <div className="material">
        <button className="btn btn-primary" onClick={getmaterial}>แสดง</button>
        <br /><br />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">เลขวัสดุ</th>
              <th scope="col">ชื่อ</th>
              <th scope="col">ยี่ห้อ</th>
              <th scope="col">หน่วยนับ</th>
              <th scope="col">ราคา</th>
              <th scope="col">คงเหลือ</th>
              <th scope="col">วันที่ซื้อ</th>
              <th scope="col">วันที่รับ</th>
              <th scope="col">ประเภทวัสดุ</th>
              <th scope="col">เลขบริษัท</th>
              <th scope="col">แก้ไข</th>
            </tr>
          </thead>
          <tbody>
            {materialList.map((val, key) => {
              return (
                <tr>
                  <td scope="row">{val.material_Id}</td>
                  <td>{val.material_name}</td>
                  <td>{val.material_brand}</td>
                  <td>{val.material_unit}</td>
                  <td>{val.material_price}</td>
                  <td>{val.material_remaining}</td>
                  <td>{val.material_order_date}</td>
                  <td>{val.material_delivery_date}</td>
                  <td>{val.type_material_Id}</td>
                  <td>{val.company_Id}</td>
                  <td><Link className="btn btn-warning" to="/materialedit">แก้ไข</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Materialshow