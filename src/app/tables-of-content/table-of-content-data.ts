export class TableOfContentEntry<L>{
    constructor(
        readonly label: L,
        readonly isActive: boolean = false,
        readonly children: TableOfContentEntry<L>[] = []
    ) { }

    public isOrHasActive(): boolean {
        if (this.isActive) return true;
        if (this.children.length == 0) return false;
        return this.children
            .map(function(x) { return x.isOrHasActive()})
            .reduce(function(x, y) { return x || y });
    }
}

export function c<L>(label: L, active: L | null, children: TableOfContentEntry<L>[] = []): TableOfContentEntry<L> {
    const isActive: boolean = active == label || children
            .map(function(x) { return x.isOrHasActive() })
            .reduce(function(x, y) { return x || y }, false);
    return new TableOfContentEntry(label, isActive, children)
}

export class TableOfContentLabel {
    private constructor(public readonly label: string, public readonly href: string) {
    }
}

export enum ProblemTableOfContentLabel {
    PROBLEM="Problem",
    SUPERVISED_PROBLEM="Supervised Learning",
    REGRESSION="Regression",
    CLASSIFICATION="Classification",
    UNSUPERVISED_LEARNING="Unsupervised Learning",
    REINFORCEMENT_LEARNING="Reinforcement Learning",
}

export function createProblemTableOfContent(active: ProblemTableOfContentLabel | null): TableOfContentEntry<ProblemTableOfContentLabel> {
    return c(ProblemTableOfContentLabel.PROBLEM, active, [
        c(ProblemTableOfContentLabel.SUPERVISED_PROBLEM, active,[
            c(ProblemTableOfContentLabel.REGRESSION, active),
            c(ProblemTableOfContentLabel.CLASSIFICATION, active),
        ]),
        c(ProblemTableOfContentLabel.UNSUPERVISED_LEARNING, active),
        c(ProblemTableOfContentLabel.REINFORCEMENT_LEARNING, active),
    ])
}

export enum MethodTableOfContentLabel {
    ALGORITHMUS="Algorithmus",
    DATA_SPECIFICATION="Data Specification",
    PREPROCESSING="Preprocessing",
    STANDARDIZE="Standardize",
    ENCODING="Encoding",
    MODEL="Model",
    LINEAR_MODEL="Linear Model",
    LINEAR_REGRESSION="Linear Regression",
    LDA="LDA",
    NON_LINEAR_MODEL="Non-Lineares Model",
    FEATURE_ENGINEERING="Feature Engineering",
    KERNEL_TRICK="Kernel Trick",
    OPTIMIERUNG="Optimierung",
    ANALYTIC="Analytisch",
    GRADIENT_DESCENT="Gradient Descent",
    COORDINATE_DESCENT="Coordinate Descent",
    COST_FUNCTION="Cost function",
    METRICS="Metrik",
}

export function createMethodTableOfContent(active: MethodTableOfContentLabel | null): TableOfContentEntry<MethodTableOfContentLabel> {
    return c(MethodTableOfContentLabel.ALGORITHMUS, active, [
        c(MethodTableOfContentLabel.DATA_SPECIFICATION, active, [
            c(MethodTableOfContentLabel.PREPROCESSING, active, [
                c(MethodTableOfContentLabel.STANDARDIZE, active),
                c(MethodTableOfContentLabel.ENCODING, active)
            ])
        ]),
        c(MethodTableOfContentLabel.MODEL, active, [
            c(MethodTableOfContentLabel.LINEAR_MODEL, active, [
                c(MethodTableOfContentLabel.LINEAR_REGRESSION, active),
                c(MethodTableOfContentLabel.LDA, active)
            ]),
            c(MethodTableOfContentLabel.NON_LINEAR_MODEL, active, [
                c(MethodTableOfContentLabel.FEATURE_ENGINEERING, active),
                c(MethodTableOfContentLabel.KERNEL_TRICK, active),
            ])
        ]),
        c(MethodTableOfContentLabel.OPTIMIERUNG, active, [
            c(MethodTableOfContentLabel.ANALYTIC, active),
            c(MethodTableOfContentLabel.GRADIENT_DESCENT, active),
            c(MethodTableOfContentLabel.COORDINATE_DESCENT, active),
        ]),
        c(MethodTableOfContentLabel.COST_FUNCTION, active, [
            c(MethodTableOfContentLabel.METRICS, active),
        ]),
    ])
}
