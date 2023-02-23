import Axios from 'axios'
import React from "react";
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';

function Materialadd() {

  const [material_Id, setMaterial_Id] = useState("");
  const [material_name, setMaterial_name] = useState("");
  const [material_brand, setMaterial_brand] = useState("");
  const [material_unit, setMaterial_unit] = useState("");
  const [material_price, setMaterial_price] = useState("");
  const [material_remaining, setMaterial_remaining] = useState("");
  const [material_order_date, setMaterial_order_date] = useState("");
  const [material_delivery_date, setMaterial_delivery_date] = useState("");
  const [type_material_Id, setType_material_Id] = useState("");
  const [company_Id, setCompany_Id] = useState("");

  const [materialList, setMaterialList] = useState([]);

  const addMaterial = () => {
    Axios.post('http://localhost:3001/creatematerial', {
      material_Id: material_Id,
      material_name: material_name,
      material_brand: material_brand,
      material_unit: material_unit,
      material_price: material_price,
      material_remaining: material_remaining,
      material_order_date: material_order_date,
      material_delivery_date: material_delivery_date,
      type_material_Id: type_material_Id,
      company_Id: company_Id
    }).then(() => {
      setMaterialList([
        materialList,
        {
          material_Id: material_Id,
          material_name: material_name,
          material_brand: material_brand,
          material_unit: material_unit,
          material_price: material_price,
          material_remaining: material_remaining,
          material_order_date: material_order_date,
          material_delivery_date: material_delivery_date,
          type_material_Id: type_material_Id,
          company_Id: company_Id
        }
      ])
    })
  }

  return (
    <div className="App container">
      <h3>กรอกข้อมูลวัสดุ</h3>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="material_Id" className="form-label">เลขวัสดุ</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={(event) => {
                setMaterial_Id(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="material_name" className="form-label">ชื่อวัสดุ</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={(event) => {
                setMaterial_name(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="material_brand" className="form-label">ยี่ห้อวัสดุ</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={(event) => {
                setMaterial_brand(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="material_unit" className="form-label">หน่วยนับวัสดุ</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={(event) => {
                setMaterial_unit(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="material_price" className="form-label">ราคาวัสดุ</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={(event) => {
                setMaterial_price(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="material_remaining" className="form-label">วัสดุคงเหลือ</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={(event) => {
                setMaterial_remaining(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="material_order_date" className="form-label">วันที่ซื้อวัสดุ</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter order_date"
              onChange={(event) => {
                setMaterial_order_date(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="material_delivery_date" className="form-label">วันที่รับวัสดุ</label>
            <input
              type="date"
              className="form-control"
              placeholder=""
              onChange={(event) => {
                setMaterial_delivery_date(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="type_material_Id" className="form-label">ประเภทวัสดุ</label><br />
            <select id='type_material_Id' className='type_material_Id' onChange={(event) => {
              setType_material_Id(event.target.value)
            }}>
              <option value="">เลือกประเภทของวัสดุ</option>
              <option value="1">1.วัสดุสิ้นเปลืองสำนักงาน</option>
              <option value="2">2.วัสดุสิ้นเปลืองไฟฟ้าและวิทยุ</option>
              <option value="3">3.วัสดุสิ้นเปลืองคอมพิวเตอร์</option>
              <option value="4">4.วัสดุสิ้นเปลืองบ้านงานครัว</option>
            </select>
          </div>


          <div className="mb-3">
            <label htmlFor="company_Id" className="form-label">บริษัท</label><br />
            <select id='company_Id' className='company_Id' onChange={(event) => {
              setCompany_Id(event.target.value)
            }}>
              <option value="">เลือกบริษัท</option>
              <option value="1">1.บริษัท เท็นซอฟท์ จำกัด</option>
              <option value="2">2.บริษัท เน็ทวัน เน็ทเวิร์ค โซลูชั่น จำกัด</option>
              <option value="3">3.ห้างหุ้นส่วนจำกัด ทิพวรรณ์อีเล็คทรอนิค</option>
              <option value="4">4.บริษัท เอสวีโอเอ จำกัด (มหาชน)</option>
              <option value="5">5.คอมพิวเตอร์ เพอริเฟอรัล แอนด์ ซัพพลายส์ จำกัด</option>
              <option value="6">6.บริษัท พรอสเพอริตี้แอนด์เอสไอคอร์ป จำกัด</option>
              <option value="7">7.บริษัท บลู คอนเนค จำกัด</option>
              <option value="8">8.บริษัท สกายไฮ จำกัด</option>
              <option value="9">9.บริษัท ไอที อินโนเวชั่น จำกัด</option>
              <option value="10">10.บริษัท อินโนเวท โซลูชั่น จำกัด</option>
              <option value="11">11.ไม่ทราบ</option>
            </select>
          </div>

          <button className="btn btn-success m-2" onClick={addMaterial}>เพิ่ม</button>
        </form>
      </div>
    </div>
  );
}

export default Materialadd