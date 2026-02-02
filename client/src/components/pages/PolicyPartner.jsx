import React from "react";

export default function PolicyPartner() {
  return (
    <div className="policy-page max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        CHÍNH SÁCH & ĐIỀU KHOẢN SỬ DỤNG ỨNG DỤNG TOPPICARE
      </h1>

      {/* 1. NGUYÊN TẮC CHUNG */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          1. NGUYÊN TẮC CHUNG
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>ToppiCare là nền tảng công nghệ kết nối khách hàng với kỹ thuật viên cung cấp dịch vụ spa massage và chăm sóc sức khỏe tại nhà.</li>
          <li>Kỹ thuật viên tham gia hệ thống với vai trò cộng tác viên/đối tác cung cấp dịch vụ, thực hiện dịch vụ theo quy trình và tiêu chuẩn vận hành của ToppiCare.</li>
          <li>Việc đăng nhập và sử dụng ứng dụng ToppiCare đồng nghĩa với việc kỹ thuật viên đã đọc, hiểu và đồng ý với toàn bộ Chính sách và Điều khoản này.</li>
        </ul>
      </section>

      {/* 2. PHẠM VI ÁP DỤNG */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          2. PHẠM VI ÁP DỤNG
        </h2>
        <p className="mb-2">Chính sách này áp dụng cho:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Tất cả KTV đăng ký, được phê duyệt và hoạt động trên nền tảng ToppiCare;</li>
          <li>Các hoạt động liên quan đến việc nhận đơn, thực hiện dịch vụ, thanh toán, đánh giá và xử lý khiếu nại;</li>
          <li>Các quy định nội bộ, quy trình vận hành, tiêu chuẩn chuyên môn do ToppiCare ban hành.</li>
        </ul>
      </section>

      {/* 3. ĐIỀU KIỆN ĐĂNG KÝ VÀ DUY TRÌ TƯ CÁCH KỸ THUẬT VIÊN */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          3. ĐIỀU KIỆN ĐĂNG KÝ VÀ DUY TRÌ TƯ CÁCH KỸ THUẬT VIÊN
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          3.1. Điều kiện đăng ký
        </h3>
        <p className="mb-2">KTV phải đáp ứng đầy đủ các điều kiện sau:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Từ 18 tuổi trở lên, có đầy đủ năng lực hành vi dân sự theo quy định pháp luật;</li>
          <li>Có chứng chỉ, bằng cấp, đào tạo nghề hoặc kinh nghiệm thực tế phù hợp với dịch vụ đăng ký;</li>
          <li>Có sức khỏe phù hợp để thực hiện dịch vụ tại nhà;</li>
          <li>Cung cấp thông tin cá nhân trung thực, chính xác (CMND/CCCD, thông tin liên hệ, lý lịch nghề nghiệp nếu được yêu cầu);</li>
          <li>Cam kết tuân thủ quy trình chuyên môn, tiêu chuẩn an toàn, đạo đức nghề nghiệp và văn hóa ứng xử của ToppiCare.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          3.2. Duy trì tư cách kỹ thuật viên
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>KTV phải thường xuyên cập nhật thông tin cá nhân khi có thay đổi;</li>
          <li>Duy trì chất lượng dịch vụ, điểm đánh giá và tỷ lệ hoàn thành đơn theo tiêu chuẩn ToppiCare;</li>
          <li>Tuân thủ các chính sách cập nhật mới được công bố trên ứng dụng.</li>
          <li>ToppiCare có quyền tạm ngừng hoặc chấm dứt tư cách KTV nếu KTV không còn đáp ứng điều kiện hoặc vi phạm chính sách.</li>
        </ul>
      </section>

      {/* 4. TÀI KHOẢN KỸ THUẬT VIÊN */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          4. TÀI KHOẢN KỸ THUẬT VIÊN
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          4.1. Cấp và quản lý tài khoản
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Kỹ thuật viên (KTV) bắt buộc tham gia và hoàn thành chương trình đào tạo, đánh giá chuyên môn và quy trình dịch vụ do ToppiCare tổ chức;</li>
          <li>Chỉ những KTV đạt yêu cầu và được ToppiCare phê duyệt chính thức mới được cấp tài khoản sử dụng ứng dụng ToppiCare;</li>
          <li>Tài khoản KTV do ToppiCare (Admin) trực tiếp tạo và cấp;</li>
          <li>Mỗi KTV chỉ được cấp một (01) tài khoản duy nhất tương ứng với một hồ sơ đã được xét duyệt;</li>
          <li>KTV không được tự ý thay đổi các thông tin định danh, chuyên môn, phạm vi dịch vụ khi chưa được Admin phê duyệt;</li>
          <li>KTV chịu trách nhiệm bảo mật thông tin đăng nhập và mọi hoạt động phát sinh từ tài khoản được cấp.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          4.2. Đình chỉ, thu hồi và khóa tài khoản
        </h3>
        <p className="mb-2">ToppiCare có quyền tạm ngừng, thu hồi hoặc khóa tài khoản KTV trong các trường hợp:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>KTV không còn đáp ứng điều kiện hoạt động;</li>
          <li>Có hành vi vi phạm chính sách, quy trình hoặc đạo đức nghề nghiệp;</li>
          <li>Có khiếu nại nghiêm trọng, ảnh hưởng đến uy tín nền tảng;</li>
          <li>Phát hiện gian lận, giả mạo thông tin;</li>
          <li>Có yêu cầu từ cơ quan nhà nước có thẩm quyền.</li>
        </ul>
      </section>

      {/* 5. QUYỀN VÀ TRÁCH NHIỆM CỦA KỸ THUẬT VIÊN */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          5. QUYỀN VÀ TRÁCH NHIỆM CỦA KỸ THUẬT VIÊN
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          5.1. Quyền của KTV
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Sử dụng ứng dụng ToppiCare để nhận và quản lý đơn dịch vụ;</li>
          <li>Chủ động nhận hoặc từ chối đơn phù hợp với lịch làm việc;</li>
          <li>Nhận thù lao dịch vụ theo chính sách hiện hành;</li>
          <li>Gửi phản ánh, kiến nghị, khiếu nại liên quan đến khách hàng, đơn hàng hoặc hệ thống.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          5.2. Trách nhiệm của KTV
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Thực hiện dịch vụ đúng mô tả, đúng quy trình, đúng thời gian;</li>
          <li>Chuẩn bị đầy đủ dụng cụ, trang phục, đảm bảo vệ sinh và an toàn;</li>
          <li>Kiểm tra tình trạng sức khỏe khách hàng trước khi thực hiện dịch vụ;</li>
          <li>Từ chối phục vụ nếu khách hàng thuộc nhóm chống chỉ định đã được ToppiCare công bố;</li>
          <li>Giữ thái độ chuyên nghiệp, tôn trọng quyền riêng tư khách hàng;</li>
          <li>Không tự ý thu phí, nhận tiền ngoài ứng dụng khi chưa được cho phép.</li>
        </ul>
      </section>

      {/* 6. QUY ĐỊNH NHẬN ĐƠN VÀ THỰC HIỆN DỊCH VỤ */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          6. QUY ĐỊNH NHẬN ĐƠN VÀ THỰC HIỆN DỊCH VỤ
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>KTV chỉ được nhận đơn thông qua hệ thống ToppiCare;</li>
          <li>Sau khi nhận đơn, KTV phải có mặt đúng giờ, đúng địa điểm;</li>
          <li>Trường hợp không thể thực hiện, phải hủy đơn sớm theo quy định;</li>
          <li>Nghiêm cấm chuyển nhượng đơn hoặc giao dịch riêng với khách hàng.</li>
        </ul>
      </section>

      {/* 7. THU NHẬP VÀ VÍ TIỀN KỸ THUẬT VIÊN */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          7. THU NHẬP VÀ VÍ TIỀN KỸ THUẬT VIÊN
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          7.1. Thu nhập của KTV
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Thu nhập của KTV phát sinh từ việc hoàn thành các đơn dịch vụ trên nền tảng ToppiCare;</li>
          <li>Mức thu nhập cho từng dịch vụ được hiển thị rõ ràng trên ứng dụng trước khi KTV nhận đơn;</li>
          <li>Thu nhập thực nhận của KTV được tính sau khi trừ các khoản chiết khấu, phí nền tảng (nếu có) theo chính sách công bố từng thời kỳ.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          7.2. Ví tiền KTV
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Mỗi KTV được cấp một ví tiền điện tử nội bộ trên ứng dụng ToppiCare;</li>
          <li>Ví tiền ghi nhận toàn bộ thu nhập, thưởng, điều chỉnh tăng/giảm liên quan đến hoạt động của KTV;</li>
          <li>Thời điểm đối soát và rút tiền được thực hiện theo lịch do ToppiCare quy định;</li>
          <li>ToppiCare có quyền tạm giữ hoặc điều chỉnh số dư ví tiền trong trường hợp phát sinh khiếu nại, tranh chấp hoặc vi phạm chính sách.</li>
        </ul>
      </section>

      {/* 8. HỦY ĐƠN VÀ XỬ LÝ VI PHẠM */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          8. HỦY ĐƠN VÀ XỬ LÝ VI PHẠM
        </h2>
        <p className="mb-4">
          Kỹ thuật viên được phép hủy đơn trong phạm vi số lần và khung thời gian cho phép.
        </p>
        <p className="mb-2">Các trường hợp hủy đơn vượt quá quy định, hủy không đúng quy trình hoặc gây ảnh hưởng đến trải nghiệm khách hàng có thể bị:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Trừ điểm hoặc trừ tiền ví</li>
          <li>Hạn chế quyền nhận đơn</li>
          <li>Tạm ngưng hoặc chấm dứt quyền sử dụng tài khoản</li>
        </ul>
        <p>Chi tiết áp dụng theo Chính sách hủy đơn của ToppiCare.</p>
      </section>

      {/* 9. TRANG PHỤC, DỤNG CỤ VÀ TIÊU CHUẨN TÁC PHONG */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          9. TRANG PHỤC, DỤNG CỤ VÀ TIÊU CHUẨN TÁC PHONG
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          9.1. Trang phục KTV
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>KTV bắt buộc mặc đồng phục do ToppiCare quy định trong suốt quá trình thực hiện dịch vụ;</li>
          <li>Trang phục phải sạch sẽ, gọn gàng, lịch sự và đúng nhận diện thương hiệu;</li>
          <li>Không sử dụng trang phục phản cảm, không phù hợp với môi trường dịch vụ tại nhà khách hàng.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          9.2. Dụng cụ và vật tư
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>KTV phải chuẩn bị đầy đủ dụng cụ, vật tư cần thiết cho từng dịch vụ theo tiêu chuẩn ToppiCare;</li>
          <li>Dụng cụ phải đảm bảo vệ sinh, an toàn, được làm sạch hoặc thay mới theo quy định;</li>
          <li>Đối với vật tư dùng một lần, KTV không được tái sử dụng dưới mọi hình thức;</li>
          <li>ToppiCare có quyền kiểm tra đột xuất trang phục và dụng cụ của KTV.</li>
        </ul>
      </section>

      {/* 10. XỬ LÝ VI PHẠM */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          10. XỬ LÝ VI PHẠM
        </h2>
        <p className="mb-2">Tùy mức độ vi phạm, ToppiCare có thể áp dụng:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nhắc nhở, cảnh cáo;</li>
          <li>Giới hạn hoặc tạm khóa tài khoản;</li>
          <li>Chấm dứt tư cách KTV vĩnh viễn;</li>
          <li>Phối hợp cơ quan chức năng nếu có dấu hiệu vi phạm pháp luật.</li>
        </ul>
      </section>

      {/* 11. BẢO MẬT THÔNG TIN */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          11. BẢO MẬT THÔNG TIN
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Thông tin cá nhân, thông tin tài khoản và dữ liệu hoạt động của kỹ thuật viên được bảo mật theo quy định pháp luật hiện hành.</li>
          <li>Kỹ thuật viên có trách nhiệm cung cấp thông tin chính xác; ToppiCare không chịu trách nhiệm đối với các phát sinh do thông tin sai lệch.</li>
        </ul>
      </section>

      {/* 12. GIỚI HẠN TRÁCH NHIỆM */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          12. GIỚI HẠN TRÁCH NHIỆM
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>ToppiCare cam kết xây dựng hệ thống vận hành và hỗ trợ kỹ thuật viên trong phạm vi nền tảng.</li>
          <li>ToppiCare không chịu trách nhiệm đối với các giao dịch, thỏa thuận hoặc hành vi phát sinh ngoài ứng dụng.</li>
          <li>Kỹ thuật viên chịu trách nhiệm pháp lý đối với các hành vi vi phạm pháp luật trong quá trình cung cấp dịch vụ.</li>
        </ul>
      </section>

      {/* 13. THAY ĐỔI VÀ HIỆU LỰC TÀI KHOẢN */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          13. THAY ĐỔI VÀ HIỆU LỰC TÀI KHOẢN
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>ToppiCare có quyền sửa đổi, bổ sung Chính sách và Điều khoản khi cần thiết.</li>
          <li>Các sửa đổi sẽ có hiệu lực kể từ thời điểm được đăng tải trên ứng dụng ToppiCare.</li>
          <li>Việc kỹ thuật viên tiếp tục sử dụng ứng dụng sau thời điểm cập nhật được xem là đã đồng ý với các thay đổi này.</li>
        </ul>
      </section>

      {/* FOOTER */}
      <section className="border-t pt-6 text-sm text-gray-600">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          14. LIÊN HỆ VÀ HỖ TRỢ
        </h3>
        <p className="mb-2">Mọi thắc mắc, khiếu nại hoặc yêu cầu hỗ trợ, kỹ thuật viên vui lòng liên hệ bộ phận quản lý ToppiCare qua các kênh sau:</p>
        <p>
          <strong>Tel:</strong> 0862.4848.98
        </p>
        <p>
          <strong>Email:</strong> info@toppicare.vn
        </p>
        <p className="mt-2 italic">
          Cập nhật lần cuối: 30/01/2026
        </p>
      </section>
      {/* <div class="mt-10 backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl p-8"><h3 class="text-xl mb-4 text-gray-800">Lưu ý quan trọng</h3><div class="space-y-3 text-gray-600"><p>• Các chính sách trên có thể được cập nhật theo thời gian. Mọi thay đổi sẽ được thông báo trước.</p><p>• Nếu có bất kỳ thắc mắc nào về chính sách, vui lòng liên hệ hotline: 1900 xxxx</p><p>• ToppiCare có quyền giải thích cuối cùng về các chính sách này.</p></div></div> */}

    </div>
  );
}
