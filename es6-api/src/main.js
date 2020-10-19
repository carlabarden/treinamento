import api from './api';

class App {
    constructor(){
        this.repositories = [];
        this.form_elem = document.getElementById('repo-form');
        this.input_elem = document.querySelector('input[name=repository]');
        this.list_elem = document.getElementById('repo-list');

        //Registra os eventos
        this.registerHandlers();       
    }

    registerHandlers(){
        this.form_elem.onsubmit = event => this.add_repository(event);
    }

    set_loading(loading = true){
        if(loading === true){
            let load_elem = document.createElement('span');
            load_elem.appendChild(document.createTextNode('Carregando'));
            load_elem.setAttribute('id', 'loading');
            this.form_elem.appendChild(load_elem);
        }
        else{
            document.getElementById('loading').remove();
        }
    }

    async add_repository(event){
        event.preventDefault();
        
        const repo_input = this.input_elem.value;

        if (repo_input.length === 0){
            return;
        }

        this.set_loading();

        try{
            const response = await api.get(`/repos/${repo_input}`);
            //desestruturação
            const { name, description, html_url, owner:{ avatar_url } } =  response.data;

            console.log(response);

            //object short syntax
            this.repositories.push({
                name, 
                description,
                avatar_url,
                html_url, 
            });

            this.input_elem.value = '';
            this.render();
        } catch (err){
            alert('O repositório não existe.');
        }

        this.set_loading(false);
    }

    render(){
        this.list_elem.innerHTML = '';

        this.repositories.forEach(repo => {
            let img_elem = document.createElement('img');
            img_elem.setAttribute('src', repo.avatar_url);

            let title_elem = document.createElement('strong');
            title_elem.appendChild(document.createTextNode(repo.name));

            let description_elem = document.createElement('p');
            description_elem.appendChild(document.createTextNode(repo.description));

            let link_el = document.createElement('a');
            link_el.setAttribute('target', 'blank');
            link_el.setAttribute('href', repo.html_url);
            link_el.appendChild(document.createTextNode('Acessar'));

            let list_item_elem = document.createElement('li');
            list_item_elem.appendChild(img_elem);
            list_item_elem.appendChild(title_elem);
            list_item_elem.appendChild(description_elem);
            list_item_elem.appendChild(link_el);

            this.list_elem.appendChild(list_item_elem);
        });
    }
}

new App();
