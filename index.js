/*===========================================================================*\
 * Fast Fourier Transform (Cooley-Tukey Method)
 *
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Fast Fourier Transform.
\*===========================================================================*/
module.exports = {
    fft: require('./src/fft').fft,
    fftInPlace: require('./src/fft').fftInPlace,
    util: require('./src/fftutil'),
    dft: require('./src/dft')
};
