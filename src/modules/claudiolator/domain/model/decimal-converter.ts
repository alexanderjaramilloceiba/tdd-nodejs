export interface DecimalConverter<T> {
	from(num: T): number;
	to(num: number): T;
}
