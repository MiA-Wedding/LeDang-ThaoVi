/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Lê Đăng ",
  brideName: "Thảo Vi",

  weddingDate: "12/26/2025  17:00:00",
  location: "📍 Tại Trường mầm non xã Vĩnh Kiên, Thôn Đa Cốc- xã Thác Bà ( xã Vĩnh Kiên cũ ) - tỉnh Lào Cai ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/FRonUDhxgU8HnAMh9",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12820.75168878968!2d105.03233403249841!3d21.762763358044097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134a9d4bfe02fcb%3A0x3d5d875646fdcc04!2zVHLGsOG7nW5nIG3huqdtIG5vbiB4w6MgVsSpbmggS2nDqm4!5e1!3m2!1svi!2s!4v1764788897680!5m2!1svi!2s",

  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/cisr4Sp1bIY",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: " Lê Đăng",
      parents: "Bố: Lê Thanh Tùng<br>Mẹ: Vũ Kim Huế ",
      address: "Địa chỉ: Thôn Hồ Sen - xã Thác Bà ( xã Bạch Hà cũ ) - tỉnh Lào Cai "
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Thảo Vi ",
      parents: "Bố: Nguyễn Văn Xuyên <br>Mẹ: Phạm Thị Thảo ",
      address: "Địa chỉ: Thôn Đa Cốc- xã Thác Bà ( xã Vĩnh Kiên cũ ) - tỉnh Lào Cai "
    }
  },
};
