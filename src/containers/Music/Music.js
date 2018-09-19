import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import cs from 'classnames';
import Carousel from 'nuka-carousel';
import styles from './music.module.css';
import { GET } from '../../https/axios';
import { aliOSS, checkWebp, webp } from '../../utils/tools';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      recordData: [],
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.getData();
    this.getRecordData();
  }

  componentWillUnmount() {
  }

  getData = () => {
    GET('/liveTours', {})
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  getRecordData = () => {
    GET('/latestFourFeaturedRecords', {})
      .then((res) => {
        this.setState({
          recordData: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleLoadImage = () => {
    this.carousel.setDimensions();
  };

  render() {
    const { data, recordData } = this.state;
    const bgUrl = `${aliOSS}/static/music_page_header.jpg`;
    return (
      <main className={cs(styles.music_wrapper, 'no-user-select')}>
        <Helmet>
          <title>
            ミュージック | Yancey Inc.
          </title>
        </Helmet>
        <figure
          className={styles.bg_cover}
          style={{ backgroundImage: `url(${checkWebp() ? `${bgUrl}${webp}` : bgUrl})` }}
        >
          <h1>
            ミュージック
          </h1>
          <p>
            夢を歌おう~
          </p>
        </figure>
        <div className={styles.live_tours_artists_wrapper}>
          <section>
            <h1 className={styles.column_title}>
              LIVE TOURS
            </h1>
            <Carousel
              ref={c => this.carousel = c} /* eslint-disable-line */
              autoplay
              autoplayInterval={2000}
              transitionMode="fade"
              wrapAround
            >
              {
                Object.keys(data)
                  .map(key => (
                    <div className={cs(styles.post_container, styles.live_tours_container)} key={key}>
                      <img
                        key={key}
                        src={checkWebp() ? `${data[key].poster}?x-oss-process=image/format,webp` : data[key].poster}
                        onLoad={this.handleLoadImage}
                        alt={data[key].title}
                      />
                      <div className={styles.meta_intro}>
                        <time className={styles.meta_date}>
                          {data[key].upload_date}
                        </time>
                        <p className={cs(styles.meta_title, styles.live_tour_title)}>
                          {data[key].title}
                        </p>
                      </div>
                    </div>
                  ))
              }
            </Carousel>
          </section>
          <section>
            <h1 className={styles.column_title}>
              MUSIC NOTES
            </h1>
            <ul className={cs(styles.artists_list)}>
              <li className={cs(styles.post_container, styles.artist_item)}>
                <img
                  src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/illust_66799182_20180128_182352-1024x614.png"
                  alt="yancey"
                />
                <div className={cs(styles.meta_intro, styles.artist_intro)}>
                  <time className={styles.meta_date}>
                    2018-10-11
                  </time>
                  <p className={cs(styles.meta_title, styles.artist_title)}>
                    How to Prepare for a Recording Studio Session
                  </p>
                  <hr className={styles.music_split} />
                  <a
                    href="https://www.yanceyleo.com"
                    className={styles.music_btn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    READ MORE
                  </a>
                </div>
              </li>
              <li className={cs(styles.post_container, styles.artist_item)}>
                <img
                  src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/illust_66799182_20180128_182352-1024x614.png"
                  alt="yancey"
                />
                <div className={cs(styles.meta_intro, styles.artist_intro)}>
                  <time className={styles.meta_date}>
                    2018-10-11
                  </time>
                  <p className={cs(styles.meta_title, styles.artist_title)}>
                    How to Prepare for a Recording Studio Session
                  </p>
                  <hr className={styles.music_split} />
                  <a
                    href="https://www.yanceyleo.com"
                    className={styles.music_btn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    READ MORE
                  </a>
                </div>
              </li>
              <li className={cs(styles.post_container, styles.artist_item)}>
                <img
                  src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/illust_66799182_20180128_182352-1024x614.png"
                  alt="yancey"
                />
                <div className={cs(styles.meta_intro, styles.artist_intro)}>
                  <time className={styles.meta_date}>
                    2018-10-11
                  </time>
                  <p className={cs(styles.meta_title, styles.artist_title)}>
                    How to Prepare for a Recording Studio Session
                  </p>
                  <hr className={styles.music_split} />
                  <a
                    href="https://www.yanceyleo.com"
                    className={styles.music_btn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    READ MORE
                  </a>
                </div>
              </li>
              <li className={cs(styles.post_container, styles.artist_item)}>
                <img
                  src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/illust_66799182_20180128_182352-1024x614.png"
                  alt="yancey"
                />
                <div className={cs(styles.meta_intro, styles.artist_intro)}>
                  <time className={styles.meta_date}>
                    2018-10-11
                  </time>
                  <p className={cs(styles.meta_title, styles.artist_title)}>
                    How to Prepare for a Recording Studio Session
                  </p>
                  <hr className={styles.music_split} />
                  <a
                    href="https://www.yanceyleo.com"
                    className={styles.music_btn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    READ MORE
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div className={styles.featured_records_wrapper}>
          <section className={styles.featured_records_container}>
            <h1 className={styles.column_title}>
              FEATURED RECORDS
            </h1>
            <ul className={styles.featured_records_list}>
              {
                Object.keys(recordData).map(key => (
                  <li className={styles.featured_record_item} key={key}>
                    <figure
                      className={styles.record_cover}
                      style={{ backgroundImage: `url(${recordData[key].poster})` }}
                    />
                    <div className={styles.record_intro}>
                      <time className={styles.meta_date}>
                        {recordData[key].upload_date}
                      </time>
                      <p className={cs(styles.record_title, styles.meta_title)}>
                        {recordData[key].title}
                      </p>
                      <hr className={styles.music_split} />
                      <a
                        href={recordData[key].url}
                        className={styles.music_btn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BUY NOW
                      </a>
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
        <section className={styles.yancey_music_container}>
          <h1 className={styles.column_title}>
            MY WORKS
          </h1>
          <ul className={cs(styles.artists_list, styles.yancey_music_list)}>
            <li className={cs(styles.post_container, styles.artist_item)}>
              <img
                src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/illust_66799182_20180128_182352-1024x614.png"
                alt="yancey"
              />
              <div className={cs(styles.meta_intro, styles.artist_intro)}>
                <time className={styles.meta_date}>
                  2018-10-11
                </time>
                <p className={cs(styles.meta_title, styles.artist_title)}>
                  How to Prepare for a Recording Studio Session
                </p>
                <hr className={styles.music_split} />
                <a
                  href="https://www.yanceyleo.com"
                  className={styles.music_btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LISTEN
                </a>
              </div>
            </li>
            <li className={cs(styles.post_container, styles.artist_item)}>
              <img
                src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/illust_66799182_20180128_182352-1024x614.png"
                alt="yancey"
              />
              <div className={cs(styles.meta_intro, styles.artist_intro)}>
                <time className={styles.meta_date}>
                  2018-10-11
                </time>
                <p className={cs(styles.meta_title, styles.artist_title)}>
                  How to Prepare for a Recording Studio Session
                </p>
                <hr className={styles.music_split} />
                <a
                  href="https://www.yanceyleo.com"
                  className={styles.music_btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LISTEN
                </a>
              </div>
            </li>
            <li className={cs(styles.post_container, styles.artist_item)}>
              <img
                src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/illust_66799182_20180128_182352-1024x614.png"
                alt="yancey"
              />
              <div className={cs(styles.meta_intro, styles.artist_intro)}>
                <time className={styles.meta_date}>
                  2018-10-11
                </time>
                <p className={cs(styles.meta_title, styles.artist_title)}>
                  How to Prepare for a Recording Studio Session
                </p>
                <hr className={styles.music_split} />
                <a
                  href="https://www.yanceyleo.com"
                  className={styles.music_btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LISTEN
                </a>
              </div>
            </li>
            <li className={cs(styles.post_container, styles.artist_item)}>
              <img
                src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/illust_66799182_20180128_182352-1024x614.png"
                alt="yancey"
              />
              <div className={cs(styles.meta_intro, styles.artist_intro)}>
                <time className={styles.meta_date}>
                  2018-10-11
                </time>
                <p className={cs(styles.meta_title, styles.artist_title)}>
                  How to Prepare for a Recording Studio Session
                </p>
                <hr className={styles.music_split} />
                <a
                  href="https://www.yanceyleo.com"
                  className={styles.music_btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LISTEN
                </a>
              </div>
            </li>
            <li className={cs(styles.post_container, styles.artist_item)}>
              <img
                src="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/illust_66799182_20180128_182352-1024x614.png"
                alt="yancey"
              />
              <div className={cs(styles.meta_intro, styles.artist_intro)}>
                <time className={styles.meta_date}>
                  2018-10-11
                </time>
                <p className={cs(styles.meta_title, styles.artist_title)}>
                  How to Prepare for a Recording Studio Session
                </p>
                <hr className={styles.music_split} />
                <a
                  href="https://www.yanceyleo.com"
                  className={styles.music_btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LISTEN
                </a>
              </div>
            </li>
          </ul>
        </section>
      </main>
    );
  }
}

export default Music;