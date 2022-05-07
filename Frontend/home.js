"use strict";
class Home {
    constructor() {
        this.getUser();
    }
    getUser() {
        let prom = new Promise((resolve, reject) => {
            fetch('http://localhost:4010/api/user/homes/34', {
                method: 'Get',
                headers: {
                    "Content-Type": " application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(data => {
                resolve(data.json());
            }).catch(err => {
                reject(err);
            });
        });
        prom.then(data => {
            console.log(data);
            const root = document.getElementById('root');
            const h1 = document.createElement('h1');
            h1.textContent = ` Welcome ${data.fullname}`;
            root.appendChild(h1);
        }).catch(err => {
            console.log(err);
        });
    }
}
const h = new Home();
