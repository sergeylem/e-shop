import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => (
  <div className='container'>
    <header className="header">
      <Link className='logo' to='/'>
        <Logo className='logo-img' />
      </Link>

      <nav className="first-nav">
        <div className="first-nav-list">
          <Link className='first-nav-link' to='/shop'>
            Shop
          </Link>
          <Link className="first-nav-link" to='/shop'>
            Contact Us
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

      <div class="heading">
        <h1 class="heading-text">Clothes Store</h1>
      </div>

      <nav className="second-nav">
        <ul className="second-nav-list">
          <li className="second-nav-item">
            <a href="#" className="second-nav-link">
              Shop
            </a>
          </li>
          <li className="second-nav-item dropdown-li">
            <a href="#" className="second-nav-link">
              Gift Ideas
            </a>
            <ul className="dropdown">
              <li className="dropdown-item">
                <a href="#" className="dropdown-link">
                  Under $25
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#" className="dropdown-link">
                  $25 - $50
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#" className="dropdown-link">
                  Above $50
                </a>
              </li>
            </ul>
          </li>
          <li className="second-nav-item">
            <a href="#" className="second-nav-link">
              About Us
            </a>
          </li>
          <li className="second-nav-item">
            <a href="#" className="second-nav-link">
              Our Team
            </a>
          </li>
          <li className="second-nav-item">
            <a href="#" className="second-nav-link">
              News
            </a>
          </li>
        </ul>
      </nav>

    </header>
  </div>
);


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);