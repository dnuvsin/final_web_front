import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Box from '@mui/material/Box';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';


  function Img(){
    return(
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12" >
          <Grid>
            <div className="headder">
                    <h1 style={{margin: "auto"}}>ทัวร์ 4 เกาะทะเลแหวก สปีดโบ</h1>
            </div>
          </Grid>
        </Box>
        <Box gridColumn="span 6">
          <Grid>
            <div className="photos">
                <img src='https://www.pmandamantour.com/uploads/package/album/pic-327266936629.jpg'alt="Tour photo"style={{ width: '100%'}} />
                <img src='https://www.pmandamantour.com/uploads/package/album/pic-328045982946.jpg' alt="Tour photo" style={{ width: '50%' }} />
                <img src='https://www.pmandamantour.com/uploads/package/album/pic-322637646380.jpg' alt="Tour photo" style={{ width: '50%' }} />
            </div>
            
          </Grid>
        </Box>
        <Box gridColumn="span 6">
          <Grid>
            <div className="tour-details">
                <h1>รายละเอียดทัวร์</h1>
            </div>
            <dir>
                <ul>
                        <li>
                            <b style={{ color: "blue" }}>09.00</b> ลูกค้าลงเรือ Speed boat
                                สวมเสื้อชูชีพเพื่อปลอดภัย ไกด์อธิบายโปรแกรม และออกเดินทางมุ่งหน้าสู่หาดไร่เลย์
                        </li>
                        <br />
                        <li>
                            <b style={{ color: "blue" }}>10.00</b> หาดไลเลย์ หรือ หาดถ้ำพระนาง
                            นมัสการขอพรพระนาง และพักผ่อนตามอัธยาศัย เล่นน้ำหน้าหาด
                        </li>
                        <br />
                        <li>
                            <b style={{ color: "blue" }}>11.00</b> ดำน้ำดูปะการัง และปลาสวยงาม
                            ชมความงามใต้ท้องทะเล ณ เกาะไก่
                        </li>
                        <br />
                        <li>
                            <b style={{ color: "blue" }}>12.00</b> เกาะปอดะ ลูกค้าพักรับประทานอาหารกลางวัน
                            และพักผ่อนตามอัธยาศัย ถ่ายรูป เล่นน้ำหน้าหาด
                        </li>
                        <br />
                        <li>
                            <b style={{ color: "blue" }}>13.30</b> ทะเลแหวก Unseen Thailand เป็นปรากฎการณ์ทางธรรมชาติ
                            เมื่อน้ำลดลงจะเกิดสันทรายที่เชื่อมต่อกันระหว่างเกาะสามเกาะคือ เกาะไก่ เกาะทับ และเกาะหม้อ
                            ลูกค้าถ่ายรูป เล่นน้ำ ผักผ่อนตามอัธยาศัย
                        </li>
                        <br />
                        <li>
                            <b style={{ color: "blue" }}>14.00</b> ออกเดินทางกลับถึงท่าเรือ
                            พร้อมส่งลูกค้าเดินทางกลับโดยสวัสดิ์ภาพ
                        </li>
                        <br />
                        <br />
                        <p>
                            <b style={{ color: "red" }}>***โปรแกรมอาจมีการเปลี่ยนแปลงตามสภาพอากาศในวันนั้นๆ***</b>
                        </p>
                </ul>
            </dir>

            <div className="price-frame" style={{ border: "5px solid blue",padding:"10px 80px", color: "blue", textAlign: "center" ,width: "40%",ali:"center",margin: "auto", display: "block" }}>
              <h2>ราคาต่อคน</h2>
              <p>ผู้ใหญ่ 800 บาทต่อคน</p>
              <p>เด็ก 700 บาทต่อคน</p>
              <p>*ฟรีสำหรับเด็กอายุต่ำกว่า 4 ปี</p>
            </div>
            <br/>
            <div className="buytour" >
            <form>
            <h2>จองทัวร์</h2>
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" /><br/><br/>
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" /><br/><br/>
              <label for="num">Number of People:</label>
              <select id="num" name="num">
              <label htmlFor="num">Number of People: </label>
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                  <option value="5">5 </option>
                  <option value="6">6 </option>
                  <option value="7">7 </option>
                  <option value="8">8 </option>
                  <option value="9">9 </option>
              </select><br/><br/>
                <div className="dt" style={{textAlign: "center",display: "block"}}>
                  <label>Date and Time:</label><br/>
                  <Datetime input={false} open={true} /><br/><br/>
                </div><br/><br/>
              <button 
                            type="submit" 
                            style={{
                        backgroundColor: "blue",
                        color: "white",
                        fontWeight: "bold",
                        border: "none",
                        borderRadius: "5px",
                        padding: "10px 20px",
                        boxShadow: "2px 2px 5px grey"
                        
                        }}>
                        Submit
              </button>
              

            </form> 
            </div>
            
           
          </Grid>
        </Box>
        <Box gridColumn="span 6">
          <Grid>
            
          </Grid>
        </Box>
    </Box>);
  }

  export default Img;