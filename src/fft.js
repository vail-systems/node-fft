/*===========================================================================*\
 * Fast Fourier Transform (Cooley-Tukey Method)
 *
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Fast Fourier Transform.
\*===========================================================================*/

//------------------------------------------------
// Note: this code is not optimized and is
// primarily designed as an educational and testing
// tool.
// Proper optimization would involve memoization of
// the sin() and cos() calls... and to get high
// performace would require transforming the recursive
// calls into a loop and then loop unrolling. All of
// this is best accomplished in C or assembly.
//-------------------------------------------------

//-------------------------------------------------
// The following code assumes a complex number is
// an array: [real, imaginary]
//-------------------------------------------------
var complex = require('./complex');
var fftUtil = require('./fftutil');

//-------------------------------------------------
// Calculate FFT for vector where vector.length
// is assumed to be a power of 2.
//-------------------------------------------------
var fft = function (vector) {
    var X = [],
        N = vector.length;

    // Base case is X = x + 0i since our input is assumed to be real only.
    if (N == 1) return [[vector[0], 0]];

    // Recurse: all even samples
    var X_evens = fft(vector.filter(even)),

    // Recurse: all odd samples
        X_odds = fft(vector.filter(odd));

    // Now, perform N/2 operations!
    for (var k = 0; k < N / 2; k++)
    {
        // t is a complex number!
        var t = X_evens[k],
            e = complex.multiply(fftUtil.exponent(k, N), X_odds[k]);

        X[k] =         complex.add(t, e);
        X[k + (N/2)] = complex.subtract(t, e); 
    }

    function even(__, ix) {return ix % 2 == 0;}
    function odd (__, ix) {return ix % 2 == 1;}

    return X;
};

module.exports = fft;
