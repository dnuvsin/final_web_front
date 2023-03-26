import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Box from "@mui/material/Box";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./page.css";

function Page7() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 12">
        <Grid>
          <div className="headder">
            <h1 style={{ margin: "auto" }}>
              ทัวร์ พายเรือคายัคอ่าวท่าเลนครึ่งวัน{" "}
            </h1>
          </div>
        </Grid>
      </Box>
      <Box gridColumn="span 6">
        <Grid>
          <div className="photos">
            <img
              src="https://www.krabiteerapongtour.com/uploads/package/album/pic-622701866895.jpg"
              alt="Tour photo"
              style={{ width: "100%", height: "700 px" }}
            />
            <img
              src="https://www.krabiteerapongtour.com/uploads/package/album/pic-627742018132.jpg"
              alt="Tour photo"
              style={{ width: "50%" }}
            />
            <img
              src="https://www.krabiteerapongtour.com/uploads/package/album/pic-629453806877.jpg"
              alt="Tour photo"
              style={{ width: "50%" }}
            />
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
              <br />
              <li>
                <b style={{ color: "blue" }}>09.00</b>{" "}
                รถรับนักท่องเที่ยวจากโรงแรมที่พัก ( รอบเช้า ) โปรแกรมรอบเช้า
                เสร็จประมาณ 12.00 น
              </li>
              <br />
              <li>
                <p>
                  ......... เดินทางถึงอ่าวท่าเลน ( ใช้เวลาเดินทางประมาณ 45 นาที
                  ) เปลี่ยนเป็นการเดินทางเป็น เรือคายัคลำน้อย
                  ปราศจากเสียงรบกวนจากเครื่องยนต์ ชมธรรมชาติที่สวยสดงดงามกับ
                  อ่าวท่าเลน ชมแนวป่าโกงกางที่ยังคงอุดมสมบูรณ์อย่างมาก
                  บางเวลาอาจได้พบกับฝูงสัตว์ต่างๆ อาทิ ฝูงลิงที่หากินตามแนวป่า
                  พายเรือลัดเลาะตามซอกเล็ก ซอกน้อยของแนวโกงกางชม ลากูน
                  น้อยใหญ่มากมาย ที่ถูกซุกซ่อนไว้ภายในอ่าวท่าเลน
                  ที่รอคอยการค้นพบของนักท่องเที่ยวชม ช่องแคบเคนย่อน
                  จุดที่สวยที่สุดของอ่าวท่าเลน
                  แนวหน้าผาหินปูนที่โอบขนานไปตลอดทางระหว่างการพายเรือคายัค
                  สมควรแก่เวลาเดินทางกลับสู่ท่าเรือ .....รับประทาน ผลไม้
                  และน้ำดื่ม จากนั้นนำนักท่องเที่ยวส่งที่พัก
                </p>
              </li>
              <br />
              <p>
                <b style={{ color: "blue" }}>โปรแกรมทัวร์นี้รวม</b>
              </p>
              <p>รวมรถรับ-ส่ง ท่าเรือ โรงแรมที่ลูกค้าพัก</p>
              <p>รวมไกด์ รวมเสื้อชูชีพ</p>
              <p>รวมเรือแคนนู (เรือ 1 ลำ นั่งได้ 2 คนค่ะ )</p>
              <br />

              <p>
                <b style={{ color: "red" }}>
                  ***โปรแกรมอาจมีการเปลี่ยนแปลงตามสภาพอากาศในวันนั้นๆ***
                </b>
              </p>
              <br />
              <p>
                <b style={{ color: "#37e3e0" }}>สิ่งที่ลูกค้าต้องนำมา</b>
              </p>
              <br />
              <li>ผ้าเช็ดตัว</li>
              <li>แว่นตากันแดด</li>
              <li>ครีมกันแดด</li>
              <li>กล้องถ่ายรูป</li>
              <li>ชุดว่ายน้ำ</li>
              <br />
              <p>
                <b style={{ color: "red" }}> ***หมายเหตุ***</b>
              </p>
              <p>
                กรณีทางอุทยานแห่งชาติ แจ้งเรือออกไม่ได้ เนื่องจากพายุ
                หรือลมมรสุม เรายินดีคืนเงิน 100 %
              </p>
            </ul>
          </dir>

          <div
            className="price-frame"
            style={{
              border: "5px solid blue",
              padding: "10px 80px",
              color: "blue",
              textAlign: "center",
              width: "40%",
              ali: "center",
              margin: "auto",
              display: "block",
            }}
          >
            <h2>ราคาต่อคน</h2>
            <p>ผู้ใหญ่ 500 บาทต่อคน</p>
            <p>เด็ก 400 บาทต่อคน</p>
            <p>*ฟรีสำหรับเด็กอายุต่ำกว่า 4 ปี</p>
          </div>
          <br />
          <div className="buytour">
            <form>
              <h2>จองทัวร์</h2>
              {/* <label htmlFor="name">Name: </label>
              <input type="text" id="name" />
              <br />
              <br />
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" />
              <br /> */}
              <br />
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
              </select>
              <br />
              <br />
              <div
                className="dt"
                style={{ textAlign: "center", display: "block" }}
              >
                <label>Date and Time:</label>
                <br />
                <Datetime input={false} open={true} />
                <br />
                <br />
              </div>
              <br />
              <br />
              <button
                type="submit"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  boxShadow: "2px 2px 5px grey",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </Grid>
      </Box>
      <Box gridColumn="span 6">
        <Grid></Grid>
      </Box>
    </Box>
  );
}

export default Page7;
