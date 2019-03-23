/**
 * The phasors (frequency domain) representation of a signal tranformed
 * through a Fourier Transformation.
 */
export type Phasors = [number, number][];

/**
 * Calculate the fourier transform of the given signal.
 *
 * @param signal An array of input signal data as floating point numbers
 *     in the range of 0 to 1.
 *
 * @return The calculated phasors.
 */
export const fft: (signal: number[]) => Phasors;

/**
 * Calculate the discrete fourier transform of the given signal.
 * The DFT has rare use cases as it's mostly an unoptimized Fourier
 * Transformation for discrete data.
 *
 * @param signal An array of input signal data as floating point numbers
 *     in the range of 0 to 1.
 *
 * @return The calculated phasors.
 */
export const dft: (signal: number[]) => Phasors;

/**
 * Calculates the Inverse Fast Fourier transformation of a given frequency
 * domain (phasors). Will transform the frequency domain back to a signal.
 */
export const ifft: (phasors: Phasors) => number[];

export const util: {
    /**
     * Will calculate the frequencies for the given Phasors and the sample
     * rate of the original input signal.
     *
     * @param phasors A set of phasors calculated by a Fourier Transformation.
     * @param sampleRate The sample rate of the original input signal in Hz.
     *
     * @return The frequency for each phasor as an array of the same length
     *     as the array of phasors.
     */
    fftFreq: (phasors: Phasors, sampleRate: number) => number[],

    /**
     * Will calculate the magnitudes for each phasor in the set of phasors.
     *
     * @param phasors A set of phasors calculated by a Fourier Transformation.
     *
     * @return The magnitude for each phasor as an array of the same length
     *     as the array of phasors.
     */
    fftMag: (phasors: Phasors) => number[],
};
