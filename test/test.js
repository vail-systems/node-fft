var assert = require('assert'),
    fft = require('../').fft,
    dft = require('../').dft;

describe('FFT (Cooley-Tukey)', function () {
    describe('1,0,1,0', function () {
        it('Should properly compute [1,0,1,0]', function () {
            var coef = fft([1,0,1,0]);
            console.log(coef);
            checkShortVectorWithThresh(coef);
        });
    }); 
    
    describe('1,0,1,0,2,0,2,0', function () {
        it('Should properly compute [1,0,1,0,2,0,2,0]', function () {
            var coef = fft([1,0,1,0,2,0,2,0]);
            checkLongVectorWithThresh(coef);
        });
    });
});

describe('DFT O(n^2) Brute Force', function() {
   describe('1,0,1,0', function() {
      it('Should properly compute [1, 0, 1, 0]', function() {
          var coef = dft([1,0,1,0]);
          console.log(coef);
          checkShortVectorWithThresh(coef);
      });
   });
});

function checkShortVectorWithThresh(coef) {
    assert(equalWithThresh(coef[0][0], 2, 0.01));
    assert(equalWithThresh(coef[0][1], 0, 0.01));
    assert(equalWithThresh(coef[1][0], 0, 0.01));
    assert(equalWithThresh(coef[1][1], 0, 0.01));
    assert(equalWithThresh(coef[2][0], 2, 0.01));
    assert(equalWithThresh(coef[2][1], 0, 0.01));
    assert(equalWithThresh(coef[3][0], 0, 0.01));
    assert(equalWithThresh(coef[3][1], 0, 0.01));
}

function checkLongVectorWithThresh(coef) {
    assert(equalWithThresh(coef[0][0], 6, 0.01));
    assert(equalWithThresh(coef[0][1], 0, 0.01));
    assert(equalWithThresh(coef[1][0], -1, 0.01));
    assert(equalWithThresh(coef[1][1], 1, 0.01));
    assert(equalWithThresh(coef[2][0], 0, 0.01));
    assert(equalWithThresh(coef[2][1], 0, 0.01));
    assert(equalWithThresh(coef[3][0], -1, 0.01));
    assert(equalWithThresh(coef[3][1], -1, 0.01));
    assert(equalWithThresh(coef[4][0], 6, 0.01));
    assert(equalWithThresh(coef[4][1], 0, 0.01));
    assert(equalWithThresh(coef[5][0], -1, 0.01));
    assert(equalWithThresh(coef[5][1], 1, 0.01));
    assert(equalWithThresh(coef[6][0], 0, 0.01));
    assert(equalWithThresh(coef[6][1], 0, 0.01));
    assert(equalWithThresh(coef[7][0], -1, 0.01));
    assert(equalWithThresh(coef[7][1], -1, 0.01));
}

function equalWithThresh(val1, val2, threshold) {
    return (val1 > val2 - threshold) && 
           (val1 < val2 + threshold);
}
