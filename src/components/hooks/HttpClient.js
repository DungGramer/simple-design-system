/**
 *
 * @example
 * Generator
 * let httpClient = new HttpClient('https://jsonplaceholder.typicode.com');
 * let httpClient = HttpClient.create('https://jsonplaceholder.typicode.com');
 *
 * httpClient.get('/posts/1').then(data => console.log(data));
 * let data = await httpClient.get('/posts/1');
 */

class HttpClient {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
    this.headers = headers || {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    this.xhr = new XMLHttpRequest();
  }

  static create(baseUrl, headers) {
    return new HttpClient(baseUrl, headers);
  }

  getXhr() {
    return this.xhr;
  }

  _fetcher(endpoint, options) {
    return new Promise((resolve, reject) => {
      this.xhr.open(options.method, `${this.baseUrl}${endpoint}`, true);

      for (const header in this.headers) {
        this.xhr.setRequestHeader(header, this.headers[header]);
      }

      for (const header in options.headers) {
        this.xhr.setRequestHeader(header, options.headers[header]);
      }

      this.xhr.onload = () => {
        if (this.xhr.status >= 200 && this.xhr.status < 300) {
          resolve(JSON.parse(this.xhr.response));
        } else {
          reject(this.xhr.statusText);
        }
      };

      this.xhr.onerror = () => {
        reject(this.xhr.statusText);
      };

      this.xhr.send(options.body);
    });
  }

  onUploadProgress() {
    this.xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(`${Math.round(percentComplete, 2)}% uploaded`);
      }
    };
  }

  onDownloadProgress() {
    this.xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(`${Math.round(percentComplete, 2)}% downloaded`);
      }
    };
  }

  get(endpoint, options) {
    return this._fetcher(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  post(endpoint, body, options) {
    return this._fetcher(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  put(endpoint, body, options) {
    return this._fetcher(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  delete(endpoint, options) {
    return this._fetcher(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }

  patch(endpoint, body, options) {
    return this._fetcher(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }
}

// let httpClient = HttpClient.create('https://jsonplaceholder.typicode.com');

// POST and using onDownloadProgress and onUploadProgress
// httpClient.xhr.upload.onprogress = (event) => {
//   if (event.lengthComputable) {
//     const percentComplete = (event.loaded / event.total) * 100;
//     console.log(`${Math.round(percentComplete, 2)}% uploaded`);
//   }
// };
// let result = httpClient.post('/posts', {
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// });

export default HttpClient;
