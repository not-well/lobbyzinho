interface QueueInterface<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number;
  toArray(): T[];
}
