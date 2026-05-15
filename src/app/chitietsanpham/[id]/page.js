"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import styles from "./page.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const products = [
  {
    id: 1,
    name: "Máy lạnh LG 18000BTU Inverter - IEC18G1",
    price: "3.800.000",
    images: [
      "/May-lanh-noi-dia-nhat-Daikin-inverter-chinh-hang-gia-re3.jpg",
      "/maylanh1.jpg"
    ],
    desc: "Máy lạnh LG inverter tiết kiệm điện, làm lạnh nhanh, vận hành êm ái.",
    brand: "LG",
    warranty: "24 tháng",
    features: ["Inverter tiết kiệm điện", "Làm lạnh nhanh", "Hoạt động êm ái"],
    details: `Phù hợp phòng 20–30m²

✔ Tiết kiệm điện 60%
✔ Làm lạnh nhanh
✔ Vận hành êm ái`
  },

  {
    id: 2,
    name: "Lò vi sóng 25L Sunhouse SHD4823",
    price: "1.200.000",
    images: [
      "/lo-vi-song-4823 (1).png",
      "/lo vi song 1.jpg"
    ],
    desc: "Lò vi sóng dung tích 25L, phù hợp gia đình nhỏ.",
    brand: "Sunhouse",
    warranty: "12 tháng",
    features: ["Dung tích 25L", "Nhiều chế độ nấu", "Dễ sử dụng"],
    details: `✔ Hâm nóng nhanh
✔ Nấu đa chức năng
✔ Tiết kiệm thời gian`
  },

  {
    id: 3,
    name: "Dell Latitude Gaming Laptop i5 8th Gen",
    price: "10.100.000",
    images: [
      "/dell_latitude_gaming_laptop_in_1699869218_3df1c162_progressive.jpg",
      "/laptop1.jpg"
    ],
    desc: "Laptop cấu hình mạnh, phù hợp học tập và gaming nhẹ.",
    brand: "Dell",
    warranty: "12 tháng",
    features: ["RAM 16GB", "SSD 256GB", "CPU i5 Gen 8"],
    details: `✔ Học tập & gaming nhẹ
✔ Hiệu năng ổn định
✔ Bền bỉ`
  },

  {
    id: 4,
    name: "iPhone 17 Pro Max",
    price: "29.600.000",
    images: [
      "/iphone-17-pro-orange-1753603022312-1753603022574146821400.webp",
      "/Ip17.webp"
    ],
    desc: "Điện thoại cao cấp với hiệu năng mạnh và camera đỉnh cao.",
    brand: "Apple",
    warranty: "12 tháng",
    features: ["Camera xịn", "Chip mạnh", "Màn hình đẹp"],
    details: `✔ Chip siêu mạnh
✔ Camera pro
✔ Màn hình OLED`
  },

  {
    id: 5,
    name: "Máy giặt Toshiba Inverter 12kg",
    price: "7.600.000",
    images: [
      "/10056278-may-giat-toshiba-inverter-12kg-aw-duk1300kv-mk-1.jpg",
      "/maygiat.jpg"
    ],
    remain: "còn 4/10 sản phẩm",
    desc: "Máy giặt dung tích lớn, tiết kiệm điện nước.",
    brand: "Toshiba",
    warranty: "24 tháng",
    features: ["12kg", "Inverter", "Tiết kiệm nước"],
    details: `✔ Giặt êm
✔ Tiết kiệm nước
✔ Bền bỉ`
  },

  {
    id: 6,
    name: "Máy lọc nước Kangaroo KG10A3",
    price: "2.400.000",
    images: [
      "/May-loc-nuoc-KG-09A3.jpg",
      "/maylocnuoc.jpg"
    ],
    desc: "Máy lọc nước nóng lạnh tiện lợi cho gia đình.",
    brand: "Kangaroo",
    warranty: "12 tháng",
    features: ["Nóng lạnh", "Lọc sạch", "An toàn"],
    details: `✔ Lọc RO
✔ Nước sạch an toàn
✔ Dùng gia đình`
  },

  {
    id: 7,
    name: "Máy cưa xích mini pin 199V",
    price: "800.000",
    images: [
      "/OIP.webp",
      "/maycua.png"
    ],
    desc: "Máy cưa mini tiện dụng cho gia đình và làm vườn.",
    brand: "OEM",
    warranty: "6 tháng",
    features: ["Nhỏ gọn", "Pin mạnh", "Dễ sử dụng"],
    details: `✔ Cắt gỗ nhẹ
✔ Dùng pin tiện lợi
✔ Gọn nhẹ`
  },

  {
    id: 8,
    name: "Quạt điều hòa Kangaroo KG50F103",
    price: "3.300.000",
    images: [
      "/Quat-dieu-hoa-hoi-nuoc-kosmo-ak12000-11.webp",
      "/quat.webp"
    ],
    desc: "Quạt điều hòa công suất lớn, làm mát hiệu quả.",
    brand: "Kangaroo",
    warranty: "12 tháng",
    features: ["130W", "Làm mát nhanh", "Tiết kiệm điện"],
    details: `✔ Làm mát nhanh
✔ Tiết kiệm điện
✔ Phù hợp phòng lớn`
  }
];

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id?.toString();

  const product = products.find(
    (p) => p.id.toString() === id
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
  
  }, [id]);

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  const images = product.images;

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.container}>
      <Header />

      <Link href="/" className={styles.backLink}>
        ← QUAY LẠI TRANG CHỦ
      </Link>

      <div className={styles.productWrapper}>

        {/* IMAGE SLIDER */}
        <div className={styles.imageColumn}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <button onClick={prev}>❮</button>

            <Image
              src={images[index]}
              width={500}
              height={500}
              alt={product.name}
              className={styles.productImage}
              priority
            />

            <button onClick={next}>❯</button>
          </div>
        </div>

        {/* INFO */}
        <div className={styles.infoColumn}>
          <span className={styles.brandName}>
            {product.brand}
          </span>

          <h1 className={styles.productName}>
            {product.name}
          </h1>

          <div className={styles.priceTag}>
            {product.price} VNĐ
          </div>

          <div className={styles.description}>
            <span className={styles.stockStatus}>
              <strong>Tình trạng:</strong>{" "}
              {product.remain || "Còn hàng"}
            </span>

            <p>{product.desc}</p>
          </div>

          <div className={styles.specBox}>
            <h3 className={styles.specTitle}>
              Thông số chi tiết
            </h3>

            <p>
              <strong>Bảo hành:</strong>{" "}
              {product.warranty}
            </p>

            <p
              style={{
                marginTop: "10px",
                fontWeight: "bold"
              }}
            >
              Đặc điểm nổi bật:
            </p>

            <ul className={styles.featureList}>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div
              className={styles.productDetailsArea}
              style={{
                marginTop: "15px",
                paddingTop: "15px",
                borderTop: "1px solid #eee"
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "5px"
                }}
              >
                Mô tả sản phẩm:
              </p>

              <div
                style={{
                  whiteSpace: "pre-line",
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: "1.6"
                }}
              >
                {product.details}
              </div>
            </div>
          </div>

          <button className={styles.buyButton}>
            MUA NGAY
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}