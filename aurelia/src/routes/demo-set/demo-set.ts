import { GitHubFileLoader } from './../../services/github-file-loader';
import {autoinject} from 'aurelia-framework';

@autoinject
export class DemoSet {

  logs: string[] = [];
  example: string = '';

  constructor(private githubLoader: GitHubFileLoader) {}

  async activate(){
    this.example = await this.githubLoader.getFileContents('/aurelia/src/routes/demo-set/demo-set-code/demo-set-code.ts');
  }
}
