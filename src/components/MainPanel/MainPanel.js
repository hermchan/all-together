
import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPanel.scss';

const MainPanel = (props) => {
  console.log(props);
    return (
    <div className={styles.mainPanel}>
      <div className={styles.itemList}>
        <ul>
          {props.subreddit.map((post) =>
            <li className={styles.items} key={post.id}>
              <img className={styles.image} src={ `${post.thumbnail}` } height="70" width="70" />
                <div className={styles.content}>
                  <span className={styles.title}>
                    <a href={ `${post.url}` }>{post.title}</a>
                  </span>
                  <div className={styles.info}>
                    <span>
                      <a href={ `${post.url}` }>{post.score} points by {post.author} </a>
                    </span>
                    <span className={styles.comment}>
                      <a href={'https://www.reddit.com' + `${post.permalink}`}>{post.num_comments} comments</a>
                    </span>
                  </div>
                </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
};

MainPanel.propTypes = {
  subreddit: PropTypes.array.isRequired,
};

export default MainPanel;
