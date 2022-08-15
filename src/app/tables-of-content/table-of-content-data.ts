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

export function c<L extends TableOfContentLabel>(label: L, active: L | null, children: TableOfContentEntry<L>[] = []): TableOfContentEntry<L> {
    const isActive: boolean = active == label || children
            .map(function(x) { return x.isOrHasActive() })
            .reduce(function(x, y) { return x || y }, false);
    return new TableOfContentEntry(label, isActive, children)
}

export class TableOfContentLabel {
    protected constructor(public readonly label: string, public readonly href: string) {
    }
}

export class ProblemTableOfContentLabel extends TableOfContentLabel {
    public static readonly PROBLEM = new ProblemTableOfContentLabel("Problem", "Problem");
    public static readonly SUPERVISED_PROBLEM = new ProblemTableOfContentLabel("Supervised Learning", "Supervised Learning");
    public static readonly REGRESSION = new ProblemTableOfContentLabel("Regression", "Regression");
    public static readonly CLASSIFICATION = new ProblemTableOfContentLabel("Classification", "Classification");
    public static readonly UNSUPERVISED_LEARNING = new ProblemTableOfContentLabel("Unsupervised Learning", "Unsupervised Learning");
    public static readonly REINFORCEMENT_LEARNING = new ProblemTableOfContentLabel("Reinforcement Learning", "Reinforcement Learning");
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

export class MethodTableOfContentLabel extends TableOfContentLabel {
    public static readonly ALGORITHMUS = new ProblemTableOfContentLabel("Algorithmus", "Algorithmus");
    public static readonly DATA_SPECIFICATION = new ProblemTableOfContentLabel("Data Specification", "Data Specification");
    public static readonly PREPROCESSING = new ProblemTableOfContentLabel("Preprocessing", "Preprocessing");
    public static readonly STANDARDIZE = new ProblemTableOfContentLabel("Standardize", "Standardize");
    public static readonly ENCODING = new ProblemTableOfContentLabel("Encoding", "Encoding");
    public static readonly MODEL = new ProblemTableOfContentLabel("Model", "Model");
    public static readonly LINEAR_MODEL = new ProblemTableOfContentLabel("Linear Model", "Linear Model");
    public static readonly LINEAR_REGRESSION = new ProblemTableOfContentLabel("Linear Regression", "Linear Regression");
    public static readonly LDA = new ProblemTableOfContentLabel("LDA", "LDA");
    public static readonly NON_LINEAR_MODEL = new ProblemTableOfContentLabel("Non-Lineares Model", "Non-Lineares Model");
    public static readonly FEATURE_ENGINEERING = new ProblemTableOfContentLabel("Feature Engineering", "Feature Engineering");
    public static readonly KERNEL_TRICK = new ProblemTableOfContentLabel("Kernel Trick", "Kernel Trick");
    public static readonly OPTIMIERUNG = new ProblemTableOfContentLabel("Optimierung", "Optimierung");
    public static readonly ANALYTIC = new ProblemTableOfContentLabel("Analytisch", "Analytisch");
    public static readonly GRADIENT_DESCENT = new ProblemTableOfContentLabel("Gradient Descent", "Gradient Descent");
    public static readonly COORDINATE_DESCENT = new ProblemTableOfContentLabel("Coordinate Descent", "Coordinate Descent");
    public static readonly COST_FUNCTION = new ProblemTableOfContentLabel("Cost function", "Cost function");
    public static readonly METRICS = new ProblemTableOfContentLabel("Metrik", "Metrik");
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
