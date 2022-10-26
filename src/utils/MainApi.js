class MainApi {
  constructor(url) {
    this._url = url;
    this._headers = {
      'Content-type': 'application/JSON',
    };
  }
  _confirmStatusOk(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._confirmStatusOk);
  }

  likedAndSavedMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
      }),
    }).then(this._confirmStatusOk);
  }

  deleteSavedMovie(data) {
    return fetch(`${this._url}/movies/${data._id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then(this._confirmStatusOk);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._confirmStatusOk);
  }
}

const mainApi = new MainApi('http://localhost:3001');

export default mainApi;
