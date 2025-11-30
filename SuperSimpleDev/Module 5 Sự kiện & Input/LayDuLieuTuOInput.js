// lấy dữ liệu từ ô input. 
// Các thẻ thường dispatchEvent, span, h1,... thì dùng .innerText, innerHtml
// còn trong các thẻ input, select, textarea thì dùng .value để lấy dữ liệu người dùng nhập vào.
const inputElement = document.querySelector(".js-input-name");
const btnSubmit = document.querySelector(".js-btn-submit");

btnSubmit.addEventListener('click', () => {
    const name = inputElement.value;
    console.log(name);
});



const costInput = document.querySelector('.js-cost-input');
const caculateBtn = document.querySelector('.js-calculate-btn');
const result = document.querySelector('.js-result');

caculateBtn.addEventListener('click', () => {
    let cost = Number(costInput.value);
    if (cost < 40) {
        cost = cost + 10;
    }
    result.innerHTML = `Tổng số tiền cần thanh toán là ${cost}$`;
});
costInput.addEventListener('keydown', () => {
    if (costInput.key === 'Enter') {
        let cost = Number(costInput.value);
        if (cost < 40) {
            cost = cost + 10;
        }
        result.innerHTML = `Tổng số tiền cần thanh toán là ${cost}$`;
    }
});

