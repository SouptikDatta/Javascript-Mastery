var btn = document.getElementsByClassName('question');

for(var i= 0;  i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        this.classList.toggle("active");
        var answer = this.nextElementSibling;
        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
}