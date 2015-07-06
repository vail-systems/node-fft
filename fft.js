/*===========================================================================*\
 * Fast Fourier Transform (Cooley-Tukey Method)
 *
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Fast Fourier Transform.
\*===========================================================================*/
var fft = require('./').fft,
    fftutil = require('./').util;

process.stdin.on('data', function (data) {
    var signal = data.toString().split(',').map(parseFloat);
    console.log('Signal: ', signal);

    var complexCoef = fft(signal); //This includes coefficients for the negative frequencies
    console.log('FFT: ', complexCoef);

    var magnitudes = fftutil.fftMag(complexCoef);
    console.log('FFT Magnitudes: ', magnitudes);

    var frequencies = fftutil.fftFreq(complexCoef, 1000);
    console.log('FFT Frequencies: ', frequencies);
});
