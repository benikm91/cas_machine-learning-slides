import {TwoAnimationStep} from "./two-animation.step";

export class TwoAnimation {

    public static bigPause = new TwoAnimationStep(60);
    public static smallPause = new TwoAnimationStep(15);

    public readonly numberOfFrames: number;
    private lastRelativeFrameCount: number = Number.MAX_VALUE;
    private currentStep: TwoAnimationStep;

    constructor(
        readonly steps: TwoAnimationStep[],
        readonly between: () => void = () => {
        }
    ) {
        this.numberOfFrames = steps.map(x => x.numberOfFrames).reduce((x, y) => x + y, 0)
        this.currentStep = this.steps[0];
        this.lastRelativeFrameCount = Number.MAX_VALUE;
    }

    public resetAnimation() {
        this.currentStep = this.steps[0];
        this.lastRelativeFrameCount = Number.MAX_VALUE;
    }

    private findCurrentStep(relativeFrameCount: number): [TwoAnimationStep, number] {
        for (let step of this.steps) {
            relativeFrameCount = relativeFrameCount - step.numberOfFrames
            if (relativeFrameCount <= 0) return [step, step.numberOfFrames + relativeFrameCount];
        }
        throw new Error("Should be unreachable");
    }

    public animate(frameCount: number) {
        const relativeFrameCount = frameCount % this.numberOfFrames;
        if (relativeFrameCount <= this.lastRelativeFrameCount) {
            this.between();
        }
        const [currentStep, currentStepRelativeFrameCount] = this.findCurrentStep(relativeFrameCount);
        if (this.currentStep != currentStep)
            this.currentStep.afterAnimationStep();
        currentStep.beforeAnimationStep();
        this.currentStep = currentStep;
        this.currentStep.animate(currentStepRelativeFrameCount / this.currentStep.numberOfFrames);
        this.lastRelativeFrameCount = relativeFrameCount;
    }

}