interface QueueInterface<T> {
  size: number;
  enqueue(item: T): void;
  dequeue(): T | undefined;
  toArray(): T[];
  get(index: number): T;
}
