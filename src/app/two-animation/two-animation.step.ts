export class TwoAnimationStep {

    constructor(
        readonly numberOfFrames: number,
        readonly animate: (delta: number) => void = () => { },
        readonly afterAnimationStep: () => void = () => { },
        readonly beforeAnimationStep: () => void = () => { }
    ) {
    }

}

export class LinearInterpolator {

    constructor(readonly from: number, readonly to: number) {
    }

    public frameCount(speed: number) {
        return Math.abs(this.to - this.from) / speed;
    }

    public interpolate(delta: number) {
        return this.from * (1-delta) + this.to * delta;
    }

    public invert(): LinearInterpolator {
        return new LinearInterpolator(this.to, this.from);
    }

}