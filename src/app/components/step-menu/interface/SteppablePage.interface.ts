export interface SteppablePage {
    /**
     * Proceed to the next step in the step sequence.
     * 
     * If the implementing step is the last in the sequence, this shouldn't do anything.
     */
    stepForward(): void;

    /**
     * Return to the previous step in the step sequence.
     * 
     * If the implementing step is the first in the sequence, this shouldn't do anything.
     */
    stepBackward(): void;
}