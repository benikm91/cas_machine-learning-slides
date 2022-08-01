export class TwoAnimationStep {

    constructor(
        readonly numberOfFrames: number,
        readonly animate: (delta: number) => void = () => { },
        readonly afterAnimationStep: () => void = () => { },
        readonly beforeAnimationStep: () => void = () => { }
    ) {
    }

}