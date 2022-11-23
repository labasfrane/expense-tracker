class HttpClient {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  url(url) {
    return `${this._baseUrl}${url}`;
  }
}

export default HttpClient;
