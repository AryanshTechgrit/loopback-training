import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CustomerDataSource} from '../datasources';
import {Role, RoleRelations} from '../models';

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype.id,
  RoleRelations
> {
  constructor(
    @inject('datasources.Customer') dataSource: CustomerDataSource,
  ) {
    super(Role, dataSource);
  }
}
