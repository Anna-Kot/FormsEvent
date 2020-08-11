let f1 = document.forms.f1;
console.log(f1);
f1.first.addEventListener('input', function () {
    document.getElementById('first').style.borderColor='rgb(53, 161, 211)';
    f1.move.addEventListener('click', function() {
        if (f1.first.value !=="") {
            let user_f = f1.name_f.value;
            f1.new.value = user_f;
        }
        f1.name_f.value = "";
        document.getElementById('first').style.borderColor='silver'
    })
});


let f2 = document.forms.f2;
console.log(f2);
f2.name_place.addEventListener('input', function() {   
    document.getElementById('n').style.borderColor='rgb(53, 161, 211)';
    f2.n.addEventListener('change', function() {
        if (f2.n.value !== "") {
            let res=''
            for(let i=0; i<n.value.length; i++) {
                res= res+ n.value[i]
            }
            console.log(res);
            document.getElementById('n').placeholder = res
        }
        f2.n.value="";
        document.getElementById('n').style.borderColor='silver'
    })
})
