import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import LazyLoad from 'react-lazyload';
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import { getBaseUrl, generateMediaUrl } from 'Helpers';

import MediaInfo from './MediaInfo';
import MediaName from './MediaName';
import ResumeModal from './ResumeModal';

import {
  CardPoster,
  CardWrap,
  CardPopup,
  PosterWrap,
  PopupLink,
  PopupIcon,
} from './Styles';

class MediaCard extends Component {
  state = {
    url: '',
    modalOpen: false,
  }

  componentDidMount() {
    const {
      type,
      uuid,
    } = this.props;

    this.setState({
      url: generateMediaUrl(type, uuid),
    });
  }

  toggleModal = (modalOpen) => {
    this.setState({
      modalOpen: !modalOpen,
    });
  }

  cardClick = (e, url, history, showPlayStatus) => {
    const {
      playState,
      playMedia,
      internalCard,
      hover,
    } = this.props;

    if (!hover) return false;

    if (showPlayStatus) {
      if ((e.target.tagName === 'DIV' || e.target.tagName === 'H3') && !internalCard) {
        history.push(url);
      }

      if (playState.playtime > 0 && !playState.finished) {
        this.toggleModal();
      } else if (internalCard) {
        playMedia();
      } else {
        history.push({
          pathname: url,
          state: { autoplay: true },
        });
      }
    } else {
      history.push(url);
    }

    return false;
  }

  render() {
    const {
      wide,
      showText,
      history,
      name,
      posterPath,
      stillPath,
      type,
      files,
      hover,
      playState,
      playMedia,
    } = this.props;
    const { url, modalOpen } = this.state;

    const showPlayStatus = (type === 'Movie' || type === 'Episode');
    const bgImage = (posterPath || stillPath
      ? `${getBaseUrl()}/m/images/tmdb/w342/${(posterPath || stillPath)}`
      : '/images/placeholder.png'
    );

    return (
      <Fragment>
        <CardWrap onClick={e => (this.cardClick(e, url, history, showPlayStatus))}>
          <PosterWrap>
            <LazyLoad height={(type === 'Episode' ? 125 : 230)} debounce={100} overflow resize>
              <CardPoster hover={hover} wide={wide} bgimg={bgImage}>
                <MediaInfo
                  {...this.props}
                  length={files[0].totalDuration}
                  showPlayStatus={showPlayStatus}
                />
              </CardPoster>
            </LazyLoad>
            {hover
              && (
                <CardPopup>
                  <PopupLink>
                    <PopupIcon icon={(showPlayStatus ? faPlay : faSearch)} />
                  </PopupLink>
                </CardPopup>
              )
            }
          </PosterWrap>
          {showText
            && <MediaName name={name} {...this.props} />
          }
        </CardWrap>

        <ResumeModal
          url={url}
          history={history}
          contentLabel="Resume Media"
          isOpen={modalOpen}
          onClose={() => (this.toggleModal(modalOpen))}
          playMedia={playMedia}
          playState={playState}
        />
      </Fragment>
    );
  }
}

const requiredPropsCheck = (props, componentName) => {
  const { posterPath, stillPath } = props;
  if (!posterPath && !stillPath) {
    return new Error(`One of 'posterPath' or 'stillPath' is required by '${componentName}' component.`);
  }

  return null;
};

MediaCard.propTypes = {
  name: PropTypes.string.isRequired,
  airDate: PropTypes.string,
  posterPath: requiredPropsCheck,
  stillPath: requiredPropsCheck,
  type: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.shape({
    totalDuration: PropTypes.number,
  })),
  history: ReactRouterPropTypes.history.isRequired,
  hover: PropTypes.bool,
  wide: PropTypes.bool,
  showText: PropTypes.bool,
};

MediaCard.defaultProps = {
  airDate: null,
  hover: true,
  posterPath: null,
  stillPath: null,
  wide: false,
  showText: false,
  files: [
    {
      totalDuration: 0,
    },
  ],
};

export default withRouter(MediaCard);
