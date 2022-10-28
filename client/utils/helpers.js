export function generateCalendar(month, year) {
	const calendar = [];
	const monthStart = new Date(year, month).getDay();
	/*prettier-ignore */
	const daysOfMonth = [31,getFebDays(year),31,30,31,30,31,31,30,31,30,31]
	let day = null;
	for (let i = 1; i <= daysOfMonth[month] + monthStart; i++) {
		if (i > monthStart) {
			day = i - monthStart;
		}
		calendar.push(day);
	}
	return { calendar, month, year };
}

export function bookedDays(from, to) {
	//  Same month of the same year
	if (from?.year === to?.year && from?.month === to?.month)
		return to?.date - from?.date;

	//  diff months of the same year
	if (
		from?.year === to?.year &&
		from?.month < to?.month &&
		to?.month - from?.month < 2
	) {
		return tmd(from?.year)[from?.month] - from?.date + to?.date;
	}

	// multiple months of the same year
	if (from?.year === to?.year && to?.month - from?.month > 1) {
		let result = 0;
		for (let i = from?.month; i <= to?.month; i++) {
			if (i === from?.month) result += tmd(from?.year)[i] - from?.date;
			else if (i === to?.month) result += to?.date;
			else result += tmd(from?.year)[i];
		}
		return result;
	}

	//  multiple months of the diff years
	if (from?.year < to?.year) {
		let result = 0;
		for (let year = from?.year; year <= to?.year; year++) {
			if (year === from?.year)
				for (let i = from?.month; i < 12; i++) {
					if (i === from?.month) result += tmd(year)[i] - from?.date;
					else result += tmd(year)[i];
				}
			else if (year === to?.year)
				for (let j = 0; j <= to?.month; j++) {
					if (j === to?.month) result += to?.date;
					else result += tmd(year)[j];
				}
			else if (year > from?.year && year < to?.year)
				for (let k = 0; k < 12; k++) {
					result += tmd(year)[k];
				}
		}
		return result;
	}
}

function getFebDays(year) {
	return isLeapYear(year) ? 29 : 28;
}

function isLeapYear(year) {
	return (
		(!(year % 4) && year % 100 && year % 400) ||
		(!(year % 100) && !(year % 400))
	);
}

// TMD: Total Month Days
function tmd(year) {
	/*prettier-ignore */
	return [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

export const imgArray = [
	"https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?w=826&t=st=1663958956~exp=1663959556~hmac=ed2a2def4c085a742a8572109e6eeb5424f21b627086bdbcf985b16597e613ff",
	"https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=826&t=st=1663959033~exp=1663959633~hmac=2070e9bac423d65939e0f937e2166dc62a330dee01df26993e2bfe577de94c83",
	"https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg?w=996&t=st=1663959112~exp=1663959712~hmac=2cd9df15163a698903ec9f3d978d134309ac189ea0aff4c2d97f0f5339973435",
	"https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=826&t=st=1663959138~exp=1663959738~hmac=5ffdee3c9c2f526ae09467fee11fa21da1d73f524cfa1a9926f36102a1408e18",
	"https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg?w=826&t=st=1663959159~exp=1663959759~hmac=5a7cbfcc1951a02e67ae91275afa4f5c10bbbd5a5fd3540c9d473ac227942a1a",
	"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const cityImgs = [
	"https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const stays = [
	"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=400",
	"https://images.pexels.com/photos/296109/pexels-photo-296109.jpeg?auto=compress&cs=tinysrgb&w=400",
	"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=400",
	"https://images.pexels.com/photos/296109/pexels-photo-296109.jpeg?auto=compress&cs=tinysrgb&w=400",
];

export function rand(range) {
	return Math.trunc(Math.random() * range) + 1;
}
