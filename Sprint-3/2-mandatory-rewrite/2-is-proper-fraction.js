function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    return Math.abs(numerator) < denominator;
}

module.exports = isProperFraction;