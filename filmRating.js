const movieRate = (age) => {
	if (age >= 21) return 'DEWASA'
	if (age >= 13) return 'REMAJA'
	if (age >= 9) return 'BIMBINGAN ORANG TUA'
	return 'SEMUA USIA'
}

// console.log(movieRate(15))
// console.log(movieRate(32))
// console.log(movieRate(9))
// console.log(movieRate(7))
