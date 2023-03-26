import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Box from "@mui/material/Box";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./page.css";

function Page6() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 12">
        <Grid>
          <div className="headder">
            <h1 style={{ margin: "auto" }}>สระมรกต , น้ำตกร้อน , วัดถ้ำเสือ</h1>
          </div>
        </Grid>
      </Box>
      <Box gridColumn="span 6">
        <Grid>
          <div className="photos">
            <img
              src="https://www.pmandamantour.com/uploads/package/album/pic-361246118608.jpg"
              alt="Tour photo"
              style={{ width: "100%", height: "700 px" }}
            />
            <img
              src="https://www.pmandamantour.com/uploads/package/album/pic-361116785841.jpg"
              alt="Tour photo"
              style={{ width: "50%" }}
            />
            <img
              src="https://www.pmandamantour.com/uploads/package/album/pic-361219569627.jpg"
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
                <b style={{ color: "blue" }}>09.00</b> ออกเดินทางไปยัง
                อ.คลองท่อม
              </li>
              <br />
              <li>
                <b style={{ color: "blue" }}>10.00</b> เดินทางถึง อ.คลองท่อม
                ถิ่นกำเนิดนกแต้วแร้วท้องดำ เป็นฝูงสุดท้ายของโลก และปลายทางคือ
                สระมรกต Unseen Thailand นำท่านเล่นน้ำ ที่มีสระน้ำเป็นสีเขียวมรกต
                ที่เกิดขึ้นตามธรรมชาติ หากท่านมีเวลา
                ท่านสามารถเดินขึ้นไปยังต้นกำเนิดของสระมรกต ที่เรียกว่า “
                สระน้ำผุด ” สระน้ำที่มีสีเขียวสวยงาม รอบๆ
                บริเวณเป็นป่าร่มรื่นเขียวครึ้มมีพรรณไม้ที่น่าสนใจจากที่จอดรถเดินทางเท้าเข้ามาประมาณ
                800 เมตร จะถึงตัวสระมรกต หรือจะไปอีกทางที่เป็นเส้นทางศึกษา
                ธรรมชาติที่มีระยะทางประมาณ 2.7 กิโลเมตร
                แต่ไม่ว่าจะเดินไปทางไหนก็จะมาบรรจบกันที่สระมรกตที่เดียวกัน
              </li>
              <br />
              <li>
                <b style={{ color: "blue" }}>11.00</b> แวะรับประทานอาหารกลางวัน
                ( หากกรณีที่ลุกค้าเหมาถส่วนตัวไป จะไม่รวมค่าอาหารและค่าอุทยาน )
              </li>
              <br />
              <li>
                <b style={{ color: "blue" }}>12.00</b> นำทุกท่านเดินทางต่อไปยัง
                " น้ำตกร้อน " นับเป็นหนึ่งในแหล่งท่องเที่ยว Unseen Thailand
                อีกแห่งหนึ่งของจังหวัดกระบี่ เป็นอ่างอาบน้ำธรรมชาติกลางป่า
                รองรับสายน้ำตกที่ไหลหลั่นลงมาจากเนินเขา
                สายน้ำแร่ที่ไหลมาพร้อมๆกับไออุ่นเพื่อสุขภาพโดยเฉพาะ
                มีลักษณะเป็นธารน้ำพุร้อนผุด ขึ้นมาจากใต้ดินตามธรรมชาติ
              </li>
              <br />
              <li>
                <b style={{ color: "blue" }}>14.30</b> หลังจากนั้นเดินทางสู่ "
                วัดถ้ำเสือ " เพื่อนำท่านนมัสการพระอาจารย์จำเนียร
                และกราบไหว้เจ้าแม่กวนอิม อันเป็นที่เคารพบูชาของคนในกระบี่
                ท่านสามารถเดินชมบริเวณวัดได้ตามอัธยาศัย
              </li>
              <br />
              <li>
                <b style={{ color: "blue" }}>17.00</b> ถึงเวลานำท่านเดินทาง
                กลับที่พักโดยสวัสดิภาพ
              </li>
              <br />

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
            <p>ผู้ใหญ่ 1050 บาทต่อคน</p>
            <p>เด็ก 800 บาทต่อคน</p>
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

export default Page6;
