// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // Độ dài của câu có thể là bất kỳ, bạn có thể viết mười câu, hai mươi câu đều được
    // Mỗi câu nên giữ ít hơn 15 chữ, để tránh ảnh hưởng đến hiệu ứng hiển thị
    texts: [
        "Tặng em Bonnn",
        "Chó",  
        "Láo",
     " DM không ghép ảnh vào được bị lỗi ,dcm dcm e Bon"
        "By Nớt cuto:)~~",
    ],
    /**
     * imgs không bắt buộc phải điền, nhưng nếu điền thì phải tuân thủ định dạng dưới đây
     * "Câu tương ứng ở trên, phải giống hệt" : "Đường dẫn hình ảnh, có thể để ảnh trong thư mục imgs"
     * Ví dụ
     * "Người yêu dấu của anh": "./imgs/xiaokeai.jpg"
     *
     * Nếu không muốn có ảnh, chỉ cần viết hai dấu gạch chéo ở đầu mỗi dòng, ví dụ như hình ảnh của "Hôm nay là ngày sinh nhật của em" sẽ không hiển thị :)
     * Tip: Ảnh nên là hình vuông hoặc gần vuông để trông nó đẹp hơn
     */
    imgs: {
        "Tặng em Bon":"./imgs/363815578_3474461706128956_5032989694282223067_n.jpg"
        // "Hôm nay là ngày sinh nhật của em": "./imgs/birthday.jpg",
    },
    // Mô tả về nút, dưới đây là văn bản mặc định của nút, bằng tiếng Anh, bạn có thể thay đổi thành văn bản bạn thích
    desc: {
        turn_on: "bậttt đê",
        play: "nhấn đi Bon:)",
        bannar_coming: "tặng này đây",
        balloons_flying: "tiếp theo này",
        cake_fadein: "tặng này nè",
        light_candle: "Thổi nến cuto:)",
        wish_message: "Chúc mừng sinh nhật Bon, hạnh phúc, lạc quan và tích cực",
        story: "LỜI NHẮN TỚI Bon",
    }
};
