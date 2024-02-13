const data = {
    name: 'Ian Mendes',
    document: '43041462893',
    email: 'ianlucamendes02@gmail.com',
    phone: '+5512996192962',
    corporation_name: 'MB PRODUTOS FIISIOTERAPICOS IMP EXP LTDA',
    corporation_cnpj: '16737415000182',
    corporation_address: 'Rodovia Celso Garcia Cid 381 Parque Residencial Manela Cambé PR',
    app_name: 'user_validation',
    app_desc: 'API de verificação de assinatura válida no Palmilhando, para uso em aplicações externas nas quais é necessário validar a assinatura do usuário. Por algum motivo, a descrição do aplicativo precisa conter pelo menos 200 caracteres, o que, sinceramente, é desnecessário e dispendioso.'
};
fetch('https://api.themembers.dev.br/api/register', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(data)
}).then((res) => {
    return res.json()
}).then((data) => {
    console.log(data);
})