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
  // <div className='container'>
    <header className="header">
      <Link className='' to='/'>
        <Logo className='' />
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

      <div className="heading"> 
        <h1 className="heading-text">Clothes Store</h1>
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
              Gift Ideas
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
              About Us
            </Link>
          </li>
          <li className="second-nav-item">
            <Link className="second-nav-link">
              Our Team
            </Link>
          </li>
          <li className="second-nav-item">
            <Link className="second-nav-link">
              News
            </Link>
          </li>
        </div>
      </nav>

    </header>
  // </div>
);


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);