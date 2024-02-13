const uid = '1d021680-a24d-4dde-8c65-687a44a37c29'
fetch('https://api.themembers.dev.br/api/generate-token', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({user_id: uid}),
    }).then((res) => {
        return res.json();
    }).then((response) => {
        console.log(response);
    });