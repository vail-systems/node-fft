/*===========================================================================*\
 * Fast Fourier Transform (Cooley-Tukey Method)
 *
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Fast Fourier Transform.
\*===========================================================================*/
var fft = require('./').fft,
    fftutil = require('./').util,
    program = require('commander'),
    fs = require('fs');

program.version('0.0.6')
  .usage('[options] [signal]')
  .option('-s, --sample-rate [sampleRate]', 'Set sample rate [1000]', '1000');

program.parse(process.argv);

var sampleRate = parseFloat(program.sampleRate);

if (isNaN(sampleRate)) {
    console.log('Please pass a valid sample rate with the -s option!');
    program.outputHelp();
    process.exit(1);
}

if (program.args.length < 1) {
    console.log('Please pass a valid signal file!');
    program.outputHelp();
    process.exit(1);
}

fs.readFile(program.args[0], 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }

    var signal = data.toString().split(',').map(parseFloat);
    console.log('Signal: ', signal);

    var complexCoef = fft(signal); //This includes coefficients for the negative frequencies, and the Nyquist frequency.
    console.log('FFT: ', complexCoef);

    var magnitudes = fftutil.fftMag(complexCoef);
    console.log('FFT Magnitudes: ', magnitudes);

    var frequencies = fftutil.fftFreq(complexCoef, sampleRate);
    console.log('FFT Frequencies: ', frequencies);
});

