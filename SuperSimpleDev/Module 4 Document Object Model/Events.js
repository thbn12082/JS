// HTML: <button class="btn-login">Đăng nhập</button>

const btnLogin = document.querySelector('.btn-login');

btnLogin.onclick = () => {
    console.log("Nút đã được bấm");
    btnLogin.style.backgoundColor = 'red';
    btnLogin.innerText = "Đang xử lý...."
}





// html <button class="js-subscribe-btn">Subscribe</button>

// const btnSubcribe = document.querySelector('.js-subcribe-btn');
// btnSubcribe.onclick = () => {
//     console.log("Subscribe thành công");
//     btnSubcribe.innerText = "Subcribed";
//     btnSubcribe.style.color = "white";
//     btnSubcribe.style.backgroundColor = "red";
// }

