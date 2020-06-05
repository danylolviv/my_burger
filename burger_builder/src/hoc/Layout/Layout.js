import React, {Component} from 'react';
import Auxillary from '../Auxillary/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDraweToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
       });
    }

    render () {
        return (
            <Auxillary>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDraweToggleHandler} />
                    <SideDrawer 
                        isAuth={this.props.isAuthenticated}
                        open={this.state.showSideDrawer} 
                        closed={this.sideDrawerClosedHandler} />
                    <div> SideDrawer, Backdrop</div>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
            </Auxillary>
        );
    };
} 

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);