import { Component } from 'react';
import Notiflix from 'notiflix';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import axios from 'axios';

import Section from './Section/Section';
import Notification from './Notification/Notification';

import { Container } from './Container/Container.styled';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export default class App extends Component {
  #URL = 'https://pixabay.com/api/';
  #API_KEY = '31539344-c129af0d709d10cb9757ecef9';

  state = {
    query: '',
    data: [],
    page: 1,
    totalHits: 0,
    largeImageURL: '',
    alt: '',
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      // this.setState({ status: Status.PENDING, error: '' });
      this.axiosSearchImages(nextQuery, nextPage)
        .then(response => {
          const imgData = response.data.hits.map(
            ({ id, largeImageURL, tags, webformatURL }) => ({
              id,
              largeImageURL,
              tags,
              webformatURL,
            })
          );
          return {
            data: imgData,
            totalHits: response.data.totalHits,
          };
        })
        .then(({ data, totalHits }) => {
          if (!data.length) {
            this.setState({
              error:
                'Sorry, there are no images matching your search query.Please try again.',
              // status: Status.RESOLVED,
            });
            return;
          }
          this.setState(prevState => ({
            data: [...prevState.data, ...data],
            totalHits: totalHits,
            // status: Status.RESOLVED,
          }));
        })
        .catch(() =>
          this.setState({
            error: 'Something went wrong...',
            // status: Status.REJECTED,
          })
        );
    }
  }

  formSubmitHandler = searchQuery => {
    this.setState({
      query: searchQuery,
      page: 1,
      data: [],
    });
  };

  axiosSearchImages(query, page) {
    return axios.get(
      `${this.#URL}?key=${
        this.#API_KEY
      }&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`
    );
  }

  onImageClick = (largeImageURL, alt) => {
    this.setState({ largeImageURL, alt });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const {
      searchName,
      data,
      error,
      status,
      page,
      largeImageURL,
      alt,
      totalHits,
    } = this.state;

    const isBtnShown = totalHits !== 0 && totalHits > data.length;

    return (
      <>
        <SearchBar onSubmit={this.formSubmitHandler} />
        <ImageGallery data={data} onImageClick={this.onImageClick} />
        {isBtnShown && <Button loadMore={this.loadMore} />}
        <Container></Container>
        <GlobalStyleComponent />
      </>
    );
  }
}
