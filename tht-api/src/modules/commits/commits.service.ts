import * as moment from 'moment';

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';

interface Commit {
  message: string;
  committer: {
    date: string;
  };
}

interface Committer {
  login: string;
  avatar_url: string;
}

@Injectable()
export class CommitsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async findAll() {
    const repo = this.configService.get('gh.repo_name');
    const username = this.configService.get('gh.username');

    try {
      const response = await firstValueFrom(
        this.httpService.get(
          `https://api.github.com/repos/${username}/${repo}/commits`,
        ),
      );

      return extractRelevantData(response);
    } catch (err) {
      return err.response.data;
    }
  }
}

function extractRelevantData(response: AxiosResponse<any, any>) {
  return response.data.map(
    (data: {
      sha: string;
      commit: Commit;
      html_url: string;
      committer: Committer;
    }) => {
      const { sha, commit, html_url, committer } = data;

      return {
        id: sha.substring(0, 7),
        message: commit.message,
        commit_author: committer.login,
        changes_url: html_url,
        avatar_url: committer.avatar_url,
        date: calculateTimePassed(commit.committer.date),
      };
    },
  );
}

function calculateTimePassed(date: string) {
  const commitDate = moment(date);
  const timePassed = moment().diff(commitDate);

  return moment.duration(timePassed).humanize();
}
