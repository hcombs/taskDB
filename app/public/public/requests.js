const getUrl = `${window.location.href}task/`;
const postUrl = `${window.location.href}`;

const postObject = {
        method:'POST',
        headers:{"Content-Type":"application/JSON"},
        body:''
}

const getTasks = async (date) => {
    const response = await fetch(`${getUrl}${date}`);
    return response.json();
}

const postTask = async (data) => {
    postObject.body = JSON.stringify(data);
    const response = await fetch(postUrl,postObject);
    return response.json();
};