import { Component } from "react";
import { Card , CardBody, CardText, CardTitle, CardSubtitle, Button, Alert, Container} from "reactstrap";
import PropTypes from "prop-types";
import { Connect } from "react-redux";
import { getItems } from '../actions/itemActions';
import { addToCart } from '../actions/cartActions';
import AppNavbar from './AppNavbar';

class Home extends Component { 
    
    componentDidMount(){
        this.props.getItems();
    }

    static propTypes = {
        getItems : PropTypes.func.isRequired,
        item : PropTypes.func.isRequired,
        addToCart : PropTypes.func.isRequired,
        user : PropTypes.func.isRequired,
        isAuthenticated : PropTypes.bool
    }

    onAddToCart = async(id, productId) => {
      await this.props.addToCart(id,productId,1);
      alert('Item added to Cart');
    }

    render(){
    const {items} = this.props.items;
    const user = this.props.user;

    return (
      <div>
        <AppNavbar/>
        <Container>
            <div className="row">
                {items.length ? items.map((item)=> (
                   <div className="col-md-4">
                     <Card className="mb-4">
                        <CardBody>
                            <CardTitle tag="h5">{item.title}</CardTitle>
                            <CardSubtitle tag="h6">Rs. {item.price}</CardSubtitle>
                            <CardText>{item.category}</CardText>
                            {this.props.isAuthenticated ? 
                            <Button
                            color="success"
                            size="sm"
                            onClick={this.onAddToCart.bind(this, user._id, item._id)}
                            >Add Cart Item</Button>: null }
                        </CardBody>
                     </Card>
                 </div>
                )): <div style={{width:"100%"}}><Alert className="text-center">No products found. </Alert></div>}
            </div>
        </Container>
      </div>
    )
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {getItems, addToCart})(Home);