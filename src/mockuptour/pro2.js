function Pro2() {
  return (
    <div className="container">
      <div className="photos">
        <h1 style={{ position: "relative", height: "700px", width: "700px" }}>
          เรือสปีดโบ๊ท : ทัวร์เกาะพีพี
        </h1>
        <img src="./pro2.jpg" alt="Tour photo" />
        <img src="./pro2.1.jpg" alt="Tour photo" width="50%" />
        <img src="./pro2.3.jpg" alt="Tour photo" width="50%" />
      </div>
      <div className="tour-details">
        <h1>รายละเอียดทัวร์</h1>

        <dir>
          <li>
            <b style={{ color: "blue" }}>09.00</b> ลูกค้าลงเรือ สปีดโบ๊ท
            สวมเสื้อชูชีพเพื่อความปลอดภัย
            ไกด์อธิบายรายละเอียดโปรแกรมพร้อมมุ่งหน้าสู่ หมู่เกาะพีพี
          </li>
          <br />
          <li>
            <b style={{ color: "blue" }}>10.00</b> เดินทางถึง เกาะพีพีเล
            เป็นส่วนหนึ่งของหมู่เกาะพีพี
          </li>
          <br />
          <li>
            <b style={{ color: "blue" }}>11.00</b> ลูกค้าเล่นน้ำ ดูลิงที่อ่าวลิง
            หรือ อ่าวสามหาด เป็นอ่าวที่อุดมสมบูรณ์ไปด้วยปะการังนานาชนิด
            และปลาชนิดต่างๆ
          </li>
          <br />
          <li>
            <b style={{ color: "blue" }}>12.00</b> เกาะพีพีดอน
            รับประทานอาหารกลางวัน และลูกค้าพักผ่อนตามอัธยาศัย ช็อปปิ้ง ถ่ายรูป
            เล่นน้ำหน้าหาด
          </li>
          <br />
          <li>
            <b style={{ color: "blue" }}>13.30</b> อ่าวรันตี หรือ เกาะยุง
            ลูกค้าเล่นน้ำ ทุกท่านจะได้พบกับความอุดมสมบูรณ์ของป่าปะการัง
            และปลาสวยงามหลากหลายสายพันธุ์
          </li>
          <br />
          <li>
            <b style={{ color: "blue" }}>14.00</b> เกาะไผ่ หรือ แบมบูไอแลนด์
            เป็นเกาะที่มีชายหาดขาวนวลละเอียดทอดยาว เงียบสงบ
            และมีปะการังหน้าหาดเป็นแนวยาวได้รับ
          </li>
          <br />
          <li>
            <b style={{ color: "blue" }}>14.00</b> เดินทางกลับสู่ท่าเรือ
            พร้อมส่งทุกท่านกลับที่พักโดยสวัสดิ์ภาพ
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
            กรณีทางอุทยานแห่งชาติ แจ้งเรือออกไม่ได้ เนื่องจากพายุ หรือลมมรสุม
            เรายินดีคืนเงิน 100 %
          </p>
          <ul />
        </dir>

        <div
          className="price-frame"
          style={{ borderColor: "blue", color: "blue", textAlign: "center" }}
        >
          <h2>ราคาต่อคน</h2>
          <p>ผู้ใหญ่ 1150 บาทต่อคน</p>
          <p>เด็ก 1050 บาทต่อคน</p>
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
    </div>
  );
}

export default Pro2;
