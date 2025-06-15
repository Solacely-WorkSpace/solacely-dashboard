export abstract class BaseStorageService {
  protected setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  protected getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  protected removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  protected clearAll(keys: string[]): void {
    keys.forEach((key) => this.removeItem(key));
  }
}
