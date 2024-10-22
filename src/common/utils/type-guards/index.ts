export class TypeGuards {
  public static isString(value: unknown): value is string {
    return typeof value === "string";
  }

  static isNumber(value: unknown): value is number {
    return typeof value === "number";
  }

  static isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }
}
