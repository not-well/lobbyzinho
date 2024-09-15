export class Queue<T> implements QueueInterface<T> {
  private storage: T[] = [];

  constructor(firstItens: T[]) {
    this.storage = firstItens;
  }

  enqueue(item: T): void {
    this.storage.push(item);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  }

  toArray(): T[] {
    return this.storage;
  }
}
