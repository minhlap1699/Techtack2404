// object thể hiện 1 đối tượng được dùng nhiều nhất js
// console là 1 đội tướng là con của đối tượng window
// window là 1 đối tượng to nhất, mọi thứ đều bên trong đối tượng window
// undefined là chưa được định nghĩa
// null là object rỗng không có ý nghĩa gì hết
// NAN not a number
// Function: hàm là tập 1 đoạn code thực hiện một chứ năng nào đấy
// Tên hàm nên viết là động từ
// Khai báo hàm: đặt vào biến var const let
// -function
// arrow function ( hàm mũi tên)  nếu chỉ có 1 tham số có thể bỏ luôn dấu ngoặc
// return : Đầu ra : kết quả mà hàm trả về


// function chao(){
//     // các câu lệnh
//     console.log('Xin chào')
//     console.log('Tôi là Lập')
//     console.log('Tôi 34 tuổi')
// }
// function cong(a, b){
//     return a+b;
// }

// let txt = prompt('Nhập ký tự');

// for(let user of users){
//     const fullname = `${user.first_name} ${user.last_name}`;
//     console.log(fullname)
// }

// tìm element theo id
// const $paragraph = document.getElementById('paragraph');

// console.log('Đây là thẻ: ', $paragraph);

// tìm element theo tag name

// const $p = document.getElementsByTagName('p');

// console.log('Đây là thẻ: ', $p);

// tìm element theo  class

// const $p = document.getElementsByClassName('text');

// console.log('Đây là thẻ: ', $p[0]);


//document.querySelector

// const $p = document.querySelectorAll('p#paragraph.text');

// console.log('Đây là thẻ: ', $p);

// cách 1
// const $tagA = document.getElementById('tagA');

// $tagA.href = 'https://gg.com';

// console.log($tagA.href);

// $tagA.setAttribute('href','https://vn.com')

// thay đổi style của 1 element

// $tagA.style.backgroundColor = 'blue';

// xóa thuộc tính của 1 element

// $tagA.removeAttribute('href');

// $tagA.innerHTML = '<p>Hello AE</p>';

//tạo mới element

// let $tagH2 = document.createElement('h2');
// $tagH2.innerHTML = 'Nội dung thẻ h2';
// console.log($tagA);
// document.body.appendChild($tagH2);
// $tagH2.remove();


// const favorite = document.querySelectorAll('.favorite-list-item');

// console.log(favorite);
// for(let i = 0; i < favorite.length; i++){
//     favorite[i].innerHTML = 'I love this thing';
// }
// function logger() {
//     alert('Hello!!');
// }
