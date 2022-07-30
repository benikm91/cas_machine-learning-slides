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

function c<L>(label: L, active: L | null, children: TableOfContentEntry<L>[] = []): TableOfContentEntry<L> {
    const isActive: boolean = active == label || children
            .map(function(x) { return x.isOrHasActive() })
            .reduce(function(x, y) { return x || y }, false);
    return new TableOfContentEntry(label, isActive, children)
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
    MODEL="Model",
    OPTIMIERUNG="Optimierung",
    COST_FUNCTION="Cost function",
}

export function createMethodTableOfContent(active: MethodTableOfContentLabel | null): TableOfContentEntry<MethodTableOfContentLabel> {
    return c(MethodTableOfContentLabel.ALGORITHMUS, active, [
        c(MethodTableOfContentLabel.DATA_SPECIFICATION, active),
        c(MethodTableOfContentLabel.MODEL, active),
        c(MethodTableOfContentLabel.OPTIMIERUNG, active),
        c(MethodTableOfContentLabel.COST_FUNCTION, active),
    ])
}
