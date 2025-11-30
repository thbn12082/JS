// HTML: <button class="btn-login">Đăng nhập</button>

const btnLogin = document.querySelector('.btn-login');

btnLogin.onClick = () => {
    console.log("Nút đã được bấm");
    btnLogin.style.backgoundColor = 'red';
    btnLogin.innerText = "Đang xử lý...."
}





// html <button class="js-subscribe-btn">Subscribe</button>

const btnSubcribe = document.querySelector('.js-subcribe-btn');
btnSubcribe.onClick = () => {
    console.log("Subscribe thành công");
    btnSubcribe.innerText("Subcribed");
    btnSubcribe.style.color("white");
    btnSubcribe.style.backgoundColor("red");
}

