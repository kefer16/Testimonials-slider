let button_prev = document.getElementById("button-prev");
let button_next = document.getElementById("button-next");
let testimonials = document.querySelector(".testimonials");
let photo_user = document.getElementById("photo-user");
let comment = document.getElementById("comment");
let name_user = document.getElementById("name-user");
let working_user = document.getElementById("working-user");

let variant = true;

function replaceContent(){
    if(variant){
        photo_user.src = "./images/image-john.jpg";
        comment.innerHTML = `“ If you want to lay the best foundation
        possible I’d recommend taking this course. The
        depth the instructors go into is incredible. I
        now feel so confident about starting up as a
        professional developer. ”`;
        name_user.innerHTML = `John Tarkpor`;
        working_user.innerHTML = `Junior Front-end Developer`;
        
    }else{
        photo_user.src = "./images/image-tanya.jpg";
        comment.innerHTML = `“ I’ve been interested in coding for a while but
        never taken the jump, until now. I couldn’t
        recommend this course enough. I’m now in the job
        of my dreams and so excited about the future. ”`;
        name_user.innerHTML = `Tanya Sinclair`;
        working_user.innerHTML = `UX Engineer`;
        
    }
    variant = !variant;
};

button_prev.addEventListener("click", replaceContent);
button_next.addEventListener("click",replaceContent);
