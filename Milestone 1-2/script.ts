
const ref_section = document.getElementById('ref')
const ref_btn = document.getElementById('ref_btn')


ref_btn?.addEventListener('click' , ()=>{
    ref_section!.classList.toggle('hide')
})


const EXP_section = document.getElementById('EXPERIENCE')
const EXP_btn = document.getElementById('EXP_btn')

EXP_btn?.addEventListener('click' , ()=>{
    EXP_section!.classList.toggle('hide')
})

