import React from "react";

export default function PolicyPage() {
  return (
    <div className="policy-page max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        CHÍNH SÁCH HOẠT ĐỘNG & ĐIỀU KHOẢN SỬ DỤNG
      </h1>

      <p className="mb-6">
        <strong>NGUYÊN TẮC CHUNG</strong><br />
        ToppiCare là nền tảng kết nối khách hàng với dịch vụ chăm sóc sức khỏe và
        sắc đẹp tại nhà, mang đến trải nghiệm cá nhân hóa, an toàn và cao cấp.
        Khi sử dụng, bạn đồng ý tuân thủ các điều khoản để đảm bảo quyền lợi cho
        tất cả các bên.
      </p>

      {/* I. CHÍNH SÁCH BẢO MẬT */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          I. CHÍNH SÁCH BẢO MẬT
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          A. Thu thập Thông tin Cá nhân
        </h3>
        <p className="mb-4">
          Thông tin Cá nhân là thông tin về khách hàng mang tính nhận dạng, bao
          gồm nhưng không giới hạn:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Họ tên, số điện thoại, email, giới tính, địa chỉ.</li>
          <li>
            Thông tin sức khỏe (dị ứng, tim mạch...) để cá nhân hóa dịch vụ spa tại
            nhà.
          </li>
          <li>Thông tin tài khoản, lịch sử đặt lịch, giao dịch.</li>
          <li>
            Thông tin từ mạng xã hội (nếu khách hàng theo dõi), sự kiện, khảo sát,
            hoặc chương trình khuyến mãi do chúng tôi tổ chức.
          </li>
        </ul>
        <p className="mb-4">
          Thông tin được mã hóa, lưu trữ an toàn, tuân thủ Luật Bảo vệ Dữ liệu Cá
          nhân (NĐ 13/2023/NĐ-CP). Việc cung cấp thông tin là tự nguyện, nhưng nếu
          không cung cấp, chúng tôi có thể không thể cá nhân hóa dịch vụ hoặc xử
          lý yêu cầu của khách hàng.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          B. Mục đích và phạm vi sử dụng thông tin
        </h3>
        <p className="mb-2 font-medium">Phạm vi thu thập thông tin</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Họ tên, số điện thoại, email, giới tính, địa chỉ, thông tin sức khỏe (dị ứng, tim mạch...).</li>
          <li>Mạng xã hội (nếu khách hàng theo dõi), sự kiện, khảo sát.</li>
        </ul>
        
        <p className="mb-2 font-medium">Mục đích sử dụng</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Cung cấp dịch vụ spa:</strong>
            <ul className="list-circle pl-6 mt-1">
              <li>Cá nhân hóa dịch vụ dựa trên thông tin sức khỏe (VD: gợi ý massage phù hợp).</li>
              <li>Xử lý đặt lịch, thanh toán, hỗ trợ dịch vụ spa tại nhà.</li>
              <li>Xác minh tài khoản, theo dõi ưu đãi.</li>
            </ul>
          </li>
          <li>
            <strong>Quản lý và cải thiện dịch vụ:</strong>
            <ul className="list-circle pl-6 mt-1">
              <li>Phân tích nhu cầu khách hàng để cải thiện trải nghiệm.</li>
              <li>Trả lời câu hỏi, bình luận, phản hồi của khách hàng.</li>
              <li>Quản lý nội bộ: kiểm toán, phân tích dữ liệu, lưu trữ cơ sở dữ liệu.</li>
            </ul>
          </li>
          <li>
            <strong>Tuân thủ pháp luật:</strong>
            <ul className="list-circle pl-6 mt-1">
              <li>Phát hiện, ngăn chặn, truy tố tội phạm.</li>
              <li>Cung cấp thông tin theo yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          C. Bảo mật và quyền khách hàng
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Chúng tôi không chia sẻ thông tin cá nhân với bên thứ ba trừ khi có sự
            đồng ý của khách hàng hoặc theo yêu cầu pháp luật.
          </li>
          <li>
            Khách hàng có quyền kiểm tra, chỉnh sửa, xóa thông tin cá nhân qua tài
            khoản hoặc liên hệ [email hỗ trợ].
          </li>
          <li>
            Nếu máy chủ bị tấn công dẫn đến mất dữ liệu, chúng tôi sẽ thông báo cho
            khách hàng và phối hợp cơ quan chức năng xử lý trong 72 giờ.
          </li>
          <li>
            Khiếu nại về lộ thông tin gửi qua [email hỗ trợ], xử lý trong 7 ngày,
            hỗ trợ khôi phục và bảo mật dữ liệu.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          D. Đối tượng được tiếp cận thông tin
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Bộ phận chăm sóc khách hàng.</li>
          <li>Bên cung cấp thanh toán (nếu cần).</li>
          <li>Cơ quan nhà nước có thẩm quyền (theo yêu cầu pháp luật).</li>
          <li>Bên khiếu nại chứng minh được hành vi vi phạm (nếu có).</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          E. Cam kết bảo mật
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Thông tin cá nhân được bảo mật tuyệt đối, chỉ sử dụng khi có sự đồng ý của khách hàng, trừ trường hợp pháp luật yêu cầu.</li>
          <li>Khách hàng phải cung cấp thông tin chính xác; chúng tôi không chịu trách nhiệm nếu thông tin sai lệch.</li>
          <li>Khách hàng có thể yêu cầu xóa dữ liệu khi chấm dứt sử dụng dịch vụ qua [email hỗ trợ].</li>
        </ul>
      </section>

      {/* II. ĐIỀU KHOẢN SỬ DỤNG */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          II. ĐIỀU KHOẢN SỬ DỤNG
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          A. Điều khoản cung cấp dịch vụ
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Khách hàng dưới 16 tuổi phải có sự giám sát của cha mẹ hoặc cha mẹ đăng
            ký để sử dụng dịch vụ spa tại nhà.
          </li>
          <li>
            Dịch vụ không phục vụ khách hàng sốt cao hoặc nhiễm trùng cấp tính (cảm
            lạnh, cúm, COVID-19), có huyết khối tĩnh mạch sâu hoặc cục máu đông, mới
            phẫu thuật gần đây (6-8 tuần), tăng huyết áp nghiêm trọng không kiểm
            soát, bệnh da lây nhiễm, suy gan/thận, rối loạn đông máu hoặc máu khó
            đông, viêm cấp tính hoặc đau/khối u chưa chẩn đoán. Chúng tôi rất tiếc
            chưa thể phục vụ các trường hợp này để đảm bảo an toàn.
          </li>
          <li>
            Nghiêm cấm sử dụng ứng dụng để:
            <ul className="list-circle pl-6 mt-1">
              <li>Lừa đảo, giả mạo thông tin, spam lịch hẹn, hoặc thực hiện hành vi bất hợp pháp.</li>
              <li>Đăng nội dung nhạy cảm, phản cảm, xúc phạm; tài khoản vi phạm sẽ bị khóa vĩnh viễn.</li>
            </ul>
          </li>
          <li>
            Khách hàng không được quay phim/chụp ảnh trong quá trình sử dụng dịch vụ
            mà không có sự đồng ý của nhân viên cung cấp dịch vụ.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          B. Quan hệ hợp đồng
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Các Điều khoản này điều chỉnh việc truy cập, sử dụng ứng dụng và dịch vụ spa.</li>
          <li>Việc sử dụng dịch vụ đồng nghĩa với việc khách hàng chấp nhận các Điều khoản, thiết lập quan hệ hợp đồng với chúng tôi.</li>
          <li>Nếu không đồng ý, khách hàng không được sử dụng dịch vụ.</li>
          <li>Chúng tôi có thể chấm dứt Điều khoản hoặc dịch vụ bất kỳ lúc nào, thông báo qua email.</li>
          <li>Các điều khoản bổ sung (cho sự kiện, khuyến mãi) sẽ được thông báo và ưu tiên áp dụng nếu có xung đột.</li>
          <li>Chúng tôi có quyền sửa đổi Điều khoản và các sửa đổi này sẽ có hiệu lực kể từ thời điểm được đăng tải trên ứng dụng ToppiCare.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          C. Các dịch vụ
        </h3>
        <p className="mb-4">
          Chúng tôi là nền tảng công nghệ kết nối khách hàng với dịch vụ spa tại
          nhà (massage, trị liệu), mang đến trải nghiệm cá nhân hóa, cao cấp.
        </p>
        <p className="mb-4">
          Dịch vụ dành cho mục đích cá nhân, bao gồm các dịch vụ spa tại nhà theo
          thỏa thuận với chúng tôi.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          D. Giấy phép
        </h3>
        <p className="mb-4">
          Chúng tôi cho phép khách hàng sử dụng ứng dụng và nội dung dịch vụ chỉ
          cho mục đích cá nhân, không được sao chép, chỉnh sửa, hoặc xóa logo, tên
          thương hiệu, hoặc nội dung ứng dụng (như hình ảnh, mô tả dịch vụ) mà
          không có sự đồng ý.
        </p>
        <p className="mb-4">
          Mọi quyền không được cấp rõ ràng thuộc về chúng tôi.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          E. Các giới hạn
        </h3>
        <p className="mb-2">Khách hàng không được:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Sao chép, chỉnh sửa, hoặc xóa logo, tên thương hiệu, hoặc nội dung ứng dụng mà không có sự đồng ý.</li>
          <li>Sửa đổi, phân phối, khai thác dịch vụ mà không được phép.</li>
          <li>Dịch ngược, can thiệp hệ thống, hoặc truy cập trái phép.</li>
          <li>Sử dụng dịch vụ cho mục đích bất hợp pháp.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          F. Quyền sở hữu
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Dịch vụ và nội dung thuộc sở hữu của chúng tôi hoặc đối tác cấp phép.</li>
          <li>Các Điều khoản không cấp quyền sử dụng tên, logo, thương hiệu của chúng tôi.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          G. Sử dụng dịch vụ
        </h3>
        
        <p className="mb-2 font-medium">Tài khoản người dùng</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Khách hàng phải đăng ký tài khoản, cung cấp thông tin chính xác (họ tên, số điện thoại, email, sức khỏe).</li>
          <li>Khách hàng chịu trách nhiệm bảo mật tài khoản, thông báo vi phạm qua [email hỗ trợ].</li>
          <li>Chỉ được sở hữu một tài khoản, không chuyển nhượng.</li>
        </ul>

        <p className="mb-2 font-medium">Yêu cầu và ứng xử</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Khách hàng dưới 16 tuổi phải có sự giám sát của cha mẹ hoặc cha mẹ đăng ký.</li>
          <li>Không gây phiền hà, khó chịu, hoặc thiệt hại khi sử dụng dịch vụ.</li>
          <li>Nếu giao dịch ngoài ứng dụng, khách hàng tự chịu trách nhiệm nếu có sự cố xảy ra.</li>
          <li>Khách hàng chịu trách nhiệm pháp lý cho hành vi vi phạm; chúng tôi cung cấp thông tin nếu cơ quan pháp luật yêu cầu.</li>
        </ul>

        <p className="mb-2 font-medium">Thông báo</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Chúng tôi có thể gửi thông báo về đơn hàng, ưu đãi qua ứng dụng hoặc email.</li>
          <li>Khách hàng có thể từ chối nhận thông báo qua [email hỗ trợ], nhưng có thể ảnh hưởng đến trải nghiệm dịch vụ.</li>
        </ul>

        <p className="mb-2 font-medium">Mã khuyến mãi</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Mã khuyến mãi (nếu có) chỉ dùng cho mục đích hợp pháp, không quy đổi thành tiền, có thể hết hạn hoặc bị vô hiệu hóa bất kỳ lúc nào.</li>
        </ul>

        <p className="mb-2 font-medium">Nội dung người dùng</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nội dung khách hàng gửi (đánh giá, hình ảnh) phải sử dụng tiếng Việt hoặc tiếng Anh, không chứa nội dung phỉ báng, khiêu dâm, bất hợp pháp.</li>
          <li>Nội dung thuộc sở hữu của khách hàng, nhưng chúng tôi được quyền sử dụng vĩnh viễn, không cần trả phí.</li>
          <li>Chúng tôi có thể xóa nội dung vi phạm bất kỳ lúc nào.</li>
        </ul>

        <p className="mb-2 font-medium">Truy cập mạng và thiết bị</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Ứng dụng được tải và sử dụng miễn phí, nhưng khách hàng cần đảm bảo thiết bị (điện thoại, máy tính bảng) và kết nối internet để sử dụng dịch vụ.</li>
          <li>Chúng tôi không đảm bảo dịch vụ hoạt động trên mọi thiết bị hoặc không bị gián đoạn.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          H. Thanh toán
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Phí dịch vụ spa do khách hàng thanh toán trực tiếp qua ứng dụng.</li>
          <li>Khách hàng có thể hủy đơn trước khi được xác nhận, có thể chịu phí hủy (nếu có).</li>
          <li>Phí không hoàn lại, trừ khi chúng tôi quyết định khác.</li>
          <li>Chúng tôi không chỉ định tiền boa; khách hàng tự quyết định tiền boa.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          I. Tuyên bố miễn trách nhiệm
        </h3>
        <p className="mb-4">
          Dịch vụ được cung cấp bởi nhân viên được chúng tôi đào tạo, nhưng chúng
          tôi không chịu trách nhiệm cho các hành vi hoặc giao dịch ngoài ứng
          dụng, hoặc lỗi ngoài tầm kiểm soát (như thiên tai, mất điện, hoặc các sự
          cố bất khả kháng khác).
        </p>
        <p className="mb-4">
          Khách hàng chịu rủi ro khi sử dụng dịch vụ ngoài thỏa thuận, trong phạm
          vi pháp luật cho phép.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          J. Giới hạn trách nhiệm
        </h3>
        <p className="mb-4">
          Chúng tôi chịu trách nhiệm về chất lượng dịch vụ do nhân viên được đào
          tạo cung cấp, nhưng không chịu trách nhiệm cho thiệt hại gián tiếp hoặc
          hậu quả phát sinh từ hành vi ngoài thỏa thuận dịch vụ hoặc giao dịch
          ngoài ứng dụng.
        </p>
      </section>

      {/* III. QUY CHẾ HOẠT ĐỘNG */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          III. QUY CHẾ HOẠT ĐỘNG
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          1. Nguyên tắc chung
        </h3>
        <p className="mb-4">
          Chúng tôi là nền tảng thương mại điện tử kết nối khách hàng với:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Dịch vụ spa, massage, trị liệu tại nhà; và/hoặc</li>
          <li>Sản phẩm chăm sóc sức khỏe - sắc đẹp được phân phối thông qua ứng dụng.</li>
        </ul>
        <p className="mb-4">
          Giao dịch được thực hiện công khai, minh bạch và tuân thủ pháp luật Việt Nam.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          2. Quy định chung
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Khách hàng phải đăng ký tài khoản, cung cấp thông tin chính xác (họ tên, số điện thoại, email, sức khỏe), được phê duyệt để sử dụng dịch vụ.</li>
          <li>Nội dung Quy chế tuân thủ pháp luật Việt Nam; khách hàng chịu trách nhiệm tìm hiểu nghĩa vụ pháp lý.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          3. Quy trình giao dịch
        </h3>

        <p className="mb-2 font-medium">3.1. Quy trình giao dịch đơn hàng dịch vụ</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>Khách hàng đăng ký/đăng nhập ứng dụng ToppiCare.</li>
          <li>Chọn dịch vụ, thời gian và địa điểm sử dụng dịch vụ.</li>
          <li>Kiểm tra lại thông tin đơn hàng (dịch vụ, thời gian, địa chỉ, chi phí).</li>
          <li>Thực hiện thanh toán theo phương thức được hỗ trợ trên ứng dụng (nếu yêu cầu).</li>
          <li>Hệ thống xác nhận đơn và phân phối đơn đến kỹ thuật viên phù hợp.</li>
          <li>Kỹ thuật viên nhận đơn, chuẩn bị dụng cụ và đến địa điểm khách hàng đúng thời gian đã đặt.</li>
          <li>Thực hiện dịch vụ theo đúng quy trình chuyên môn; khách hàng có quyền phản hồi trong quá trình sử dụng dịch vụ.</li>
        </ol>

        <p className="mb-2 font-medium">3.2. Quy trình giao dịch đơn hàng sản phẩm</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>Khách hàng đăng nhập ứng dụng và lựa chọn sản phẩm.</li>
          <li>Kiểm tra thông tin sản phẩm (giá, mô tả, số lượng, chính sách đổi trả).</li>
          <li>Nhập địa chỉ giao hàng, thông tin liên hệ nhận hàng.</li>
          <li>Xác nhận đơn hàng và thực hiện thanh toán theo phương thức được hỗ trợ.</li>
          <li>ToppiCare hoặc đối tác xử lý đơn hàng và tiến hành giao hàng.</li>
        </ol>

        <p className="mb-2 font-medium">3.3. Chính sách vận chuyển, giao nhận và kiểm hàng (đối với đơn hàng sản phẩm)</p>
        <p className="mb-2">
          Sản phẩm được giao đến địa chỉ khách hàng đã đăng ký trên ứng dụng.
        </p>
        <p className="mb-2">
          Thời gian giao hàng phụ thuộc vào khu vực, đơn vị vận chuyển và tình
          trạng hàng hóa; thời gian dự kiến sẽ được thông báo trong đơn hàng.
        </p>

        <p className="mb-1 font-medium">a) Quy định kiểm hàng</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Khách hàng được quyền kiểm tra ngoại quan sản phẩm tại thời điểm nhận hàng, bao gồm: số lượng, chủng loại, tình trạng bao bì, tem nhãn.</li>
          <li>Việc kiểm hàng không bao gồm mở seal, sử dụng thử hoặc làm thay đổi hiện trạng ban đầu của sản phẩm (trừ trường hợp có thỏa thuận khác).</li>
          <li>Trường hợp phát hiện sản phẩm bị móp méo, rách vỡ, ướt, thiếu số lượng hoặc sai sản phẩm so với đơn hàng, khách hàng có quyền từ chối nhận hàng và phản hồi ngay cho ToppiCare qua kênh hỗ trợ chính thức.</li>
        </ul>

        <p className="mb-1 font-medium">b) Xác nhận nhận hàng</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Việc khách hàng ký nhận hoặc xác nhận đã nhận hàng được hiểu là sản phẩm đã được giao đúng số lượng và tình trạng ngoại quan không có dấu hiệu bất thường.</li>
          <li>Các khiếu nại phát sinh sau thời điểm xác nhận nhận hàng sẽ được xử lý theo chính sách đổi trả - hoàn tiền hiện hành.</li>
        </ul>

        <p className="mb-1 font-medium">c) Trách nhiệm liên quan đến giao nhận</p>
        <ul className="list-disc pl-6 mb-4">
          <li>ToppiCare không chịu trách nhiệm đối với các trường hợp giao hàng không thành công do khách hàng cung cấp sai hoặc thiếu thông tin nhận hàng.</li>
          <li>Trường hợp đơn hàng bị chậm trễ hoặc thất lạc do lỗi của đơn vị vận chuyển, ToppiCare sẽ phối hợp với đơn vị liên quan để hỗ trợ khách hàng trong phạm vi cho phép.</li>
        </ul>

        <p className="mb-2 font-medium">3.4. Chính sách đổi trả - hoàn tiền</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Chính sách đổi trả áp dụng riêng cho từng dịch vụ hoặc sản phẩm và được công bố công khai trên ứng dụng.</li>
          <li>Đối với dịch vụ spa: việc hoàn tiền/đổi lịch phụ thuộc vào thời điểm hủy và tình trạng thực hiện dịch vụ.</li>
          <li>Đối với sản phẩm: chỉ áp dụng đổi trả khi sản phẩm còn nguyên vẹn, chưa qua sử dụng và đáp ứng điều kiện đổi trả.</li>
        </ul>

        <p className="mb-2 font-medium">3.5. Giải quyết tranh chấp, khiếu nại</p>
        <p className="mb-2">
          Tranh chấp, khiếu nại có thể phát sinh liên quan đến dịch vụ spa tại nhà
          và/hoặc đơn hàng sản phẩm được giao dịch trên ứng dụng ToppiCare.
        </p>

        <p className="mb-1 font-medium">a) Đối với dịch vụ spa tại nhà</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Khiếu nại liên quan đến chất lượng dịch vụ, thái độ kỹ thuật viên, quy trình thực hiện, thời gian phục vụ hoặc các vấn đề phát sinh trong quá trình sử dụng dịch vụ.</li>
          <li>Khách hàng gửi khiếu nại qua [email hỗ trợ] trong vòng 24 giờ kể từ khi kết thúc dịch vụ.</li>
          <li>Cung cấp đầy đủ thông tin: mã đơn hàng, thời gian sử dụng dịch vụ, nội dung phản ánh và bằng chứng liên quan (nếu có).</li>
        </ul>

        <p className="mb-1 font-medium">b) Đối với đơn hàng sản phẩm</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Khiếu nại liên quan đến giao nhận, tình trạng sản phẩm (hư hỏng, sai mẫu, thiếu số lượng), chất lượng sản phẩm hoặc việc thực hiện chính sách đổi trả.</li>
          <li>Khách hàng gửi khiếu nại qua [email hỗ trợ] trong vòng 24-48 giờ kể từ thời điểm nhận hàng.</li>
          <li>Sản phẩm khiếu nại phải còn nguyên vẹn, chưa qua sử dụng, trừ trường hợp lỗi do nhà sản xuất hoặc đơn vị giao hàng.</li>
        </ul>

        <p className="mb-1 font-medium">c) Quy trình xử lý khiếu nại chung</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Bộ phận chăm sóc khách hàng tiếp nhận và xác minh khiếu nại trong vòng 07 ngày làm việc, tùy theo mức độ và tính chất vụ việc.</li>
          <li>Trường hợp tranh chấp vượt ngoài thẩm quyền giải quyết của ToppiCare, vụ việc sẽ được chuyển cho cơ quan nhà nước có thẩm quyền theo quy định pháp luật.</li>
        </ul>

        <p className="mb-1 font-medium">d) Quy định khiếu nại</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Khiếu nại phải liên quan trực tiếp đến dịch vụ hoặc sản phẩm được giao dịch trên ứng dụng ToppiCare.</li>
          <li>Khách hàng phải cung cấp bằng chứng hợp lệ và thông tin tài khoản liên quan.</li>
          <li>Không sử dụng ngôn từ xúc phạm, đe dọa hoặc vi phạm pháp luật trong quá trình khiếu nại.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          4. Phương thức thanh toán
        </h3>
        <p className="mb-4">
          ToppiCare hiện chưa lưu trữ thông tin tài khoản ngân hàng, thẻ thanh
          toán của khách hàng trên ứng dụng. Mỗi giao dịch được thực hiện và xác
          nhận độc lập tại thời điểm đặt dịch vụ hoặc mua sản phẩm.
        </p>

        <p className="mb-2 font-medium">4.1. Các phương thức thanh toán được hỗ trợ</p>
        <p className="mb-2">Khách hàng có thể lựa chọn một trong các phương thức thanh toán sau:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Thẻ ngân hàng nội địa (ATM): Thanh toán trực tuyến thông qua cổng thanh toán được tích hợp trên ứng dụng.</li>
          <li>Thẻ quốc tế (Visa/MasterCard/JCB): Khách hàng nhập thông tin thẻ tại bước thanh toán; thông tin thẻ không được lưu trên hệ thống ToppiCare.</li>
          <li>Ví ZaloPay, Google Pay, Apple Pay, Samsung Pay.</li>
          <li>Chuyển khoản ngân hàng: Thực hiện theo thông tin tài khoản được hiển thị trong quá trình thanh toán (nếu áp dụng).</li>
          <li>Thanh toán khi hoàn tất dịch vụ hoặc khi nhận hàng: Chỉ áp dụng cho một số dịch vụ/sản phẩm và khu vực nhất định, theo thông báo trên ứng dụng.</li>
        </ul>

        <p className="mb-2 font-medium">4.2. Nguyên tắc thanh toán</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Khách hàng tự lựa chọn phương thức thanh toán phù hợp tại mỗi lần giao dịch.</li>
          <li>ToppiCare không lưu thông tin thẻ, tài khoản thanh toán của khách hàng.</li>
          <li>Giao dịch chỉ được xem là hoàn tất khi hệ thống xác nhận thanh toán thành công.</li>
          <li>Trường hợp giao dịch thất bại hoặc gián đoạn do lỗi hệ thống thanh toán, khách hàng không bị ghi nhận là đã thanh toán và có thể thực hiện lại giao dịch.</li>
        </ul>

        <p className="mb-2 font-medium">4.3. An toàn thanh toán</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Mọi giao dịch thanh toán được thực hiện thông qua cổng thanh toán đạt tiêu chuẩn bảo mật theo quy định pháp luật.</li>
          <li>Khách hàng không cung cấp thông tin thanh toán qua tin nhắn, email hoặc các kênh không chính thức.</li>
          <li>ToppiCare không chịu trách nhiệm đối với rủi ro phát sinh do khách hàng tự ý giao dịch ngoài ứng dụng.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          5. Đảm bảo an toàn giao dịch
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Khách hàng cung cấp thông tin chính xác (họ tên, số điện thoại, email, sức khỏe).</li>
          <li>Không chia sẻ thông tin thanh toán qua email hoặc kênh không chính thức.</li>
          <li>Nghiêm cấm can thiệp hệ thống, phát tán virus; vi phạm sẽ bị xử lý theo pháp luật.</li>
          <li>Thông tin giao dịch được bảo mật, trừ khi cơ quan pháp luật yêu cầu.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          6. Quản lý thông tin xấu
        </h3>
        
        <p className="mb-1 font-medium">Kiểm soát nội dung khách hàng</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Nội dung khách hàng gửi (đánh giá, hình ảnh) phải sử dụng tiếng Việt hoặc tiếng Anh, không chứa nội dung phỉ báng, khiêu dâm, bất hợp pháp.</li>
          <li>Chúng tôi có quyền xóa nội dung vi phạm bất kỳ lúc nào.</li>
        </ul>

        <p className="mb-1 font-medium">Kiểm soát hành vi khách hàng</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Cấm cung cấp địa chỉ giả, bom hàng, hủy đơn nhiều lần, trừ trường hợp khách hàng chứng minh đó là lỗi hoặc sự cố hợp lý (VD: lỗi hệ thống, nhầm lẫn thông tin).</li>
          <li>Vi phạm sẽ bị nhắc nhở lần 1, giới hạn tài khoản lần 2, khóa vĩnh viễn lần 3.</li>
        </ul>

        <p className="mb-1 font-medium">Xử lý vi phạm sở hữu trí tuệ</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Chúng tôi gỡ bỏ nội dung vi phạm quyền sở hữu trí tuệ trong 24 giờ nếu có yêu cầu từ cơ quan có thẩm quyền.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          7. Trách nhiệm trong lỗi kỹ thuật
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Chúng tôi nỗ lực đảm bảo hệ thống ổn định, nhưng không chịu trách nhiệm cho lỗi ngoài tầm kiểm soát (như thiên tai, mất điện, hoặc các sự cố bất khả kháng khác).</li>
          <li>Khách hàng thông báo lỗi qua [email hỗ trợ]; chúng tôi khắc phục sớm nhất có thể.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          8. Trách nhiệm và quyền của khách hàng
        </h3>

        <p className="mb-1 font-medium">8.1. Trách nhiệm của khách hàng</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Cung cấp thông tin chính xác (họ tên, số điện thoại, email, sức khỏe).</li>
          <li>Bảo mật tài khoản, thông báo vi phạm qua [email hỗ trợ].</li>
          <li>Không sử dụng dịch vụ cho mục đích bất hợp pháp, lừa đảo, hoặc spam lịch hẹn.</li>
          <li>Nếu giao dịch ngoài ứng dụng, khách hàng tự chịu trách nhiệm nếu có sự cố xảy ra.</li>
          <li>Cung cấp thông tin hỗ trợ giải quyết tranh chấp khi được yêu cầu.</li>
          <li>Chịu trách nhiệm pháp lý cho hành vi vi phạm.</li>
        </ul>

        <p className="mb-1 font-medium">8.2. Quyền của khách hàng</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Đặt lịch spa tại nhà, nhận ưu đãi (nếu có).</li>
          <li>Được cấp tài khoản để quản lý thông tin, lịch sử đặt lịch.</li>
          <li>Gửi khiếu nại, yêu cầu bồi thường qua [email hỗ trợ].</li>
          <li>Góp ý về dịch vụ qua [email hỗ trợ].</li>
        </ul>

        <p className="mb-1 font-medium">8.3. Phân định trách nhiệm</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Chúng tôi chịu trách nhiệm về chất lượng dịch vụ do nhân viên được đào tạo cung cấp.</li>
          <li>Khách hàng tự chịu trách nhiệm nếu sử dụng dịch vụ ngoài ứng dụng hoặc vi phạm pháp luật.</li>
          <li>Chúng tôi cung cấp thông tin cho cơ quan pháp luật nếu được yêu cầu.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          9. Điều khoản áp dụng
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Quy chế có hiệu lực kể từ thời điểm công bố.</li>
          <li>Tiếp tục sử dụng dịch vụ sau khi cập nhật đồng nghĩa chấp nhận Quy chế mới.</li>
        </ul>
      </section>

      {/* FOOTER */}
      <section className="border-t pt-6 text-sm text-gray-600">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          10. Hỗ trợ khách hàng
        </h3>
        <p>
          <strong>Địa chỉ:</strong> 16A Lê Hồng Phong, Phường Hòa Hưng, Thành phố Hồ Chí Minh
        </p>
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