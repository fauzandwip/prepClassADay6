const kabisat = (year) => {
	if (year % 400 === 0) return 'Kabisat'
	if (year % 100 === 0) return 'Bukan Kabisat'
	if (year % 4 === 0) return 'Kabisat'
	return 'Bukan Kabisat'
}

// console.log(kabisat(1900))
// console.log(kabisat(2000))
// console.log(kabisat(2001))
// console.log(kabisat(2016))
