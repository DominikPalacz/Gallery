document.addEventListener('DOMContentLoaded', function () { //console.log('DOM ok')

    var allLi = document.getElementsByTagName('li'); //console.log(allLi); //arr
    var body = document.querySelector('body'); //console.log(body);
    /*    for (var i = 0; i < allLi.length; i++) {
            //console.log(allLi[i])
        }   */

    for (var i = 0; i < allLi.length; i++) {

        allLi[i].addEventListener('click', function () {

            var newEl = document.createElement('div'); //console.log(newEl);
            newEl.classList.add('fullScreen'); //console.log(newEl);

            // var srcA = this.innerHTML.getAttribute('src'); console.log(srcA);

            var newImg = document.createElement('img'); //console.log(newImg);
            // newImg.classList.add('src');  console.log(newImg);
            // newImg.setAttribute('src', "./images/"+i+".jpeg" );
            // var nr = newImg.getAttribute('src'); //console.log(nr);
            // var src = this.innerHTML; console.warn(this.innerHTML);
            // console.log(this.firstElementChild.src);
            newImg.src = this.firstElementChild.src;

            var newBtn = document.createElement('button'); //console.log(newBtn);
            newBtn.classList.add('close');
            newBtn.innerHTML = 'Close';

            newEl.appendChild(newImg);
            newEl.appendChild(newBtn); //console.warn(newEl);

            body.appendChild(newEl);

            var toDelete = document.querySelector('.fullScreen');

            toDelete.addEventListener('click', function (e) { //console.error('ok')
                e.preventDefault();

                toDelete.parentElement.removeChild(newEl);

            })

        })
    }
});
/*
<div class="fullScreen">
<img src="./images/wrong.png">
<button class="close">Close</button>
</div>
*/