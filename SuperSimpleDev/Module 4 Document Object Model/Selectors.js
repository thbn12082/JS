// HTML: <h1 id="title" class="main-text">Xin chào</h1>

const heading = document.querySelector('#title');
heading = document.querySelector('h1');
heading = document.querySelector('.main-text');

// khác biệt giữa innerHTML và innerText là innerHtml sẽ hiểu thẻ b, ...heading(thẻ html) còn innerText thì in thẳng ra tất cả ký tự, không hiểu thẻ html
heading.innerHTML = " Tôi là <b>Nguyễn Thế Bình<b>";
heading.innerText = " Tôi là Nguyễn Thế Bình";

heading.style.color = 'red';
heading.style.color = '#00ff00';
heading.style.size = '30px';

