const demand = fetch('https://otedia.com/file.json');

demand.then((response) => {
    // در این بلاک میتوانیم از پاسخ استفاده کنیم
})
.catch((error) => {
    // در این بلاک میتوانیم خطا ها را مدیریت کنیم
});

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        console.log(response.status);
        console.log(response.ok);
        console.log(response.url);
    });