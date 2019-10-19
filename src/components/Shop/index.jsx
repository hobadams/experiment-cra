import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

import Button from '@material-ui/core/Button';

/**
 * Images
 */
import broccoliImage from './images/broccoli.jpg'
import potatoImage from './images/potato.jpg'
import tomatoImage from './images/tomato.jpg'
import avacadoImage from './images/avacado.jpg'

class Shop extends Component {

    /**
     * Get List of products
     * Hardcoded for this example :-)
     */
    getProducts() {
        return [
            {
                name: 'Broccoli',
                image: broccoliImage,
                id: 1
            },

            {
                name: 'Potato',
                image: potatoImage,
                id: 2
            },

            {
                name: 'Tomato',
                image: tomatoImage,
                id: 3
            },

            {
                name: 'Avacado',
                image: avacadoImage,
                id: 4
            }
        ]
    };

    addItem(product) {
        const { items, updateCart } = this.props;
        const { id } = product;

        const exists = items.some(el => el.id === id);

        /**
         * Add a new product to the cart
         */
        if (!items.length || !exists) {

            const cartItem = {
                id,
                qty: 1,
                product
            }
            items.push(cartItem);

            updateCart(items);

            return;
        }

        /**
         * Add an existing item
         */
        items.map(item => {
            if (item.id === product.id) {
                item.qty++;
            }
            return item;
        });

        updateCart(items);
        return;
    };

    /**
     * Render product
     * @param {*} item 
     */
    renderProductItem(item) {
        const { image, name, id } = item;
        return (
            <div key={id} className="product">
                <img src={image} alt={name} loading="lazy" />
                <h3>{name}</h3>
                <Button variant="contained" color="primary" onClick={() => this.addItem(item)}>
                    Add to cart
                </Button>
            </div>
        )
    };

    render() {
        const items = this.getProducts();
        return (
            <div className="centered">
                <h1>Shop</h1>
               
                <div className="products">
                    {items.map((item) => this.renderProductItem(item))}
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (items) => dispatch({ type: 'UPDATE_CART', items })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);