"use strict";
class User {
    constructor() {
        this.addUser();
    }
    addUser() {
        const submit = document.getElementById('submit');
        submit.addEventListener('click', () => {
            let input1 = document.getElementById('input1');
            let input2 = document.getElementById('input2');
            let input3 = document.getElementById('input3');
            let input4 = document.getElementById('input4');
            let fullname = input1.value;
            let email = input2.value;
            let age = input3.value;
            let password = input4.value;
            this.sendUser(fullname, email, age, password);
        });
    }
    sendUser(fullname, email, age, password) {
        console.log(typeof fullname, typeof email, typeof age, typeof password);
        const prom = new Promise((resolve, reject) => {
            fetch('http://localhost:4010/api/user', {
                method: 'Post',
                body: JSON.stringify({
                    "fullname": fullname,
                    "email": email,
                    "age": +age,
                    "password": password
                }),
                headers: {
                    "Content-Type": " application/json"
                }
            }).then(data => {
                resolve(data.json());
            }).catch(err => {
                reject(err.json());
            });
        });
        prom.then(data => {
            console.log(data);
            if (data.fullname) {
                window.location.replace('http://127.0.0.1:5500/Frontend/login.html');
            }
            if (data.message) {
                const errs = document.getElementById('errs');
                const errsuc = document.getElementById('errsuc');
                // const errsuc1= document.getElementById('errsuc1') as HTMLParagraphElement
                // const errsuc2= document.getElementById('errsuc2') as HTMLParagraphElement
                data.message ? errs.style.visibility = 'visible' : errs.style.visibility = 'hidden';
                data.message ? errsuc.textContent = " * Please Fill In all Fields" : '';
                // data.message[1]?  errsuc1.textContent=data.message[1]:''
                // data.message[2]?  errsuc2.textContent=data.message[2]:''
                //  data.message ? errsuc.className='err':'suc'
                //  data.message ? errsuc1.className='err':'suc'
                //  data.message ? errsuc2.className='err':'suc'
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
new User;
