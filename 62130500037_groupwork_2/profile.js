const app = {
    data() {
        return {
            name: 'Thanapat Suwannaard',
            role: 'Student',
            id : '62130500037',
            age : '19',
            image : 'images/profile.jpg',
            faculty: 'SIT',
        }
    },
   

}

var mountedApp = Vue.createApp(app).mount('#app');