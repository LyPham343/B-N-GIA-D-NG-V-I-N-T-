import Link from "next/link";
import styles from "./footer.module.css"; // hoặc file CSS riêng cho footer

export default function Footer() {
  return (
<div className={styles.footer}>
<div className={styles.footerContainer}>

  {/* Cột 1 */}
  <div className={styles.footerCol}>
    <p>Địa chỉ: RR9 Hồng Lĩnh, Phường Hòa Hưng, TP Hồ Chí Minh</p>
    <p>Mã số thuế: 0315101322</p>
    <p>Mở cửa: 8:15 - 17:00</p>
    <p>Email: lypham16092009@gmail.com</p>
  </div>

  {/* Cột 2 */}
  <div className={styles.footerCol}>
    <h4>VỀ Bán Hàng POS</h4>
    <ul>
      <li>Giới thiệu công ty</li>
      <li>Hợp tác đại lý</li>
      <li>Liên hệ, góp ý</li>
      <li>Tin tức</li>
    </ul>
  </div>

  {/* Cột 3 */}
  <div className={styles.footerCol}>
    <h4>HỖ TRỢ KHÁCH HÀNG</h4>
    <ul>
      <li>Chính sách & quy định</li>
      <li>Hình thức thanh toán</li>
      <li>Tra cứu đơn hàng</li>
      <li>Bảo hành</li>
    </ul>
  </div>

  {/* Cột 4 */}
  <div className={styles.footerCol}>
    <h4>LIÊN HỆ MUA HÀNG</h4>
    <p>Ái Vân: 0786 5555 47</p>
    <p>Sinh: 0908 5555 47</p>
    <p>Ái Việt: 0901 5555 47</p>
  </div>

</div>

<div className={styles.footerBottom}>
  <p>© 2026 lypham.vn</p>
</div>
</div>
  )
}
