const formVisible = document.querySelector('#form_visible');
const source = document.querySelector('#group_template').innerHTML;
const groupTemplate = Handlebars.compile(source);
const modal = document.querySelector('div.modal');
const modalBody = modal.querySelector('div.modal-body');
const modalHeader = modal.querySelector('div.modal-header');
modal.addEventListener('hidde.bs.modal', function (event) {
    clear();
});
modal.querySelector('#modal_btn').addEventListener('click', function (event) {
    clear();
})
formVisible.addEventListener('submit', function (event) {
    let groups = formVisible.querySelectorAll('div.form-group');
    let title = groups[0].querySelector('input').value;
    modalHeader.querySelector('#final_title').innerText = title;
    clear();
    for (let index = 1; index < groups.length; index+=2) {
        let label1 = groups[index].querySelector('label');
        let input1 = groups[index].querySelector('input');
        let label2 = groups[index+1].querySelector('label');
        let inputs2 = groups[index+1].querySelectorAll('input');
        let context = {
            'id_number': input1.id,
            'id_str': label1.innerText,
            'q_content': input1.value,
            'alt1_id': inputs2[0].id,
            'alt1_content': inputs2[0].value,
            'alt2_id': inputs2[1].id,
            'alt2_content': inputs2[1].value,
            'alt3_id': inputs2[2].id,
            'alt3_content': inputs2[2].value,
            'alt4_id': inputs2[3].id,
            'alt4_content': inputs2[3].value,
        };
        let html = groupTemplate(context);
        modalBody.querySelector('form.form-horizontal').innerHTML += html;
    }
    event.preventDefault();
});
function clear() {
    modalBody.querySelector('form.form-horizontal').innerHTML = '';
}
let btn1 = document.querySelector('#subm');  
btn1.addEventListener('click', function (e) {
    adicionaDinos();
    e.preventDefault();
});
