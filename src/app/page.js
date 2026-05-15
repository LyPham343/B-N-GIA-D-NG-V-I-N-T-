import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.item2}>
        <div className={styles.mainContent}>

          {/* Product 1 */}
          <div className={styles.product}>
            <div className={styles.mainProduct}>

              <div className={styles.productImage}>
                <Link href="/chitietsanpham/1">
                  <Image
                    src="/May-lanh-noi-dia-nhat-Daikin-inverter-chinh-hang-gia-re3.jpg"
                    alt="Product 1"
                    width={160}
                    height={140}
                  />
                </Link>
              </div>

              <div className={styles.productName}>
                <h5>Máy lạnh LG 18000BTU Inverter - IEC18G1</h5>
              </div>

              <div className={styles.productPrice}>
                <strong className={styles.price}>3.800.000₫</strong>

                <span className={styles.discount}>
                  <label className={styles.oldPrice}>4.000.000₫</label>
                  <small className={styles.percent}>-20%</small>
                </span>
              </div>

              <div className={styles.productRemain}>
                <Link href="/chitietsanpham/1" className={styles.detailButton}>
                  Xem chi tiết
                </Link>
              </div>

            </div>

            <div className={styles.buyButton}>
              <Link href="/">Buy</Link>
            </div>
          </div>

          {/* Product 2 */}
          <div className={styles.product}>
            <div className={styles.mainProduct}>

              <div className={styles.productImage}>
                <Link href="/chitietsanpham/2">
                  <Image
                    src="/lo-vi-song-4823 (1).png"
                    alt="Product 2"
                    width={160}
                    height={140}
                  />
                </Link>
              </div>

              <div className={styles.productName}>
                <h5>LÒ VI SÓNG 25L SUNHOUSE SHD4823</h5>
              </div>

              <div className={styles.productPrice}>
                <strong className={styles.price}>1.200.000₫</strong>

                <span className={styles.discount}>
                  <label className={styles.oldPrice}>1.500.000₫</label>
                  <small className={styles.percent}>-20%</small>
                </span>
              </div>

              <div className={styles.productRemain}>
                <Link href="/chitietsanpham/2" className={styles.detailButton}>
                  Xem chi tiết
                </Link>
              </div>

            </div>

            <div className={styles.buyButton}>
              <Link href="/">Buy</Link>
            </div>
          </div>

          {/* Product 3 */}
          <div className={styles.product}>
            <div className={styles.mainProduct}>

              <div className={styles.productImage}>
                <Link href="/chitietsanpham/3">
                  <Image
                    src="/dell_latitude_gaming_laptop_in_1699869218_3df1c162_progressive.jpg"
                    alt="Product 3"
                    width={160}
                    height={140}
                  />
                </Link>
              </div>

              <div className={styles.productName}>
                <h5>
                  DELL LATITUDE GAMING LAPTOP INTEL CORE i5 8TH GEN 16GB RAM
                  256GB SSD 1.60Ghz
                </h5>
              </div>

              <div className={styles.productPrice}>
                <strong className={styles.price}>10.100.000₫</strong>

                <span className={styles.discount}>
                  <label className={styles.oldPrice}>11.000.000₫</label>
                  <small className={styles.percent}>-20%</small>
                </span>
              </div>

              <div className={styles.productRemain}>
                <Link href="/chitietsanpham/3" className={styles.detailButton}>
                  Xem chi tiết
                </Link>
              </div>

            </div>

            <div className={styles.buyButton}>
              <Link href="/">Buy</Link>
            </div>
          </div>

          {/* Product 4 */}
          <div className={styles.product}>
            <div className={styles.mainProduct}>

              <div className={styles.productImage}>
                <Link href="/chitietsanpham/4">
                  <Image
                    src="/iphone-17-pro-orange-1753603022312-1753603022574146821400.webp"
                    alt="Product 4"
                    width={160}
                    height={140}
                  />
                </Link>
              </div>

              <div className={styles.productName}>
                <h5>iPhone 17 Pro Max</h5>
              </div>

              <div className={styles.productPrice}>
                <strong className={styles.price}>29.600.000₫</strong>

                <span className={styles.discount}>
                  <label className={styles.oldPrice}>37.000.000₫</label>
                  <small className={styles.percent}>-20%</small>
                </span>
              </div>

              <div className={styles.productRemain}>
                <Link href="/chitietsanpham/4" className={styles.detailButton}>
                  Xem chi tiết
                </Link>
              </div>

            </div>

            <div className={styles.buyButton}>
              <Link href="/">Buy</Link>
            </div>
          </div>

          {/* Product 5 */}
          <div className={styles.product}>
            <div className={styles.mainProduct}>

              <div className={styles.productImage}>
                <Link href="/chitietsanpham/5">
                  <Image
                    src="/10056278-may-giat-toshiba-inverter-12kg-aw-duk1300kv-mk-1.jpg"
                    alt="Product 5"
                    width={160}
                    height={140}
                  />
                </Link>
              </div>

              <div className={styles.productName}>
                <h5>Máy giặt Toshiba Inverter 12 kg AW-DUK1300KV</h5>
              </div>

              <div className={styles.productPrice}>
                <strong className={styles.price}>7.600.000₫</strong>

                <span className={styles.discount}>
                  <label className={styles.oldPrice}>10.000.000₫</label>
                  <small className={styles.percent}>-20%</small>
                </span>
              </div>

              <div className={styles.productRemain}>
                <Link href="/chitietsanpham/5" className={styles.detailButton}>
                  Xem chi tiết
                </Link>
              </div>

            </div>

            <div className={styles.buyButton}>
              <Link href="/">Buy</Link>
            </div>
          </div>

          {/* Product 6 */}
          <div className={styles.product}>
            <div className={styles.mainProduct}>

              <div className={styles.productImage}>
                <Link href="/chitietsanpham/6">
                  <Image
                    src="/May-loc-nuoc-KG-09A3.jpg"
                    alt="Product 6"
                    width={160}
                    height={140}
                  />
                </Link>
              </div>

              <div className={styles.productName}>
                <h5>Máy lọc nước Kangaroo nóng lạnh KG10A3</h5>
              </div>

              <div className={styles.productPrice}>
                <strong className={styles.price}>2.400.000₫</strong>

                <span className={styles.discount}>
                  <label className={styles.oldPrice}>3.000.000₫</label>
                  <small className={styles.percent}>-20%</small>
                </span>
              </div>

              <div className={styles.productRemain}>
                <Link href="/chitietsanpham/6" className={styles.detailButton}>
                  Xem chi tiết
                </Link>
              </div>

            </div>

            <div className={styles.buyButton}>
              <Link href="/">Buy</Link>
            </div>
          </div>

          {/* Product 7 */}
          <div className={styles.product}>
            <div className={styles.mainProduct}>

              <div className={styles.productImage}>
                <Link href="/chitietsanpham/7">
                  <Image
                    src="/OIP.webp"
                    alt="Product 7"
                    width={160}
                    height={140}
                  />
                </Link>
              </div>

              <div className={styles.productName}>
                <h5>Máy Cưa Xích Cầm Tay Mini Pin 199V</h5>
              </div>

              <div className={styles.productPrice}>
                <strong className={styles.price}>800.000₫</strong>

                <span className={styles.discount}>
                  <label className={styles.oldPrice}>1.000.000₫</label>
                  <small className={styles.percent}>-20%</small>
                </span>
              </div>

              <div className={styles.productRemain}>
                <Link href="/chitietsanpham/7" className={styles.detailButton}>
                  Xem chi tiết
                </Link>
              </div>

            </div>

            <div className={styles.buyButton}>
              <Link href="/">Buy</Link>
            </div>
          </div>

          {/* Product 8 */}
          <div className={styles.product}>
            <div className={styles.mainProduct}>

              <div className={styles.productImage}>
                <Link href="/chitietsanpham/8">
                  <Image
                    src="/Quat-dieu-hoa-hoi-nuoc-kosmo-ak12000-11.webp"
                    alt="Product 8"
                    width={160}
                    height={140}
                  />
                </Link>
              </div>

              <div className={styles.productName}>
                <h5>Quạt điều hòa Kangaroo KG50F103 130W</h5>
              </div>

              <div className={styles.productPrice}>
                <strong className={styles.price}>3.300.000₫</strong>

                <span className={styles.discount}>
                  <label className={styles.oldPrice}>4.100.000₫</label>
                  <small className={styles.percent}>-20%</small>
                </span>
              </div>

              <div className={styles.productRemain}>
                <Link href="/chitietsanpham/8" className={styles.detailButton}>
                  Xem chi tiết
                </Link>
              </div>

            </div>

            <div className={styles.buyButton}>
              <Link href="/">Buy</Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}