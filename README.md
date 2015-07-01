# fft-js
Pure Node.js implementation of the Fast Fourier Transform (Cooley-Tukey Method).

Note: normally inclusion of 'js' in the package name is discouraged. However many of the FFT implementations on NPM at the time this was written are wrappers for other languages like Ruby or C. We wanted to write our own, unoptimized implementation in pure Javascript as an educational tool. As a result it is called fft-js.

# Simple Example

    var fft = require('fft-js').fft,
        signal = [1,0,1,0];

    var phasors = fft(signal);

    console.log(phasors);

# Frequency/Magnitude Example

    var fft = require('fft-js').fft,
        fftUtil = require('fft-js').util,
        signal = [1,0,1,0];

    var phasors= fft(signal);

    var frequencies = fftUtil.fftFreq(phasors, 8000), // Sample rate and coef is just used for length
        magnitudes = fftUtil.fftMag(phasors); 

    var both = frequencies.map(function (f, ix) {
        return {frequency: f, magnitude: magnitudes[ix]};
    });

    console.log(both);

# Command Line

For testing, you can run from the command line. Input is assumed to be from standard input and contain
a comma-delimited list of real numbers.

Command:
    node fft.js < test/signal8.js

Console:

    Signal:  [ 1, 1, 1, 1, 0, 0, 0, 0 ]

    FFT:  [ [ 4, 0 ],
    [ 1, -2.414213562373095 ],
    [ 0, 0 ],
    [ 1, -0.4142135623730949 ],
    [ 0, 0 ],
    [ 0.9999999999999999, 0.4142135623730949 ],
    [ 0, 0 ],
    [ 0.9999999999999997, 2.414213562373095 ] ]

    FFT Magnitudes:  [ 4,
    2.613125929752753,
    0,
    1.0823922002923938,
    0,
    1.0823922002923938,
    0,
    2.6131259297527527 ]

    FFT Frequencies:  [ 0, 62.5, 125, 187.5, 250, 312.5, 375, 437.5 ]

# Testing

See `test/test.js`. Using Mocha:

    mocha

Output:

    FFT (Cooley-Tukey)
    1,0,1,0
    ✓ Should properly compute [1,0,1,0]
    1,0,1,0,2,0,2,0
    ✓ Should properly compute [1,0,1,0,2,0,2,0]

    2 passing (11ms)

# License 

The MIT License (MIT)

Copyright (c) 2015 Vail Systems

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
