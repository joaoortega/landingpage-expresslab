const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    console.log('consegui');

    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);
    
    localStorage.setItem('lead', convertData);

    let content = document.getElementById('dataform');
    let carregando = `<p>Enviando dados...</p>`;
    let enviado = `<p>Email cadastrado com sucesso!</p>`;
    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = enviado
        }, 2000)

    alert(`Parabéns!\nA partir de agora você receberá nossas promoções no e-mail ${email}.`);


})