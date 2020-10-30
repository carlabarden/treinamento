import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Main extends Component{
    //estado é sempre um objeto
    state = {
        products: [],
        product_info: {},
        page: 1,
    }
    
    //logo que o componente for mostrado em tela
    componentDidMount(){
        this.load_products();
    }

    //arrow function não sobrescreve valor do this
    load_products = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        //rest operator
        const { docs, ...product_info} =  response.data;

        this.setState({ products: response.data.docs, product_info, page });
    }

    prevPage = () => {
        const { page, product_info } = this.state;

        if (page === 1) return;

        const page_number = page - 1;
        this.load_products(page_number);
    }
    
    nextPage = () => {
        const { page, product_info } = this.state;

        if (page === product_info.pages) return;

        const page_number = page + 1;
        this.load_products(page_number);
    }

    render(){
        //desestruturação
        const { products, page, product_info } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === product_info.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        ); 
    }
}