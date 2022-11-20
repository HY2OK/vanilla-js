function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            const res = JSON.parse(xhr.response);
            console.log(res);
            return res;
        } else {
            console.log(xhr.status, xhr.statusText);
            return;
        }
    };
}

const res = getData();
console.log(res);

console.log('다음 코드를 실행합니다.');
