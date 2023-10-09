(function(){
    let menu = document.querySelector('.sahifalar');
    let closer = document.querySelector('.close');
    let opener = document.querySelector('.mobilenavbtn');
    let div = document.querySelector('.div');

    opener.addEventListener('click', function(){
        menu.classList.add('show');
    });

    closer.addEventListener('click', function(){
        menu.classList.remove('show');
    });
})();