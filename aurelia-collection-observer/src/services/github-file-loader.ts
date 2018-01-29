import { autoinject } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
export class GitHubFileLoader {
  public httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://api.github.com/repos/jonathaneckman/demos/contents')
                .withDefaults({
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });
        });
    }

    getFileContents(filepath: string): Promise<string>{
      return this.httpClient.fetch(filepath).then((results) => {
        return results.json().then((payload) => {
          return window.atob(payload.content);
        });
      });
    }
}
