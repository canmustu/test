import jsonata from 'jsonata';

export class JSONAtaObject {
  _value: any;

  constructor(data: object) {
    this.data = data;
  }

  static chain(data: object): JSONAtaObject {
    return new JSONAtaObject(data);
  }

  async transform(jsonataConfig: string): Promise<JSONAtaObject> {
    const expression = jsonata(jsonataConfig);
    const result = await expression.evaluate(this.data);
    this.data = result;
    return this;
  }

  set data(value: any) {
    this._value = value;
  }

  get data() {
    return this._value;
  }

  get value() {
    return this.data;
  }
}
