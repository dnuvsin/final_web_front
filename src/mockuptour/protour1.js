

function Protour1() {
  return (
    <div className="container">
      <div className="photos">
        <h1 style={{ position: "relative", height: "700px", width: "700px" }}>
          ทัวร์ 4 เกาะทะเลแหวก สปีดโบ
        </h1>
        <img src="pro1.jpg" alt="Tour photo" />
        <img src="pro1.1.jpg" alt="Tour photo" width="50%" />
      </div>
      <div className="tour-details">
        <h1>รายละเอียดทัวร์</h1>

        <dir>
          <ul>
            <li>
              <b style={{ color: "blue" }}>09.00</b> ลูกค้าลงเรือ Speed boat
              สวมเสื้อชูชีพเพื่อปลอดภัย ไกด์อธิบายโปรแกรม
              และออกเดินทางมุ่งหน้าสู่หาดไร่เลย์
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
              <b style={{ color: "blue" }}>12.00</b> เกาะปอดะ
              ลูกค้าพักรับประทานอาหารกลางวัน และพักผ่อนตามอัธยาศัย ถ่ายรูป
              เล่นน้ำหน้าหาด
            </li>
            <br />
            <li>
              <b style={{ color: "blue" }}>13.30</b> ทะเลแหวก Unseen Thailand
              เป็นปรากฎการณ์ทางธรรมชาติ
              เมื่อน้ำลดลงจะเกิดสันทรายที่เชื่อมต่อกันระหว่างเกาะสามเกาะคือ
              เกาะไก่ เกาะทับ และเกาะหม้อ ลูกค้าถ่ายรูป เล่นน้ำ
              ผักผ่อนตามอัธยาศัย
            </li>
            <br />
            <li>
              <b style={{ color: "blue" }}>14.00</b> ออกเดินทางกลับถึงท่าเรือ
              พร้อมส่งลูกค้าเดินทางกลับโดยสวัสดิ์ภาพ
            </li>
            <br />
            <br />
            <p>
              <b style={{ color: "red" }}>
                ***โปรแกรมอาจมีการเปลี่ยนแปลงตามสภาพอากาศในวันนั้นๆ***
              </b>
            </p>
          </ul>
        </dir>

        <div
          className="price-frame"
          style={{ borderColor: "blue", color: "blue", textAlign: "center" }}
        >
          <h2>ราคาต่อคน</h2>
          <p>ผู้ใหญ่ 800 บาทต่อคน</p>
          <p>เด็ก 700 บาทต่อคน</p>
          <p>*ฟรีสำหรับเด็กอายุต่ำกว่า 4 ปี</p>
        </div>

        <form>
          <h2>จองทัวร์</h2>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
          <br />
          <br />
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
          <br />
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
            <option value="10">10 </option>
          </select>
          <br />
          <br />
          <button>
            type="submit" style=
            {{
              backgroundColor: "blue",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              boxShadow: "2px 2px 5px grey",
            }}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Protour1;
