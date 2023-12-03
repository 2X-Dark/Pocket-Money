
    const divContainer = document.querySelector('#nav-bar');
    let isClicked = true;

    let showOrHide = function(){
        if(isClicked){
            divContainer.style.display = 'block';
            isClicked =false;
        }else{
            divContainer.style.display ='none';
            isClicked = true;
        }
    }