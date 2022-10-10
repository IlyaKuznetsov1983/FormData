// const  url = 'https://jsonplaceholder.typicode.com/users'
//
// const promise = fetch(url)

// async function forExample () {
//     try {
//         const promise = await fetch(url)
//         if (promise.ok) {
//             console.log(promise)
//         }
//
//     } catch (e) {
//         console.log('catch', e)
//         throw  Error('errorrrr')
//     }
//
// }
//
//
// forExample()


 // function forExample2 () {
 //
 //    const promise =  fetch(url)
 //    const result =  promise.json()

 //    console.log(result)
    //promise.text()
    //promise.json()
    //promise.blob()
    //promise.arrayBuffer()
}

//forExample2()

// function forExample3 () {
//
//     const promise = fetch(url)
//
//     promise
//         .then(result => result.json())
//         .then(result => console.log(result))
// }
// forExample3()

// function forExample4 () {
//
//     const promise = fetch(url)
//
//    return fetch(url)
// forExample4()

const  url = 'https://jsonplaceholder.typicode.com/posts'

async  function postPosts() {
    let promise = await fetch(url,{
        method:'POST',
        body: JSON.stringify({
            title:'foo',
            body:'bar',
            userId:1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    try {
        const promise = await fetch(url)
        if (promise.ok) {
            console.log(promise)
        }
    } catch (e) {
        console.log('catch', e)
        throw  Error('errorrrr')
    }
    const result = await promise.json();
    console.log(result)
}
postPosts()



