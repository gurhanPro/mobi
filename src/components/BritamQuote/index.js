import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import './quote.css'
import { getGroupPremiumEstimate } from '../../lib/utils.es6';

export default class BritamQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benefit: '',
      groupSize: '',
      groupSizeError: false,
      groupSizeMinimumError: false,
      selectedProductError: false,
      selectedProduct: null

    }
  }

  handleSelectBenefit(product) {
    this.setState({ selectedProduct: product, selectedProductError: false })
  }

  letsGoWithQuote() {
    let { groupSize, selectedProduct } = this.state;
    if(!groupSize){
      this.setState({ groupSizeError: true})
      return
    }

    if(groupSize < 10){
      this.setState({ groupSizeMinimumError: true})
      return
    }

    if(!selectedProduct){
      this.setState({ selectedProductError: true})
      return
    }

    let quote = {
      groupSize,
      product: selectedProduct
    }

    this.props.letsGoWithQuote(quote)
  }

  getQuote() {
    let { selectedProduct, groupSize } = this.state
    return getGroupPremiumEstimate(groupSize, selectedProduct)
  }

  handleGroupSizeChange(e) {
    const groupSize = e.target.value
    if(groupSize < 100){
    this.setState({ [e.target.name]: groupSize, selectedProduct: null, groupSizeError: false })
    }

    if(groupSize >= 10){
      this.setState({groupSizeMinimumError: false})
    }
    this.setState({ [e.target.name]: e.target.value })
  }

  getFirstTwoProds(products){
    let arr= []
    if(products[0] && products[1]){
      arr.push(products[0])
      arr.push(products[1])
    }
    return arr
  }
  render() {
    let products = this.props.products || []
    
    return (
      <Grid style={{ width: "90%", margin: "auto", backgroundColor: "white" }} >
        <div style={{ fontSize: "25px", textAlign: "center", marginBottom: '3%' }}>
          <h1 style={{ fontSize: "40px", textDecoration: "underline", color: "#06c", margin: "20px" }}>INSTANT QUOTE</h1>
          <br />
          <div>
            <p > I want to cover
             <input
                autofocus={true}
                onChange={this.handleGroupSizeChange.bind(this)}
                value={this.state.groupSize}
                name="groupSize"
                type="text" class="number" style={{ border: "none", bottomBorder: "2px solid red" }}
              />
              families in our group</p>
              <p style={{color: 'red', fontSize:"50%", margin: "0px", padding: "0px", display: this.state.groupSizeError ? "block" : "none"}}>Please input group size</p>
              <p style={{color: 'red', fontSize:"50%", margin: "0px", padding: "0px", display: this.state.groupSizeMinimumError ? "block" : "none"}}>Allowed minimum group size is 10</p>
          </div>
          <br />
          <p>My preferred benefit is</p>

          <div>
            {
              ((this.state.groupSize > 99 || this.state.groupSize === '') && products.length > 0)?
                <div>
                  {
                    products.map((product) => {
                      return <Button
                        color="primary"
                        variant={this.state.selectedProduct === product ? "contained" : "outlined"}
                        value={this.state.selectedProduct}
                        onClick={this.handleSelectBenefit.bind(this, product)}
                        style={{ margin: "5px", textDecoration: 'lowerCase' }}
                        >{'Ksh ' + product.fixed_indemnity_amount_benefit}</Button>
                      })
                  }
                </div> :
                <div>
                  {
                    this.getFirstTwoProds(products).map((product) => {
                      return <Button
                        color="primary"
                        variant={this.state.selectedProduct === product ? "contained" : "outlined"}
                        value={this.state.selectedProduct}
                        onClick={this.handleSelectBenefit.bind(this, product)}
                        style={{ margin: "5px", textDecoration: 'lowerCase' }}
                        >{'Ksh ' + product.fixed_indemnity_amount_benefit}</Button>
                    })
                  }
                </div>
            }
              <p style={{color: 'red', fontSize:"50%", margin: "0px", padding: "0px", display: this.state.selectedProductError ? "block" : "none"}}>Please select a benefit</p>

          </div>
          <p style={{ fontSize: "50%", color: '#06c' }}>Click on your preferred benefit</p>

          <br />
          <h2 style={{ color: "green", fontSize: "80%" }}> Your total group premium estimate:  Ksh <span style={{ textDecoration: "underline", color: "#06c" }}>{this.getQuote()}</span></h2>
          <br />
          <Button
            color="primary"
            variant={'contained'}
            value={this.state.benefit}
            onClick={this.letsGoWithQuote.bind(this)}
            style={{ margin: "5px", padding: '2% 8%', backgroundColor: "#06c", fontSize: "70%" }}
          >Next - Create Group</Button>
        </div>

      </Grid>
    )
  }
}
