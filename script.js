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
    //promise.formData()
    //promise.blob()
    //promise.arrayBuffer()
// }

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

// const  url = 'https://jsonplaceholder.typicode.com/posts'
//
// async  function postPosts() {
//     let promise = await fetch(url,{
//         method:'POST',
//         body: ({
//             title:'foo',
//             body:'bar',
//             userId:1
//         }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     try {
//         const promise = await fetch(url)
//         if (promise.ok) {
//             console.log(promise)
//         }
//     } catch (e) {
//         console.log('catch', e)
//         throw  Error('errorrrr')
//     }
//     const result = await promise.json();
//     console.log(result)
// }
// postPosts()

//////////////














// const url = 'https://jsonplaceholder.typicode.com/posts/1'
//
// async function zapros() {
//     let promise = await fetch(url,{
//         method:'delete', body: ({
//             userId: 13
//         }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     try {
//         const promise = await fetch(url)
//         if (promise.ok) {
//             console.log(promise)
//         }
//     } catch (e) {
//         console.log('catch', e)
//         throw  Error('errorrrr')
//     }
//     const result = await promise.json();
//     console.log(result)
//
//
//
// }

// zapros()







/////// fetch method


//
// fetch(url,{
//     //method: 'PUT'
//     //method: 'POST'
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'изменили название'
//     }),
//     headers: {
//         'Content-type':'application/json; charset=UTF-8'
//     }
// })
//       .then(response => response.json())
//       .then(result => console.log(typeof result.title === 'string'))



const myForm = document.getElementById('my-form')

function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()
    console.log(formData)

    for (const key in formData) {
        console.log(key)
    }

    // for (const key in formData) {
    //     if (FormData.prototype.hasOwnProperty(key)) {
    //         console.log('FormData key', key)
    //     }
    // }

    handleSubmitFormData(formData)
}

myForm.addEventListener('submit', handleSubmit)


const  handleSubmitFormData = (e) => {
    console.log(this)
}
const url = 'https://jsonplaceholder.typicode.com/posts'

// const handleSubmitFormData = (formData) => {
//     fetch(url, {
//         method:'POST',
//         headers: {
//             // 'Content-type' : 'application/json',
//             'Content-type' : 'multipart/form-data'
//         },
//         body: formData
//     })
// }
//
// myForm.addEventListener('submit', handleSubmit)