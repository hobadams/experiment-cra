import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import './styles.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

class Navigation extends Component {

    componentDidUpdate(prevProps) {
        console.log(prevProps);
        console.log(this.props);
        if (this.props.items !== prevProps.items) {
            this.getItemsCount();
        }
    }

    getItemsCount() {
        const { items } = this.props;
        console.log(items);
        let total = 0;

        if (items.length) {
            items.map(item => {
                total = total + item.qty
                return item;
            });
        }

        return total;
    }

    render() {
        const total = this.getItemsCount();
        return (
            <AppBar position="static" align="center">
                <Toolbar>
                    <Container maxWidth="lg">
                        <h2 className="title">Eat your greens</h2>
                        <ul className="navigation">
                            <li className="navigation__item">
                                <NavLink to="/" className="navigation__link">Shop</NavLink>
                            </li>
                            <li className="navigation__item">
                                <NavLink to="/cart" className="navigation__link">Cart {total ? `(${total})` : ''}</NavLink>
                            </li>
                        </ul>
                    </Container>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, null, null, { pure: false })(Navigation);