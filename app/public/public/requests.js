const getTasks = async (date) => {
    const response = await fetch(`${window.location.href}task/${date}`);
    return response.json();
}

const postTask = async (data) => {
    const response = await fetch(window.location.href, {
        method:'POST',
        headers:{"Content-Type":"application/JSON"},
        body:JSON.stringify(data)
    });

    return response.json();
};