import { connect } from 'react-redux';
import React from 'react';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
import styles from './App.scss';
import RedditSection from '../../components/RedditSection/RedditSection';
import ProductHuntSection from '../../components/ProductHuntSection/ProductHuntSection';
import HomePage from '../../components/HomePage/HomePage';
// import * as articlesSelectors from '../../store/topics/reducer';
// import { fetchPopularReddit } from '../../store/topics/actions';

class App extends React.Component {

  renderSwitch = (props) => {
    switch(props.currentPage) {
      case 'reddit':
        return <RedditSection />
      case 'product hunt':
        return <ProductHuntSection />
      default:
        return <HomePage />
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <SideBarSection />
        {this.renderSwitch(this.props)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentPage : state.websites.currentPage
  };
}

export default connect(mapStateToProps)(App);
