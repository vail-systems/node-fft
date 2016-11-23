var fft = require('fft-js').fft;

//-------------------------------------------------
// The following code assumes a complex number is
// an array: [real, imaginary]
//-------------------------------------------------

module.exports = {
    ifft: function ifft(signal){
        //Interchange real and imaginary parts
        var csignal=[];
        for(var i=0; i<signal.length; i++){
            csignal[i]=[signal[i][1], signal[i][0]];
        }
    
        //Apply fft
        var ps=fft(csignal);
        
        //Interchange real and imaginary parts and normalize
        var res=[];
        for(var j=0; j<ps.length; j++){
            res[j]=[ps[j][1]/ps.length, ps[j][0]/ps.length];
        }
        return res;
    }
};
