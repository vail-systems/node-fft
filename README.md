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

    var frequencies = fftUtil.fftFreq(phasors, 8000), // Sample rate and coef is just used for length, and frequency step
        magnitudes = fftUtil.fftMag(phasors); 

    var both = frequencies.map(function (f, ix) {
        return {frequency: f, magnitude: magnitudes[ix]};
    });

    console.log(both);
    
# Brute force O(n^2) DFT Example

The DFT (Discrete Fourier Transform) is an unoptimized Fourier Transform for discrete data. In this project it is primarily a teaching tool, and is used to test the FFT.

    var dft = require('fft-js').dft,
        signal = [1,0,1,0];
    
    var phasors = dft(signal);
    
    console.log(phasors);

# In-place FFT Example

The in-place FFT implementation generates the FFT in-place, overwriting the original input vector. This is useful for minimizing new memory allocations required for the recursive version.

    var fftInPlace = require('fft-js').fftInPlace,
        signal = [1, 0, 1, 0];
        
    fftInPlace(signal);
    
    console.log(signal); //We have overwritten the original vector here with the FFT output.

# Command Line

For testing, you can run from the command line. Input is assumed to be from standard input and contain
a comma-delimited list of real numbers.

Command:
    node fft.js -s 44100 test/signal8.js

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

    FFT Magnitudes:  [ 4, 2.613125929752753, 0, 1.0823922002923938 ] //We only see the first 4, because the 2nd 4 are the Nyquist frequency (discarded for aliasing), and then the mirror image negative frequencies.

    FFT Frequencies:  [ 0, 5512.5, 11025, 16537.5 ]

# Testing

See `test/test.js`. Using Mocha:

    mocha

Output:

    FFT (Cooley-Tukey)
    1,0,1,0
      ✓ Should properly compute [1,0,1,0]
    1,0,1,0,2,0,2,0
      ✓ Should properly compute [1,0,1,0,2,0,2,0]
    
    FFT (in-place Cooley-Tukey)
    1,0,1,0
      ✓ Should properly compute [1,0,1,0]
    1,0,1,0,2,0,2,0
      ✓ Should properly compute [1,0,1,0,2,0,2,0]
    
    DFT O(n^2) Brute Force
    1,0,1,0
      ✓ Should properly compute [1, 0, 1, 0]
    
    Compare FFT to DFT
    randomSignal FFT
      ✓ Should compute randomSignal
    randomSignal in-place FFT
      ✓ Should compute randomSignal
    randomSignal DFT
      ✓ Should compute randomSignal
    randomSignal FFT and DFT
      ✓ Should compute same output
    randomSignal in-place FFT and DFT
      ✓ Should compute same output
    
    
    10 passing (16ms)

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
