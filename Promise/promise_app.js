function getDataPromise() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                const res = JSON.parse(xhr.response);
                resolve(res);
            } else {
                console.log(xhr.status, xhr.statusText);
                reject(new Error(xhr.status));
            }
        };
    });
}

getDataPromise().then(res => {
    console.log(res);
    console.log('다음 코드 실행');
});
