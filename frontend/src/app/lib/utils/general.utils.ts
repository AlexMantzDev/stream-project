export function debounce(callback: (...args: any[]) => void, delay: number = 500) {
	let timer: ReturnType<typeof setTimeout>;
	return function (this: any, ...args: any[]) {
		clearTimeout(timer);
		timer = setTimeout(() => callback.apply(this, args), delay);
	};
}
