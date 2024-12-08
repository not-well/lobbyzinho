export class Queue<T> implements QueueInterface<T> {
  private storage: T[] = [];

  constructor(firstItens: T[]) {
    this.storage = firstItens;
  }

  get size(): number {
    return this.storage.length;
  }

  enqueue(item: T): void {
    this.storage.push(item);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  toArray(): T[] {
    return this.storage;
  }

  get(index: number): T {
    if (index > this.size) {
      throw new Error('Index out of bounds');
    }

    return this.storage[index];
  }
}
