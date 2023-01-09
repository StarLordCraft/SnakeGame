function handleClickOutside(targetElement, callback){
    const html = document.documentElement;

    function handleHTMLClick(event){
        if(!targetElement.contains(event.target)){
            targetElement.removeAttribute('data-target');

            html.removeEventListener('click', handleHTMLClick);
            html.removeEventListener('touchstart', handleHTMLClick);
            
            callback();
        }
    }

    if(!targetElement.hasAttribute('data-target')){
        html.addEventListener('click', handleHTMLClick);
        html.addEventListener('touchstart', handleHTMLClick);

        targetElement.setAttribute('data-target', "");
    }
}

function handleButtonClick(event){
    if(event.type === "touchstart")event.preventDefault();
    event.stopPropagation();

    const header = document.querySelector('header');
    const pause = document.getElementById('pause')

    header.classList.toggle('active');
    handleClickOutside(pause, () => {
        header.classList.remove('active');

    });
}

export {handleButtonClick, handleClickOutside};