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

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        if(response.ok){
            return response.text();
        }else{
            throw Error(response.status);
        }
    })
    .then((text) => console.log(text))
    .catch((error) => console.log(error));

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        if(response.ok){
            return response.json();
        }else{
            throw Error(response.status);
        }
    })
    .then((obj) => console.log(obj.title))
    .catch((error) => console.log(error));

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        console.log(response.redirected);
    });
//false

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        console.log(response.headers.get('Content-Type'));        // "application/json; charset=utf-8"
        console.log(response.headers.get('Date'));                        // null
        console.log(response.headers.has('Content-Type'));        // true
        console.log(response.headers.has('Date'));                    // false
    });

    const todo = {
        userId: 1,
        id: 456,
        title: 'تمام کردن دوره قرانت اند کوئرا کالج با نمره عالی!',
        completed: false,
      }
      
      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {})

        console.log("Start")
async function asyncFetch(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("بعد از fetch اجرا می شود")
    let obj = await response.json();
    console.log(obj.id);
}
asyncFetch()
console.log("end")