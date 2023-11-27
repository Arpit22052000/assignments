const revealTheContent = document.querySelector('.reveal');
    const hiddenContent = document.querySelector('.hidden-content');

   function revealContent(){
    if (hiddenContent.classList.contains('reveal')){
        hiddenContent.classList.remove('reveal');
    }else{
        hiddenContent.classList.add('reveal');
    }
   }

revealTheContent.addEventListener('click', revealContent);
    