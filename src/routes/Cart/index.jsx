import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Cart extends Component {


  removeProduct(product) {

    const { updateCart } = this.props;
    let { items } = this.props;
    const { id } = product;


    items = items.filter(function(item) {
      return item.id !== id
    });

    updateCart(items);
    return;
  }

  /**
   * Render product
   * @param {*} item 
   */
  renderProductItem(item) {
    const { product, id, qty } = item;
    const { image, name } = product;
    return (
      <TableRow key={id}>
        <TableCell>
          <img src={image} alt={name} className="image" loading="lazy" />
        </TableCell>
        <TableCell>
          {name}
        </TableCell>
        <TableCell>
          {qty}
        </TableCell>
        <TableCell>
          <IconButton  onClick={() => this.removeProduct(item)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
        </TableCell>
      </TableRow>

    )
  };

  render() {
    const { items } = this.props;

    if (!items.length) {
      return (
        <div>
          <h1>Cart</h1>
          <p>No Items</p>
        </div>
      )
    }
    return (
      <div>
        <h1>Cart</h1>
        <Paper>
          <Table aria-label="Cart">
            <TableHead>
              <TableRow>
                <TableCell>image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => this.renderProductItem(item))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (items) => dispatch({ type: 'UPDATE_CART', items })
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);