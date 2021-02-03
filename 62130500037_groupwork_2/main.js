    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
                shown : true,
                url : 'https://sit.kmutt.ac.th'
            }
        },
       

    }
   
   var mountedApp = Vue.createApp(app).mount('#app');