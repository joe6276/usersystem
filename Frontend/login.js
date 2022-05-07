"use strict";
class Login {
    constructor() {
        this.login();
    }
    login() {
        const login = document.getElementById('login');
        login.addEventListener('click', () => {
            let input5 = document.getElementById('input5');
            let input6 = document.getElementById('input6');
            let email = input5.value;
            const password = input6.value;
            console.log("About to Login ...");
            this.logUser(email, password);
        });
    }
    logUser(email, password) {
        // console.log({email,password})
        let prom = new Promise((resolve, reject) => {
            fetch('http://localhost:4010/api/user/login', {
                method: 'Post',
                body: JSON.stringify({
                    "email": email,
                    "password": password
                }),
                headers: {
                    "Content-Type": " application/json"
                }
            }).then(data => {
                resolve(data.json());
            }).catch(err => {
                reject(err);
            });
        });
        prom.then(data => {
            if (data.access_token) {
                localStorage.setItem("token", data.access_token);
                window.location.replace('http://127.0.0.1:5500/Frontend/home.html');
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
new Login();
