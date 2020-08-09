import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.Products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href="#">
                                    <img src={product.image}></img>
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                            </div>
                        </li>
                    )


                    )}
                </ul>
            </div>
        )
    }
}
