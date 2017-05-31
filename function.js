function getTriangleArea(a,h) {
	if (a>0 && h>0) {
			return triangleArea = a * h / 2;
	}
	else {
			return 'Nieprawidłowe dane';
    }
}
var triangle1Area = getTriangleArea(10, 6),
	triangle2Area = getTriangleArea(10, 15),
	triangle3Area = getTriangleArea(19, 15);
console.log( triangle3Area );