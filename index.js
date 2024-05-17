// const inp = document.querySelector('.em')
// const re_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
// const re_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
// const pass = document.querySelector('.pass')

// pass.onkeyup = (p) => {
//     const val = p.target.value

//     if(re_pass.test(val)) {
//         pass.style.borderColor = 'blue'
//     } else {
//         pass.style.borderColor = 'red'
//     }
// }

// inp.onkeyup = (e) => {
//     const val = e.target.value

//     if(re_email.test(val)) {
//         inp.style.borderColor = 'blue'
//     } else {
//         inp.style.borderColor = 'red'
//     }
// }


const form = document.forms.namedItem('application')
const inps = form.querySelectorAll('input')
const all = document.querySelectorAll('.all_count')
const n_toFill_inps = form.querySelectorAll('.need_to_fill')
const fill_txt = form.querySelectorAll('.fill')
const span = form.querySelectorAll('span')
const from = document.querySelector('.from')
const errored = document.querySelector('.errored') 
const success = document.querySelector('.scs')



const re_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const re_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
const re_uzTel = /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/
const re_date = /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[1,2])\/(19|20)\d{2}/
const re_color = /\#([a-fA-F]|[0-9]){3, 6}/

inps.forEach(item => {
    item.onkeyup = (e) => {
        const val = item.value

        if(item.name === 'email') {
            if(re_email.test(val)) {
                item.style.borderColor = 'blue'
            } else {
                item.style.borderColor = 'red'
            }
        } else if (item.name === 'password') {
            if(re_pass.test(val)) {
                item.style.borderColor = 'blue'
            } else {
                item.style.borderColor = 'red'
            }
        } else if (item.name === 'tel') {
            if(re_uzTel.test(val)) {
                item.style.borderColor = 'blue'
            } else {
                item.style.borderColor = 'red'
            }
        } else if (item.name === 'date') {
            if(re_date.test(val)) {
                item.style.borderColor = 'blue'
            } else {
                item.style.borderColor = 'red'
            }
        } else if (item.name === 'color-code') {
            if(re_color.test(val)) {
                item.style.borderColor = 'blue'
            } else {
                item.style.borderColor = 'red'
            }
        }
        
    }
})



all.forEach(n => {
    n.innerText = inps.length
})

from.innerText = n_toFill_inps.length

form.onsubmit = (event) => {
    event.preventDefault();

    let successed = 0

    for(let i = 0; i < inps.length; i++) {
        if(inps[i].value.length > 0) {
            successed++;
            success.innerText = successed
        }
    }


    let count = 0

    for(let i = 0; i < n_toFill_inps.length; i++) {
    if(n_toFill_inps[i].value === "") {
        count++;
        errored.innerText = count
        }
    }

    let error = true

    if(error) {
        alert('fill all inputs')
    }

    if(!error) {
        const user= {}

        const fm = new FormData(form)

        fm.forEach((val, key) => {
            user[key] = val
        })

        console.log(user)
        form.reset()
    }


}


