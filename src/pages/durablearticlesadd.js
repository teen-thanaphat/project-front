import Axios from 'axios'
import React from "react";
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
function Durablearticlesadd() {

    const [durablearticles_Id, setDurablearticles_Id] = useState("");
    const [durablearticles_name, setDurablearticles_name] = useState("");
    const [durablearticles_brand, setDurablearticles_brand] = useState("");
    const [durablearticles_unit, setDurablearticles_unit] = useState("");
    const [durablearticles_price, setDurablearticles_price] = useState("");
    const [durablearticles_order_date, setDurablearticles_order_date] = useState("");
    const [durablearticles_delivery_date, setDurablearticles_delivery_date] = useState("");
    const [durablearticles_repair_date, setDurablearticles_repair_date] = useState("");
    const [durablearticles_finish_date, setDurablearticles_finish_date] = useState("");
    const [type_durablearticles_Id, setType_durablearticles_Id] = useState("");
    const [company_Id, setCompany_Id] = useState("");
    const [room_Id, setRoom_Id] = useState("");

    const [durablearticlesList, setDurablearticlesList] = useState([]);

    const addDurablearticles = () => {
        Axios.post('http://localhost:3001/createdurablearticles', {
            durablearticles_Id: durablearticles_Id,
            durablearticles_name: durablearticles_name,
            durablearticles_brand: durablearticles_brand,
            durablearticles_unit: durablearticles_unit,
            durablearticles_price: durablearticles_price,
            durablearticles_order_date: durablearticles_order_date,
            durablearticles_delivery_date: durablearticles_delivery_date,
            durablearticles_repair_date: durablearticles_repair_date,
            durablearticles_finish_date: durablearticles_finish_date,
            type_durablearticles_Id: type_durablearticles_Id,
            company_Id: company_Id,
            room_Id: room_Id
        }).then(() => {
            setDurablearticlesList([
                durablearticlesList,
                {
                    durablearticles_Id: durablearticles_Id,
                    durablearticles_name: durablearticles_name,
                    durablearticles_brand: durablearticles_brand,
                    durablearticles_unit: durablearticles_unit,
                    durablearticles_price: durablearticles_price,
                    durablearticles_order_date: durablearticles_order_date,
                    durablearticles_delivery_date: durablearticles_delivery_date,
                    durablearticles_repair_date: durablearticles_repair_date,
                    durablearticles_finish_date: durablearticles_finish_date,
                    type_durablearticles_Id: type_durablearticles_Id,
                    company_Id: company_Id,
                    room_Id: room_Id
                }
            ])
        })
    }

    return (
        <div className="App container">
            <h3>กรอกข้อมูลครุภัณฑ์</h3>
            <div className="information">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="material_Id" className="form-label">เลขครุภัณฑ์</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            onChange={(event) => {
                                setDurablearticles_Id(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="durablearticles_name" className="form-label">ชื่อครุภัณฑ์</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            onChange={(event) => {
                                setDurablearticles_name(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="durablearticles_brand" className="form-label">ยี่ห้อครุภัณฑ์</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            onChange={(event) => {
                                setDurablearticles_brand(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="durablearticles_unit" className="form-label">หน่วยนับครุภัณฑ์</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            onChange={(event) => {
                                setDurablearticles_unit(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="durablearticles_price" className="form-label">ราคาครุภัณฑ์</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter price"
                            onChange={(event) => {
                                setDurablearticles_price(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="durablearticles_order_date" className="form-label">วันที่ซื้อครุภัณฑ์</label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder=""
                            onChange={(event) => {
                                setDurablearticles_order_date(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="durablearticles_delivery_date" className="form-label">วันที่รับครุภัณฑ์</label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder=""
                            onChange={(event) => {
                                setDurablearticles_delivery_date(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="durablearticles_repair_date" className="form-label">วันที่ซ่อมครุภัณฑ์</label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder=""
                            onChange={(event) => {
                                setDurablearticles_repair_date(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="durablearticles_finish_date" className="form-label">วันที่ซ่อมเสร็จ</label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder=""
                            onChange={(event) => {
                                setDurablearticles_finish_date(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type_durablearticles_Id" className="form-label">ประเภทครุภัณฑ์</label><br />
                        <select id='type_material_Id' className='type_material_Id' onChange={(event) => {
                            setType_durablearticles_Id(event.target.value)
                        }}>
                            <option value="">เลือกประเภทของครุภัณฑ์</option>
                            <option value="12060100">1.ครุภัณฑ์สำนักงาน</option>
                            <option value="12060300">2.ครุภัณฑ์ไฟฟ้าและวิทยุ</option>
                            <option value="12060400">3.ครุภัณฑ์โฆษณาและเผยแพร่</option>
                            <option value="12060800">4.ครุภัณฑ์สำรวจ</option>
                            <option value="12061000">5.ครุภัณฑ์คอมพิวเตอร์</option>
                            <option value="12061100">6.ครุภัณฑ์การศึกษา</option>
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
                    <div className="mb-3">
                        <label htmlFor="room_Id" className="form-label">ห้อง</label><br />
                        <select id='room_Id' className='room_Id' onChange={(event) => {
                            setRoom_Id(event.target.value)
                        }}>
                            <option value="">เลือกห้อง</option>
                            <option value="78-601">78-601</option>
                            <option value="78-602">78-602</option>
                            <option value="78-603">78-603</option>
                            <option value="78-604">78-604</option>
                            <option value="78-605">78-605</option>
                            <option value="78-606">78-606</option>
                            <option value="78-607">78-607</option>
                            <option value="78-608">78-608</option>
                            <option value="78-609">78-609</option>
                            <option value="78-610">78-610</option>
                            <option value="78-611">78-611</option>
                            <option value="78-612">78-612</option>
                            <option value="78-613">78-613</option>
                            <option value="78-614">78-614</option>
                            <option value="78-615">78-615</option>
                            <option value="78-616">78-616</option>
                            <option value="78-617">78-617</option>
                            <option value="78-618">78-618</option>
                            <option value="78-619">78-619</option>
                            <option value="78-620">78-620</option>
                            <option value="ไม่ทราบ">ไม่ทราบ</option>
                        </select>
                    </div>

                    <button className="btn btn-success m-2" to onClick={addDurablearticles}>เพิ่ม</button>
                </form>
            </div>
        </div>
    );
}

export default Durablearticlesadd