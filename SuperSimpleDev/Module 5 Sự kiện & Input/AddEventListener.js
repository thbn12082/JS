// không nên dùng onclick như bài trươc bởi vì chỉ bắt đc 1 sự kiện onclick, sự kiện sau sẽ ghi đè sự kiện trước

const btn = document.querySelector('.js-btn');

// click, keydown - gõ phím, scroll - cuộn trang, mouseover - di chuột vào
btn.addEventListener('click', () => {
    console.log('Đã click');
});

btn.addEventListener('click', () => {
    console.log('Click lần 2');
})
