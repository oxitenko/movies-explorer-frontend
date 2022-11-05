class MoviesApi {
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

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._confirmStatusOk);
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co');

export default moviesApi;
