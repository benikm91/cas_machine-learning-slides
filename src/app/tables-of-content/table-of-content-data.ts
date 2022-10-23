export class TableOfContentEntry<L>{
    constructor(
        readonly label: L,
        readonly isActive: boolean = false,
        readonly isActualActive: boolean = false,
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
    return new TableOfContentEntry(label, isActive, active == label, children)
}

export class TableOfContentLabel {
    protected constructor(public readonly label: string, public readonly href: string) {
    }
}

export class ProblemTableOfContentLabel extends TableOfContentLabel {
    public static readonly PROBLEM = new ProblemTableOfContentLabel("Problem", "Problem");
    public static readonly SUPERVISED_LEARNING = new ProblemTableOfContentLabel("Supervised Learning", "Supervised Learning");
    public static readonly REGRESSION = new ProblemTableOfContentLabel("Regression", "Regression");
    public static readonly CLASSIFICATION = new ProblemTableOfContentLabel("Classification", "Classification");
    public static readonly UNSUPERVISED_LEARNING = new ProblemTableOfContentLabel("Unsupervised Learning", "Unsupervised Learning");
    public static readonly CLUSTERING = new ProblemTableOfContentLabel("Clustering", "Clustering");
    public static readonly DIMENSIONALITY_REDUCTION = new ProblemTableOfContentLabel("Dimensionality Reduction", "Unsupervised Learning/Dimensionality Reduction");
    public static readonly REINFORCEMENT_LEARNING = new ProblemTableOfContentLabel("Reinforcement Learning", "Reinforcement Learning");
}

export function createProblemTableOfContent(active: ProblemTableOfContentLabel | null): TableOfContentEntry<ProblemTableOfContentLabel> {
    return c(ProblemTableOfContentLabel.PROBLEM, active, [
        c(ProblemTableOfContentLabel.SUPERVISED_LEARNING, active,[
            c(ProblemTableOfContentLabel.REGRESSION, active),
            c(ProblemTableOfContentLabel.CLASSIFICATION, active),
        ]),
        c(ProblemTableOfContentLabel.UNSUPERVISED_LEARNING, active, [
            c(ProblemTableOfContentLabel.DIMENSIONALITY_REDUCTION, active),
            c(ProblemTableOfContentLabel.CLUSTERING, active)
        ]),
        c(ProblemTableOfContentLabel.REINFORCEMENT_LEARNING, active),
    ])
}

export class AlgorithmTableOfContentLabel extends TableOfContentLabel {
    public static readonly LINEAR_REGRESSION = new AlgorithmTableOfContentLabel("Linear Regression", "Linear Regression");
    public static readonly LOGISTIC_REGRESSION = new AlgorithmTableOfContentLabel("Logistic Regression", "Logistic Regression");
    public static readonly SVM = new AlgorithmTableOfContentLabel("Support Vector Machine", "Support Vector Machine");
    public static readonly KNN = new AlgorithmTableOfContentLabel("K-Nearest Neighbors", "K-Nearest Neighbors");
    public static readonly PCA = new AlgorithmTableOfContentLabel("Principal Component Analysis", "Principal Component Analysis");

}

export class ConceptTableOfContentLabel extends TableOfContentLabel {
    public static readonly CONCEPTS = new ProblemTableOfContentLabel("Machine Learning Konzepte", "Machine Learning Konzepte");
    public static readonly FEATURE_PREPROCESSING = new ProblemTableOfContentLabel("Feature Preprocessing", "Feature Preprocessing");
    public static readonly STANDARDIZE = new ProblemTableOfContentLabel("Standardize", "Standardize");
    public static readonly ENCODING = new ProblemTableOfContentLabel("Encoding", "Encoding");
    public static readonly FEATURE_SELECTION = new ProblemTableOfContentLabel("Feature Selection", "Feature Selection");
    public static readonly DIMENSIONALITY_REDUCTION = new ProblemTableOfContentLabel("Dimensionality Reduction", "Feature Preprocessing/Dimensionality Reduction");
    public static readonly FEATURE_ENGINEERING = new ProblemTableOfContentLabel("Feature Engineering", "Feature Engineering");
    public static readonly FEATURE_ENGINEERING_EXPLICIT = new ProblemTableOfContentLabel("Feature Engineering (Explizit)", "Feature Engineering (Explizit)");
    public static readonly KERNEL_TRICK = new ProblemTableOfContentLabel("Kernel Trick", "Kernel Trick");
    public static readonly MODEL_COMPLEXITY = new ProblemTableOfContentLabel("Model-Komplexität", "Model-Komplexität");
    public static readonly OVERFITTING_UNDERFITTING = new ProblemTableOfContentLabel("Over- vs. Underfitting", "Over- vs. Underfitting");
    public static readonly CROSS_VALIDATION = new ProblemTableOfContentLabel("Cross Validation", "Cross Validation");
    public static readonly REGULARIZATION = new ProblemTableOfContentLabel("Regularization", "Regularization");
    public static readonly OPTIMIZATION = new ProblemTableOfContentLabel("Optimization", "Optimization");
    public static readonly METRICS = new ProblemTableOfContentLabel("Metrik", "Metrik");
    public static readonly REGRESSION_METRICS = new ProblemTableOfContentLabel("Regression Metrik", "Regression Metrik");
    public static readonly CLASSIFICATION_METRICS = new ProblemTableOfContentLabel("Klassifikation Metrik", "Klassifikation Metrik");
    public static readonly COST_FUNCTION = new ProblemTableOfContentLabel("Cost Function", "Cost Function");
    public static readonly OPTIMIZATION_ALGORITHMS = new ProblemTableOfContentLabel("Optimization Algorithms", "Optimization Algorithms");
    public static readonly ANALYTICAL = new ProblemTableOfContentLabel("Analytisch", "Analytisch");
    public static readonly SOLVERS = new ProblemTableOfContentLabel("Solvers", "Solvers");
    public static readonly GRADIENT_DESCENT = new ProblemTableOfContentLabel("Gradient Descent", "Gradient Descent");
    public static readonly COORDINATE_DESCENT = new ProblemTableOfContentLabel("Coordinate Descent", "Coordinate Descent");
    public static readonly MODEL_SELECTION = new ProblemTableOfContentLabel("Model Selection", "Model Selection");
    public static readonly ALGORITHM_SELECTION = new ProblemTableOfContentLabel("Algorithm Selection", "Algorithm Selection");
    public static readonly HYPERPARAMETER_SELECTION = new ProblemTableOfContentLabel("Hyper-Parameter Selection", "Hyper-Parameter Selection");

}

export function createMethodTableOfContent(active: ConceptTableOfContentLabel | null): TableOfContentEntry<ConceptTableOfContentLabel> {
    return c(ConceptTableOfContentLabel.CONCEPTS, active, [
        c(ConceptTableOfContentLabel.FEATURE_PREPROCESSING, active, [
            c(ConceptTableOfContentLabel.ENCODING, active),
            c(ConceptTableOfContentLabel.FEATURE_SELECTION, active),
            c(ConceptTableOfContentLabel.STANDARDIZE, active),
            c(ConceptTableOfContentLabel.DIMENSIONALITY_REDUCTION, active),
        ]),
        c(ConceptTableOfContentLabel.FEATURE_ENGINEERING, active, [
            c(ConceptTableOfContentLabel.FEATURE_ENGINEERING_EXPLICIT, active),
            c(ConceptTableOfContentLabel.KERNEL_TRICK, active)
        ]),
        c(ConceptTableOfContentLabel.MODEL_COMPLEXITY, active, [
            c(ConceptTableOfContentLabel.OVERFITTING_UNDERFITTING, active),
            c(ConceptTableOfContentLabel.CROSS_VALIDATION, active),
            c(ConceptTableOfContentLabel.REGULARIZATION, active),
        ]),
        c(ConceptTableOfContentLabel.OPTIMIZATION, active, [
            c(ConceptTableOfContentLabel.METRICS, active, [
            c(ConceptTableOfContentLabel.REGRESSION_METRICS, active),
              c(ConceptTableOfContentLabel.CLASSIFICATION_METRICS, active)
            ]),
            c(ConceptTableOfContentLabel.COST_FUNCTION, active),
            c(ConceptTableOfContentLabel.OPTIMIZATION_ALGORITHMS, active, [
                c(ConceptTableOfContentLabel.ANALYTICAL, active),
                c(ConceptTableOfContentLabel.SOLVERS, active),
                c(ConceptTableOfContentLabel.GRADIENT_DESCENT, active),
                c(ConceptTableOfContentLabel.COORDINATE_DESCENT, active),
            ])
        ]),
        c(ConceptTableOfContentLabel.MODEL_SELECTION, active, [
            c(ConceptTableOfContentLabel.HYPERPARAMETER_SELECTION, active),
            c(ConceptTableOfContentLabel.ALGORITHM_SELECTION, active),
        ]),
    ])
}
