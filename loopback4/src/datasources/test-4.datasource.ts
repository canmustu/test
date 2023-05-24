import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const getDataSourceConnectionString = () => {
  return process.env.databaseConnectionString ?? '';
}

const config = {
  "name": "Test4DataSource",
  "database": "Test4",
  "connector": "mongodb",
  "url": "",
  "host": "",
  "port": "",
  "user": "",
  "password": "",
  "useNewUrlParser": true,
  };

@lifeCycleObserver('datasource')
export class Test4DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Test4DataSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Test4DataSource', {optional: true})
    dsConfig = config,
  ) {
    dsConfig.url = getDataSourceConnectionString();
    super(dsConfig);
  }
}