async function RequestModule(url, method, body, headers) {
    try {
        let obj = method === 'get' ? {} : {
            headers,
            body: JSON.stringify(body),
            method
        };

        const result = await fetch(url, obj);
        const resJson = await result.json();
        return resJson;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export default RequestModule;