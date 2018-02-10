import { autoinject } from 'aurelia-framework';
import { bindable } from 'aurelia-templating';
import { GitHubFileLoader } from './../../../services/github-file-loader';

@autoinject
export class CodeFileHost {

  @bindable
  filePaths: string[] = [];

  tabs: any[] = [];

  constructor(private githubFileLoader: GitHubFileLoader) { }

  async bind() {
    this.filePaths.forEach(async (filePath: string, index: number) => {
      var filename = filePath.split('\\').pop().split('/').pop();
      var example = await this.githubFileLoader.getFileContents(filePath);

      this.tabs.push(
        {
          id: `tab${index}`, 
          label: filename,
          content: example
        }
      );
    });
  }
}
