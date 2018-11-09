import Vue from 'vue'

var logged_user = null;
var imageList = [{
    title: 'Iguana',
    image: 'https://meusanimais.com.br/wp-content/uploads/2018/01/iguana-como-animal-de-estima%C3%A7%C3%A3o.jpg',
    description: 'Iguana fofinha que é verde e bonitinha demais.',
    id: 1,
    favorite: false
  }, {
    title: 'Gato',
    image: 'http://blogs.correiobraziliense.com.br/maisbichos/wp-content/uploads/sites/7/2018/01/gato-1024x576.jpg',
    description:'Gato fofinho, muito bonitinho, lindo igual um leãozinho',
    id: 2,
    favorite: false
}];

var imageGetter = {
    1: {
        title: 'Iguana',
        image: 'https://meusanimais.com.br/wp-content/uploads/2018/01/iguana-como-animal-de-estima%C3%A7%C3%A3o.jpg',
        description: 'Iguana fofinha que é verde e bonitinha demais.',
        id: 1,
        favorite: false       
    },
    2 : {
        title: 'Gato',
        image: 'http://blogs.correiobraziliense.com.br/maisbichos/wp-content/uploads/sites/7/2018/01/gato-1024x576.jpg',
        description:'Gato fofinho, muito bonitinho, lindo igual um leãozinho',
        id: 2,
        favorite: false
    }
};

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Mark',
                last_name: 'Zuckerberg',
                email: 'zuck@facebook.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_todo(newtask){
        return mockasync({description: newtask, done: false});
    },
    list_todos(){
        return mockasync({
            todos: [
                {description: 'Do the laundry', done: true},
                {description: 'Walk the dog', done: false}
            ]
        });
    }, 
    list_images() {
        return mockasync (imageList)
    },
    get_image(id) {
        return mockasync (imageGetter[id])
    },
    set_image(title, description, url) {

        let idNewImage = imageList.length + 1;

        imageList.push({
            title: title,
            image: url,
            description: description,
            id: idNewImage,
            favorite: false
        });

        imageGetter[idNewImage] = {
            title: title,
            image: url,
            description: description,
            id: idNewImage,
            favorite: false
        };

        console.log('foi!')

        return mockasync({});
    }
};

export default api;
