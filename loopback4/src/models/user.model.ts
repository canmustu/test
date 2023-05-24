import { 
  Entity,
  belongsTo,
  hasMany,
  hasOne,
  referencesMany,
  model,
  property
} from '@loopback/repository';



@model({
  settings: {
    strict: true,
    hiddenProperties: [
      'password',
        ],
    forceId: false,
    validateUpsert: true,
    idInjection: true
  }
})
export class User extends Entity {

  @property({
      type: 'string',
      id: true,
      required: true,
      jsonSchema: { nullable: true },
      defaultFn: 'uuidv4',
      index: {
        unique: true, // info: not supported for mongodb
      },
      })
    id:string | null;

    @property({
      type: 'string',
      required: true,
      jsonSchema: { nullable: true },
      index: {
        unique: true, // info: not supported for mongodb
      },
      })
    username:string | null;

    @property({
      type: 'string',
      required: true,
      jsonSchema: { nullable: true },
      })
    password:string | null;

    @property({
      type: 'string',
      required: true,
      jsonSchema: { nullable: true },
      })
    firstName:string | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      })
    middleName?:string | null;

    @property({
      type: 'string',
      required: true,
      jsonSchema: { nullable: true },
      })
    lastName:string | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      index: {
        unique: true, // info: not supported for mongodb
      },
      })
    email?:string | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      index: {
        unique: true, // info: not supported for mongodb
      },
      })
    phoneNumber?:string | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      })
    avatar?:string | null;

    @property({
      type: 'Date',
      required: false,
      jsonSchema: { nullable: true },
      defaultFn: 'now',
      })
    createdDate?:Date | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      })
    createdBy?:string | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      })
    createdById?:string | null;

    @property({
      type: 'Date',
      required: false,
      jsonSchema: { nullable: true },
      })
    updatedDate?:Date | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      })
    updatedBy?:string | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      })
    updatedById?:string | null;

    @property({
      type: 'Date',
      required: false,
      jsonSchema: { nullable: true },
      defaultFn: 'now',
      })
    deletedDate?:Date | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      })
    deletedBy?:string | null;

    @property({
      type: 'string',
      required: false,
      jsonSchema: { nullable: true },
      })
    deletedById?:string | null;

    @property({
      type: 'boolean',
      required: false,
      jsonSchema: { nullable: true },
      })
    isDeleted?:boolean | null;

    [prop: string]: any;
  

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
