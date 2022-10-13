



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

//
//



// const myForm = document.getElementById('my-form')
//

// function declaration

//
// function handleSubmit(e) {
//     e.preventDefault()
//
//     const formData = new FormData(myForm)
//     console.log(formData)
//
//
//     formData.append('new field', 'строка')
//
//     let a = formData.has( 'new field')
//
//     for (const key in formData) {
//         console.log(key)
//     }
//
//     for (const key in formData) {
//         if (FormData.prototype.hasOwnProperty(key)) {
//             console.log('FormData key', key)
//         }
//     }

    //handleSubmitFormData(formData)
// }

//
//
// myForm.addEventListener('submit', handleSubmit)
//
//
// const  handleSubmitFormData = (e) => {
//     console.log(this)
// }
// const url = 'https://jsonplaceholder.typicode.com/posts'
//
//
// //function expession
//
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


//методы
//formData.append(name, value)
//formData.has(name)
//formData.delete(name)

const myForm = document.getElementById('my-form')
const input = document.getElementById('picture')

 myForm.addEventListener('submit', function (e) {
     e.preventDefault()
     const formData = new FormData()


    Array.from(this).forEach(({name, value}) =>{
    if (value) {
        formData.append(name, value)
    }
    })
     for (const key of formData){
         console.log(key)
     }
 })

function postData(formData) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Content-type' : 'multipart/form-data'
        },
        body: formData
    })
}


