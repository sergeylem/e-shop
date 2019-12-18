import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo2.svg';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => (
    <header className="header">
      <Link className='container' to='/'>
        <Logo className='container-logo' />
      </Link>

      <nav className="first-nav">
        <div className="first-nav-list">
          <Link className="first-nav-link" to='/signup'>
            Sign Up
          </Link>
          {currentUser ? (
            <div className='first-nav-link' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
              <Link className='first-nav-link' to='/signin'>
                Sign In
            </Link>
            )}
          <CartIcon />
        </div>
        {
          hidden ? null : <CartDropdown />
        }
      </nav>

      <div className="heading"> 
        <div className="heading-text">Eliza's Fashion Boutique</div>
      </div>

      <nav className="second-nav">
        <div className="second-nav-list">
          <li className="second-nav-item">
            <Link className="second-nav-link" to='/shop'>
              Shop
            </Link>
          </li>
          <li className="second-nav-item dropdown-li">
            <Link className="second-nav-link">
              Gifts
            </Link>
            <ul className="dropdown">
              <li className="dropdown-item">
                <Link className="dropdown-link">
                  Under $25
                </Link>
              </li>
              <li className="dropdown-item">
                <Link className="dropdown-link">
                  $25 - $50
                </Link>
              </li>
              <li className="dropdown-item">
                <Link className="dropdown-link">
                  Above $50
                </Link>
              </li>
            </ul>
          </li>
          <li className="second-nav-item">
            <Link className="second-nav-link">
              Mens
            </Link>
          </li>
          <li className="second-nav-item">
            <Link className="second-nav-link">
              Womens
            </Link>
          </li>
          <li className="second-nav-item">
            <Link className="second-nav-link">
              Children
            </Link>
          </li>
        </div>
      </nav>

    </header>
);


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);