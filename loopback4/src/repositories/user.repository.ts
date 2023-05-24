import { Getter, inject } from '@loopback/core';
import {
  repository,
  DefaultCrudRepository,
  BelongsToAccessor,
  HasOneRepositoryFactory,
  HasManyRepositoryFactory,
  HasManyThroughRepositoryFactory
} from '@loopback/repository';

/* datasource imports */
import { Test4DataSource } from '../datasources';

/* model imports */
import {
  User,
  UserRelations,
  } from '../models';

/* repository imports */


export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.Test4DataSource')
    dataSource: Test4DataSource,

    ) {
    super(User, dataSource);

    }
}
