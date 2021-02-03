const app = {
    data() {
        return {
            firstname: 'Thanapat',
            lastname: 'Suwannaard',
            role: 'Student',
            id : '62130500037',
            age : '19',
            image : 'images/profile.jpg',
            faculty: 'SIT',
        }
    },
   

}

var mountedApp = Vue.createApp(app).mount('#app');
