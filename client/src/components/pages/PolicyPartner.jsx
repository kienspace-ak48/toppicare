import React from "react";

export default function PolicyPartner() {
  return (
    <div className="policy-page max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        CHÍNH SÁCH HOẠT ĐỘNG & ĐIỀU KHOẢN SỬ DỤNG
      </h1>

      <p className="mb-6">
        <strong>ToppiCare</strong> là nền tảng kết nối khách hàng với dịch vụ
        chăm sóc sức khỏe và sắc đẹp tại nhà. Khi sử dụng ứng dụng, bạn đồng ý
        tuân thủ các điều khoản dưới đây để đảm bảo quyền lợi cho tất cả các
        bên.
      </p>

      {/* I. CHÍNH SÁCH BẢO MẬT */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">I. CHÍNH SÁCH BẢO MẬT</h2>

        <h3 className="text-xl font-semibold mb-2">
          A. Thu thập thông tin cá nhân
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Họ tên, số điện thoại, email, giới tính, địa chỉ.</li>
          <li>
            Thông tin sức khỏe (dị ứng, tim mạch...) để cá nhân hóa dịch vụ.
          </li>
          <li>Thông tin tài khoản, lịch sử đặt lịch, giao dịch.</li>
          <li>
            Thông tin từ mạng xã hội, sự kiện, khảo sát, chương trình khuyến
            mãi.
          </li>
        </ul>
        <p className="mb-4">
          Dữ liệu được mã hóa và lưu trữ an toàn theo quy định của Luật Bảo vệ
          Dữ liệu Cá nhân (NĐ 13/2023/NĐ-CP).
        </p>

        <h3 className="text-xl font-semibold mb-2">
          B. Mục đích sử dụng thông tin
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Cung cấp và cá nhân hóa dịch vụ spa tại nhà.</li>
          <li>Xử lý đặt lịch, thanh toán, hỗ trợ khách hàng.</li>
          <li>Quản lý nội bộ, cải thiện chất lượng dịch vụ.</li>
          <li>Tuân thủ yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          C. Bảo mật và quyền khách hàng
        </h3>
        <ul className="list-disc pl-6">
          <li>
            Không chia sẻ thông tin cá nhân với bên thứ ba trừ khi có sự đồng ý
            hoặc yêu cầu pháp luật.
          </li>
          <li>
            Khách hàng có quyền chỉnh sửa, xóa dữ liệu cá nhân qua tài khoản
            hoặc liên hệ email hỗ trợ.
          </li>
          <li>
            Trường hợp sự cố bảo mật, chúng tôi sẽ thông báo trong vòng 72 giờ.
          </li>
        </ul>
      </section>
    </div>
  );
}
