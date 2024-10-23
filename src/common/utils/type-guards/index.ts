export class TypeGuards {
  static isString(value: unknown): value is string {
    return typeof value === "string";
  }

  static isStringEmpty(value: unknown): boolean {
    return this.isString(value) && !value.length;
  }

  static isNull(value: unknown): value is null {
    return value === null;
  }
}
