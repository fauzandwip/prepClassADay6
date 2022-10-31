const grade = (score) => {
	if (score >= 90) return 'A'
	if (score >= 80) return 'B'
	if (score >= 70) return 'C'
	if (score >= 60) return 'D'
	return 'E'
}

// console.log(grade(30))
// console.log(grade(75))

// console.log(grade(100))
// console.log(grade(89))
// console.log(grade(65))
