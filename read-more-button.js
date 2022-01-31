'use strict';

const text = document.querySelector('.detail-box'); // div с текстом
const btn = document.getElementById('read-more');

const textCutting = function(e) {
    e.preventDefault();
    text.classList.toggle('detail-box__shown');
    this.textContent = this.textContent === 'Read More' ? 'Read Less' : 'Read More';
    };

btn.addEventListener('click', textCutting); 

///css///

// .detail-box {
//   height: 400px;
//   overflow: hidden;
// }

// .detail-box__shown {
//   height: auto;
// }
