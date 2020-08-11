let f3 = document.forms.f3;
console.log(f3);
let d = document.querySelector('h2');
console.log(d)

f3.first.addEventListener('input', function() {
    document.getElementById('firstname').innerText= f3.first.value;
})
f3.second.addEventListener('input', function() {
    document.getElementById('lastname').innerText= f3.second.value;
})
f3.email.addEventListener('input', function() {
    document.getElementById('mail').innerText= f3.email.value;
})
function radio_woman() {
    if(event.target.type ==='radio') {
        if(document.querySelector('.photo')){
            document.querySelector('.photo').setAttribute('class', 'photo_w')
        }
    }
}
function radio_man() {
    if(event.target.type ==='radio') {
        if(document.querySelector('.photo_w')){
            document.querySelector('.photo_w').setAttribute('class', 'photo')
        }
    }
}
f3.prof.addEventListener('change', function() {
    document.querySelector('#profes').innerText = event.target.value
})
f3.agree.addEventListener('click', function() {
    if(event.target.checked=true){
        document.getElementById('s_up').style.backgroundColor='rgba(13, 155, 107, 0.815)';
        document.getElementById('s_up').addEventListener('click', function () {
            if (f3.first.value.length!=0 && f3.second.value.length!=0 && f3.email.value.length!=0) {
            document.getElementById('form_3').style.display = 'none';
            document.getElementById('all').style.display = 'flex'
            }
        })
    }
})
document.getElementById('s_out').addEventListener('mouseover', function() {
    document.getElementById('s_out').style.backgroundColor='rgba(13, 155, 107, 0.815)'
    document.getElementById('s_out').addEventListener('mouseout', function() {
        document.getElementById('s_out').style.backgroundColor='white'
    })
})

document.getElementById('s_out').addEventListener('click', function () {
    document.getElementById('form_3').style.display = 'flex';
    document.getElementById('all').style.display = 'none';
    location.reload(10);
})
