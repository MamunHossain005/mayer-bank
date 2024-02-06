document.getElementById('btn-submit').addEventListener('click', ()=> {
    const userEmailElement = document.getElementById('user-email');
    const userEmail = userEmailElement.value;
    const userPasswordElement = document.getElementById('user-password');
    const userPassword = userPasswordElement.value;

    if(userEmail === 'pavel@gmail.com' && userPassword === 'secret') {
        window.location.href = './money.html';
    }
    else {
        alert('Wrong Email Address and Password.')
    }

    userEmailElement.value = '';
    userPasswordElement.value = '';
});