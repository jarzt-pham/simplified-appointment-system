export type SettingsCreatePayload = {
  id: string;
  key: string;
  value: string;
};

export type SettingsUpdatePayload = {
  key: string;
  value: string;
};

export interface ISettings {
  id: string;
  key: string;
  value: string;
  create({ id, key, value }: SettingsCreatePayload): Settings;
  update({ key, value }: SettingsCreatePayload): void;
}

export class Settings implements ISettings {
  private _id: string;
  private _key: string;
  private _value: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  create({ id, key, value }: SettingsCreatePayload) {
    this.id = id;
    this.key = key;
    this.value = value;

    return this;
  }

  update({ key, value }: SettingsCreatePayload) {
    this.key = key;
    this.value = value;
  }
}
