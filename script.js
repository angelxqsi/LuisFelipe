document.getElementById('generate-button').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var uppercase = document.getElementById('uppercase').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;

    var password = generatePassword(length, uppercase, lowercase, numbers, symbols);
    document.getElementById('password').value = password;
});

document.getElementById('copy-button').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    passwordInput.select();
    document.execCommand('copy');
    alert('Contraseña copiada al portapapeles: ' + passwordInput.value);
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    var charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    var password = '';
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}
