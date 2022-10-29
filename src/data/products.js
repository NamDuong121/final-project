import productImg01 from "../assets/images/bucket1.jpeg";
import productImg02 from "../assets/images/bucket2.jpeg";
import productImg03 from "../assets/images/bucket3.png";
import productImg04 from "../assets/images/bucket4.png";

import productImg05 from "../assets/images/caps11.jpeg";
import productImg06 from "../assets/images/caps12.jpeg";
import productImg07 from "../assets/images/caps13.jpeg";
import productImg08 from "../assets/images/caps14.jpeg";
import productImg09 from "../assets/images/caps15.jpeg";
import productImg10 from "../assets/images/caps16.png";

import productImg11 from "../assets/images/sn1.jpeg";
import productImg12 from "../assets/images/sn2.jpeg";
import productImg13 from "../assets/images/sn3.jpeg";
import productImg14 from "../assets/images/sn4.jpeg";

import productImg15 from "../assets/images/beret.png";
import productImg16 from "../assets/images/beret1.png";

const products = [
  {
    id: "01",
    productName: "Mũ lưỡi trai NY đen ",
    imgUrl: productImg05,
    category: "Mũ Lưỡi Trai",
    price: 185000,
    shortDesc:
      "Chất liệu vải 100% cotton cao cấp từ bông tinh khiết giúp thấm hút mồ hôi tốt và tạo cảm giác thoải mái dù đội lâu.",
    description:
      "Mũ lưỡi trai cá tính phong cách Hàn Quốc trẻ trung giúp bạn luôn nổi bật khi xuống phố, đi chơi, đi học, cà phê cùng bạn bè hoặc khi đi du lịch. Kiểu mũ này có khá nhiều màu sắc để bạn lựa chọn tha hồ mix math với nhiều set đồ, phong cách thời trang khác nhau.",
    reviews: [
      {
        rating: 4.7,
        text: "Giá cả phải chăng, giao hàng nhanh.",
      },
    ],
    avgRating: 4.5,
    trending: true,
    amount: 200,
    sold: 100,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Sep 20, 2022",
  },

  {
    id: "02",
    productName: "Mũ không lưỡi trai",
    imgUrl: productImg06,
    category: "Mũ Lưỡi Trai",
    price: 159000,
    shortDesc:
      "Kiểu mũ này có khá nhiều màu sắc để bạn lựa chọn tha hồ mix math với nhiều set đồ, phong cách thời trang khác nhau.",
    description:
      "Mũ không lưỡi trai hay còn gọi là mũ tròn miki hat, đây là kiểu mũ mới nổi được đông đảo giới trẻ ưa chuộng. Zerdio xin giới thiệu đến bạn chiếc mũ tròn không lưỡi phong cách Hàn Quốc cá tính giúp bạn luôn nổi bật khi xuống phố, đi chơi, đi học, cà phê cùng bạn bè hoặc khi đi du lịch.",
    reviews: [
      {
        rating: 4.8,
        text: "Màu sắc đep, quá tuyệt vời",
      },
      {
        rating: 4.8,
        text: "Nhân viên tư vấn quá nhiệt tình",
      },
    ],
    avgRating: 4.7,
    trending: true,
    amount: 200,
    sold: 150,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 21, 2022",
  },

  {
    id: "03",
    productName: "Mũ lưỡi trai hoa cúc",
    imgUrl: productImg07,
    category: "Mũ Lưỡi Trai",
    price: 125000,
    shortDesc:
      "Mũ lưỡi trai hoa cúc trẻ trung giúp bạn luôn nổi bật khi xuống phố, đi chơi, đi học, cà phê cùng bạn bè hoặc khi đi du lịch.",
    description:
      "ZERDIO xin giới thiệu đến các bạn chiếc mũ lưỡi trai hoa cúc hay còn gọi là nón kết hoa cúc được làm bằng chất liệu 100% cotton 2 lớp cao cấp giúp tạo cảm giác thoáng mát khi sử dụng. Chiếc mũ lưỡi trai hoa cúc hiện nay rất thịnh hành và được các sao Việt yêu thích và sử dụng trong các buổi biểu diễn thời trang.",
    reviews: [
      {
        rating: 4.6,
        text: "Sản phẩm đẹp, nhưng hộp hơi xấu.",
      },
      {
        rating: 4.9,
        text: "Sản phẩm quá đẹp.",
      },
    ],
    avgRating: 4.7,
    trending: true,
    amount: 200,
    sold: 140,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 21, 2022",
  },
  {
    id: "04",
    productName: "Mũ lưỡi trai Hàn Quốc ",
    imgUrl: productImg08,
    category: "Mũ Lưỡi Trai",
    price: 120000,
    shortDesc:
      "Chất liệu vải 100% cotton cao cấp từ bông tinh khiết giúp thấm hút mồ hôi tốt và tạo cảm giác thoải mái dù đội lâu.",
    description:
      "Mũ lưỡi trai cá tính phong cách Hàn sẽ làm cho gu thời trang của bạn trở nên phong cách hơn. Thiết kế nón kết cổ điển nhưng có phần đuôi dài cá tính và điểm thêm một số chi tiết lạ mắt mang đến sự nổi bật, cá tính cho người đội.",
    reviews: [
      {
        rating: 4.8,
        text: "Đơn giản, nhưng rất đẹp",
      },
      {
        rating: 4.8,
        text: "Sản phẩm đẹp, chắc chắn sẽ ủng hộ tiếp",
      },
    ],
    arrivedAt: "Oct 22, 2022",
    avgRating: 4.7,
    amount: 200,
    sold: 145,
    get remainingAmount() {
      return this.amount - this.sold;
    },
  },
  {
    id: "05",
    productName: "Mũ lưỡi trai NY",
    imgUrl: productImg09,
    category: "Mũ Lưỡi Trai",
    price: 250000,
    shortDesc:
      "Chất liệu vải 100% cotton cao cấp từ bông tinh khiết giúp thấm hút mồ hôi tốt và tạo cảm giác thoải mái dù đội lâu.",
    description:
      "Đây là mẫu mũ đang rất được ưa chuộng hiện nay, với chất liệu cao cấp và màu sắc được phối bắt mắt. Luôn được các tín đồ thời trang săn đón.",
    reviews: [
      {
        rating: 4.6,
        text: "thích zerdio từ lâu. nhận hàng ko bao h thất vọng. giao hàng nhanh. sp tốt",
      },
      {
        rating: 4.9,
        text: "Rẻ và đẹp, lại còn siêu bền, mũ mình toàn mua từ shop này mà ra",
      },
    ],
    avgRating: 4.7,
    amount: 200,
    sold: 151,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 19, 2022",
  },

  {
    id: "06",
    productName: "Mũ lưỡi trai trơn HQ",
    imgUrl: productImg10,
    category: "Mũ Lưỡi Trai",
    price: 145000,
    shortDesc:
      "Được thiết kế với kiểu dáng thời trang trẻ trung, mũ lưỡi trai phong cách Hàn Quốc nhiều màu là phụ kiện yêu thích của nhiều bạn trẻ hiện nay.",
    description:
      "Thiết kế trẻ trung và phong cách, cùng chất liệu 100% cotton cao cấp giúp bạn tự tin, thoải mái khi xuống phố, đi học hay đi du lịch cùng bạn bè.Với nhiều màu sắc để bạn lựa chọn, chiếc nón kết thực sự là item giúp bạn biến hóa và sáng tạo nhiều cách mix&match trang phục, dễ dàng thể hiện cá tính của bản thân.",
    reviews: [
      {
        rating: 4.8,
        text: "Đẹp quá thanks bác nhé",
      },
      {
        rating: 4.9,
        text: "chất vải okee, giống với trên hình👍👍",
      },
    ],
    avgRating: 4.7,
    amount: 200,
    sold: 152,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 18, 2022",
  },

  {
    id: "07",
    productName: "Mũ rộng vành Bucket",
    imgUrl: productImg01,
    category: "Bucket",
    price: 127000,
    shortDesc:
      "Nếu bạn đang có nhu cầu muốn tìm một chiếc mũ bucket vành tròn phù hợp để tạo điểm nhấn cho set đồ của mình thì Mũ ngư dân bucket cây dừa 2 mặt được xem là sự lựa chọn phù hợp.",
    description:
      "Mũ được làm từ chất liệu 100% cotton cao cấp tạo cảm giác thoáng mát và chiếc mũ vành tròn này có khả năng chống nắng rất tốt giúp bạn tránh khỏi những tác động xấu từ ánh nắng mặt trời.Và đây là gợi ý dành cho bạn: Mũ ngư dân bucket cây dừa 2 mặt sở hữu kiểu mũ siêu tiện vừa che nắng tốt, không quá khó mix đồ lại có thể tạo điểm nhấn cho outfit.",
    reviews: [
      {
        rating: 4.6,
        text: "Mũ đẹp nhưng vận chuyển kém quá, hộp méo hết cả rồi may mà hàng là mũ chứ không phải đồ dễ vỡ",
      },
      {
        rating: 4.9,
        text: "Sản phẩm đẹp. Giao hàng siêu nhanh. Như mẫu!",
      },
    ],
    avgRating: 4.7,
    amount: 200,
    sold: 165,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 16, 2022",
  },
  {
    id: "08",
    productName: "Mũ Bucket trơn",
    imgUrl: productImg02,
    category: "Bucket",
    price: 165000,
    shortDesc:
      "Nếu bạn đang có nhu cầu muốn tìm một chiếc mũ bucket 2 mặt vành tròn phù hợp để tạo điểm nhấn cho set đồ của mình thì Mũ Bucket cây chuối 2 mặt được xem là sự lựa chọn phù hợp.",
    description:
      "Mũ được làm từ chất liệu 100% cotton cao cấp tạo cảm giác thoáng mát và chiếc mũ vành tròn này có khả năng chống nắng rất tốt giúp bạn tránh khỏi những tác động xấu từ ánh nắng mặt trời. Mũ Bucket cây chuối ghi điểm nhờ thiết kế một mặt mang màu sắc và họa tiết lạ mắt và một mặt màu đen quyền lực giúp bạn biến hoá đa dạng phong cách. Với mẫu nón này bạn sẽ không có bất cứ bó buộc nào khi phối đồ. Hãy mặc theo cảm nhận, theo ý thích của bạn.",
    reviews: [
      {
        rating: 4.6,
        text: "Đẹp quá mọi người ạ!",
      },
      {
        rating: 4.9,
        text: "Nón xịn nha",
      },
    ],
    avgRating: 4.7,
    amount: 200,
    sold: 156,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 22, 2022",
  },

  {
    id: "09",
    productName: "Mũ Bucket BK67",
    imgUrl: productImg03,
    category: "Bucket",
    price: 139000,
    shortDesc:
      "Đáp ứng các tiêu chí cần thiết của một chiếc mũ bucket thời trang cùng chất liệu tốt. Mũ bucket vải bò BK67 ghi điểm bởi kiểu dáng vành tròn cùng hoạ tiết nổi bật tạo điểm nhấn ở toàn bộ chiếc mũ.",
    description:
      "Sỡ hữu chất liệu Denim cao cấp, đây là kiểu mũ thích hợp sử dụng làm mũ đi biển hay để tham gia các hoạt động ngoài trời một cách trọn vẹn nhất. Và đây là gợi ý dành cho bạn: Mũ bucket vải bò mã BK67 sở hữu kiểu mũ siêu tiện vừa che nắng tốt, không quá khó mix đồ lại có thể tạo điểm nhấn cho outfit.",
    reviews: [
      {
        rating: 4.6,
        text: "Sản phẩm chất lượng, đẹp. ổn áp và hài lòng.",
      },
      {
        rating: 4.9,
        text: "Mua nhìu lần, lần nào cũng thích",
      },
    ],
    avgRating: 4.7,
    amount: 200,
    sold: 157,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 22, 2022",
  },

  {
    id: "10",
    productName: "Nón Bucket Graffiti",
    imgUrl: productImg04,
    category: "Bucket",
    price: 185000,
    shortDesc:
      "Nếu bạn đang có nhu cầu muốn tìm một chiếc mũ bucket vành tròn phù hợp để tạo điểm nhấn cho set đồ của mình thì Mũ Bucket Jean Cào Bụi Bặm được xem là sự lựa chọn phù hợp.",
    description:
      "Chất liệu vải không bị sờn rách, co nhăn sau nhiều lần giặt giũ. Thời gian bảo hành của vải jeans có thể kéo dài tới 10 năm và lâu hơn nữa nếu được vệ sinh, bảo quản đúng cách. Ngay từ khi ra mắt, chất vải jeans đã là biểu tượng thời tràn của sự nổi loạn, cá tính. Gần gũi nhất là chiếc quần jeans gắn liền với hình tượng cao bồi phóng khoáng, tự do đầy ấn tượng.",
    reviews: [
      {
        rating: 4.6,
        text: "Giá cả phù hợp vs chất lượng. Nói chung là hài lòng vs sản phẩm.",
      },
      {
        rating: 4.9,
        text: "Chất lượng sản phẩm tốt thời gian giao hàng rất nhanh giá tốt.",
      },
    ],
    avgRating: 4.7,
    amount: 200,
    sold: 148,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 20, 2022",
  },

  {
    id: "11",
    productName: "Mũ Snapback Smokin",
    imgUrl: productImg11,
    category: "Snapback",
    price: 185000,
    shortDesc:
      "Mũ Snapback Smokin SN36 đen hoạ tiết là một trong những phụ kiện thời trang đặc trưng của phong cách hiphop.",
    description:
      "Với thiết kế logo hoạ tiết nổi bật và phần lưỡi màu vàng mang cá tính riêng, đây là phụ kiện giúp bạn dễ dàng thể hiện phong cách bản thân. Mũ Snapback Smokin còn giúp người đội chúng thể hiện phong cách mạnh mẽ & cá tính cho cả nam và nữ. Mũ được làm từ chất liệu kaki bền, có lỗ thoáng khí, dễ giặt và dễ bảo quản.",
    reviews: [
      {
        rating: 4.6,
        text: "Chất lượng đẹp hộp của Zerdio lúc nào cũng chắc chắn nhưng lần này đóng gói chưa cẩn thận như lần trc mình mua nên hộp bị móp 1 chút.",
      },
      {
        rating: 4.9,
        text: "Mũ đẹp cực luôn.",
      },
    ],
    avgRating: 4.7,
    amount: 200,
    sold: 149,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 20, 2022",
  },

  {
    id: "12",
    productName: "Mũ hiphop Snapback",
    imgUrl: productImg12,
    category: "Snapback",
    price: 150000,
    shortDesc:
      "Mũ snapback hiphop có kết cấu đặc trưng của một chiếc nón snapback nhưng được thiết kế với phần logo nổi bật ở trung tâm và khoá nhựa nổi bật từ phía sau. Chất liệu vải kaki cao cấp được dệt may chắc chắn giúp form nón cứng cáp, cầm trên tay không bị biến dạng.",
    description:
      "Đây là một thiết kế thời trang ấn tượng làm tôn lên phong cách cá nhân của bạn. Dù bạn là một chàng trai mạnh mẽ, năng động hay là cô nàng cá tính hay nhẹ nhàng thì kiểu mũ này sẽ làm bạn hài lòng. Với một chiếc mũ snapback hiphop có logo nổi bật bạn chỉ cần cùng áo phông mặc trong kèm áo khoác nhẹ bên ngoài cùng quần jean, giày thể thao là đã có thể tự tin ra đường.",
    reviews: [
      {
        rating: 4.8,
        text: "Mũ đội đẹp . Rất ưng . Lần sau sẽ mua tiếp sp. Mong sẽ có nhiều sp tốt đẹp bền rẻ.",
      },
      {
        rating: 4.9,
        text: "Sản phẩm tốt. Ưng dễ sợ, có dịp mình sẽ ủng hộ tiếp nhé",
      },
    ],
    avgRating: 4.8,
    amount: 200,
    sold: 151,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 22, 2022",
  },
  {
    id: "13",
    productName: "Snapback Barber",
    imgUrl: productImg13,
    category: "Snapback",
    price: 170000,
    shortDesc:
      "Mũ được làm từ chất liệu vải kaki cao cấp nên bạn sẽ không cần mất quá nhiều thời gian để là ủi vì chất liệu này thường ít nhăn, hơn nữa có độ bền cao.",
    description:
      "Nón Snapback Barber Brooklyn nổi bật với thiết kế logo hoạ tiết chữ nổi cùng phần vành nón rộng và phẳng. Với kiểu dáng hiphop, chiếc mũ này rất được lòng các chàng trai, cô gái thuộc mọi phong cách từ đơn giản đến năng động, cá tính.",
    reviews: [
      {
        rating: 4.6,
        text: "Nón đẹp. Shop ship cực nhanh.",
      },
      {
        rating: 4.9,
        text: "Mũ quá ngon.",
      },
    ],
    avgRating: 4.7,
    trending: true,
    amount: 200,
    sold: 139,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 21, 2022",
  },
  {
    id: "14",
    productName: "Nón Snapback Advisory",
    imgUrl: productImg14,
    category: "Snapback",
    price: 129000,
    shortDesc:
      "Nón Snapback Advisory phong cách hiphop cá tính là lựa chọn của nhiều tín đồ thời trang hiện nay. Không chỉ dành cho nam mà ngay cả các bạn nữ đều đang sử dụng mẫu nón đẹp này.",
    description:
      "Mũ snapback là một trong những món item thời trang đặc trưng phổ biến của trào lưu mang phong cách hiphop thu hút rất nhiều bạn trẻ, với đặc trưng riêng mang cá tính riêng, dể dàng thể hiện phong cách bản thân. Vừa thời trang vừa tiện lợi nên chẳng có lý do gì mà bạn không sắm ngay cho mình một chiếc mũ snapback đẹp cho phong cách hàng ngày hay những chuyến chơi của mình.",
    reviews: [
      {
        rating: 4.8,
        text: "Shop giao nhanh, hàng chất lượng. Nên mua nhé mọi người",
      },
      {
        rating: 4.9,
        text: "Giá cả phù hợp vs chất lượng. Nói chung là hài lòng vs sản phẩm.",
      },
    ],
    avgRating: 4.8,
    amount: 200,
    sold: 164,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 23, 2022",
  },
  {
    id: "15",
    productName: "Mũ Beret Len",
    imgUrl: productImg15,
    category: "Beret",
    price: 139000,
    shortDesc:
      "Nón beret là kiểu nón được bạn trẻ cực ưa chuộng, chiếc nón có mặt trong rất nhiều sự kiện khác nhau. Đặc biệt, chiếc mũ là siêu phẩm cực hot được nhiều bạn trẻ săn lùng trong dịp thu đông.",
    description:
      "Dễ phối đồ, hợp với phong cách năng động và cá tính nên mũ tròn rất được lòng các tín đồ thời trang. Chất liệu len cao cấp mềm mại tạo sự sang trọng, đẳng cấp hơn cho người dùng. Muốn tạo nên sự khác biệt, khẳng định bản thân đầy thu hút mỗi khi xuất hiện trước đám đông. Bạn hãy lựa chọn mũ Beret len tròn cùng với bộ đồ street style cực chất. Lúc này, mọi người không khỏi trầm trồ bởi sự nổi bật và cực kỳ sáng tạo của bạn.",
    reviews: [
      {
        rating: 4.8,
        text: "Nón tuyệt vời y chang hình… đường chỉ tinh tế… hài lòng",
      },
      {
        rating: 4.9,
        text: "Dáng chuẩn, hình thêu nét đẹp",
      },
    ],
    avgRating: 4.8,
    amount: 200,
    sold: 168,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 18, 2022",
  },

  {
    id: "16",
    productName: "Mũ Beret MT03",
    imgUrl: productImg16,
    category: "Beret",
    price: 169000,
    shortDesc:
      "Mũ tròn hay miki hat là kiểu mũ có vành ôm trọn vào đầu. Mũ tròn nhung gân MT03 mang đến cảm giác chắc chắn bởi lòng mũ sâu và tròn được thiết kế với khoá đồng điều chỉnh kích thước dễ dàng.",
    description:
      "Dễ phối đồ, hợp với phong cách năng động và cá tính nên mũ tròn rất được lòng các tín đồ thời trang. Chất liệu nhung cao cấp mềm mại tạo sự sang trọng, đẳng cấp hơn cho người dùng. Muốn tạo nên sự khác biệt, khẳng định bản thân đầy thu hút mỗi khi xuất hiện trước đám đông. Bạn hãy lựa chọn mũ tròn nhung gân cùng với bộ đồ street style cực chất. Lúc này, mọi người không khỏi trầm trồ bởi sự nổi bật và cực kỳ sáng tạo của bạn.",
    reviews: [
      {
        rating: 4.8,
        text: "Ship nhanh, Đóng gói cẩn thận mũ đẹp giống hình …  ",
      },
      {
        rating: 4.9,
        text: "Mình đặt hàng dùm bạn nên không biết chất lượng như thế nào, nhưng giao hàng rất nhanh",
      },
    ],
    avgRating: 4.8,
    amount: 200,
    sold: 169,
    get remainingAmount() {
      return this.amount - this.sold;
    },
    arrivedAt: "Oct 22, 2022",
  },
];

export default products;
