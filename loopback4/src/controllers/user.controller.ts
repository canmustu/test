import {
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  put,
  del,
  getModelSchemaRef,
  getWhereSchemaFor,
  requestBody,
  response,
} from '@loopback/rest';
import { inject, intercept } from '@loopback/core';
import { PreControls } from '../interceptors';
import { Count } from '../dtos';

import {
  User,
} from '../models';
import {
  UserRepository,
} from '../repositories';


@intercept(PreControls)
export class UserController {

  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  
}