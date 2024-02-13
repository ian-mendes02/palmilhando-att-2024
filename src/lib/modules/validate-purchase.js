export async function validateAtendee(email, name) {
    const v = await fetch('http://localhost:8081/projects/2024/palmilhando/src/lib/modules/request.php/', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({email: email, name: name}),
    }).then((res) => {
        return res.json();
    }).then((response) => {
        return (response.valid_email || response.valid_name);
    });
    return v;
};

export async function validateMember(email) {
    const token = await fetch('https://api.themembers.dev.br/api/generate-token', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({user_id: process.env.NEXT_PUBLIC_TM_USER_ID}),
    }).then((res) => {
        return res.json();
    }).then((data) => {
        return data.token
    });
    const validMember = await fetch(`https://registration.themembers.dev.br/api/users/show-email/${email}/${token}/${process.env.NEXT_PUBLIC_TM_PLATFORM_TOKEN}`)
    .then((res) => {
        return res.json()
    }).then((data) => {
        return (data.user != null);
    });
    return validMember;
}