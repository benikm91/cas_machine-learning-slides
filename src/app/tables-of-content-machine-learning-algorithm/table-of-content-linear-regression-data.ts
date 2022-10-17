import {
    c,
    TableOfContentEntry,
    TableOfContentLabel
} from "../tables-of-content/table-of-content-data";

export class LinearRegressionTableOfContentLabel extends TableOfContentLabel {
    public static readonly LINEAR_REGRESSION = new LinearRegressionTableOfContentLabel("Linear Regression", "Linear Regression");
    public static readonly DATA_SPECIFICATION = new LinearRegressionTableOfContentLabel("Data Specification", "Linear Regression/Data Specification");
    public static readonly MODEL = new LinearRegressionTableOfContentLabel("Model" , "Linear Regression/Model" );
    public static readonly OPTIMIERUNG = new LinearRegressionTableOfContentLabel("Optimierung" , "Linear Regression/Optimierung" );
    public static readonly COST_FUNCTION = new LinearRegressionTableOfContentLabel("Cost function", "Linear Regression/Cost function");
}

export function createLinearRegressionTableOfContent(active: LinearRegressionTableOfContentLabel | null): TableOfContentEntry<LinearRegressionTableOfContentLabel> {
    return c(LinearRegressionTableOfContentLabel.LINEAR_REGRESSION, active, [
        c(LinearRegressionTableOfContentLabel.DATA_SPECIFICATION, active, []),
        c(LinearRegressionTableOfContentLabel.MODEL, active, []),
        c(LinearRegressionTableOfContentLabel.COST_FUNCTION, active, []),
        c(LinearRegressionTableOfContentLabel.OPTIMIERUNG, active, []),
    ])
}

export class LogisticRegressionTableOfContentLabel extends TableOfContentLabel {
    public static readonly LOGISTIC_REGRESSION = new LogisticRegressionTableOfContentLabel("Logistic Regression", "Logistic Regression");
    public static readonly DATA_SPECIFICATION = new LogisticRegressionTableOfContentLabel("Data Specification", "Logistic Regression/Data Specification");
    public static readonly MODEL = new LogisticRegressionTableOfContentLabel("Model" , "Logistic Regression/Model" );
    public static readonly OPTIMIERUNG = new LogisticRegressionTableOfContentLabel("Optimierung" , "Logistic Regression/Optimierung" );
    public static readonly COST_FUNCTION = new LogisticRegressionTableOfContentLabel("Cost function", "Logistic Regression/Cost function");
}

export function createLogisticRegressionTableOfContent(active: LogisticRegressionTableOfContentLabel | null): TableOfContentEntry<LogisticRegressionTableOfContentLabel> {
    return c(LogisticRegressionTableOfContentLabel.LOGISTIC_REGRESSION, active, [
        c(LogisticRegressionTableOfContentLabel.DATA_SPECIFICATION, active, []),
        c(LogisticRegressionTableOfContentLabel.MODEL, active, []),
        c(LogisticRegressionTableOfContentLabel.COST_FUNCTION, active, []),
        c(LogisticRegressionTableOfContentLabel.OPTIMIERUNG, active, []),
    ])
}

export class SupportVectorMachineTableOfContentLabel extends TableOfContentLabel {
    public static readonly SUPPORT_VECTOR_MACHINE = new SupportVectorMachineTableOfContentLabel("Support Vector Machine", "Support Vector Machine");
    public static readonly DATA_SPECIFICATION = new SupportVectorMachineTableOfContentLabel("Data Specification", "Support Vector Machine/Data Specification");
    public static readonly MODEL = new SupportVectorMachineTableOfContentLabel("Model" , "Support Vector Machine/Model" );
    public static readonly OPTIMIERUNG = new SupportVectorMachineTableOfContentLabel("Optimierung" , "Support Vector Machine/Optimierung" );
    public static readonly COST_FUNCTION = new SupportVectorMachineTableOfContentLabel("Cost function", "Support Vector Machine/Cost function");
}

export function createSupportVectorMachineTableOfContent(active: SupportVectorMachineTableOfContentLabel | null): TableOfContentEntry<SupportVectorMachineTableOfContentLabel> {
    return c(SupportVectorMachineTableOfContentLabel.SUPPORT_VECTOR_MACHINE, active, [
        c(SupportVectorMachineTableOfContentLabel.DATA_SPECIFICATION, active, []),
        c(SupportVectorMachineTableOfContentLabel.MODEL, active, []),
        c(SupportVectorMachineTableOfContentLabel.COST_FUNCTION, active, []),
        c(SupportVectorMachineTableOfContentLabel.OPTIMIERUNG, active, []),
    ])
}

export class CartTableOfContentLabel extends TableOfContentLabel {
    public static readonly DECISION_TREE = new CartTableOfContentLabel("Decision Trees", "Decision Trees");
    public static readonly DATA_SPECIFICATION = new CartTableOfContentLabel("Data Specification", "Decision Trees/Data Specification");
    public static readonly MODEL = new CartTableOfContentLabel("Model" , "Decision Trees/Model" );
    public static readonly OPTIMIERUNG = new CartTableOfContentLabel("Optimierung" , "Decision Trees/Optimierung" );
    public static readonly COST_FUNCTION = new CartTableOfContentLabel("Cost function", "Decision Trees/Cost function");
}

export function createCartTableOfContent(active: CartTableOfContentLabel | null): TableOfContentEntry<CartTableOfContentLabel> {
    return c(CartTableOfContentLabel.DECISION_TREE, active, [
        c(CartTableOfContentLabel.DATA_SPECIFICATION, active, []),
        c(CartTableOfContentLabel.MODEL, active, []),
        c(CartTableOfContentLabel.COST_FUNCTION, active, []),
        c(CartTableOfContentLabel.OPTIMIERUNG, active, []),
    ])
}

export class PCATableOfContentLabel extends TableOfContentLabel {
    public static readonly PCA = new PCATableOfContentLabel("PCA", "PCA");
    public static readonly DATA_SPECIFICATION = new PCATableOfContentLabel("Data Specification", "PCA/Data Specification");
    public static readonly MODEL = new PCATableOfContentLabel("Model" , "PCA/Model" );
    public static readonly COST_FUNCTION = new PCATableOfContentLabel("Cost function", "PCA/Cost function");
    public static readonly OPTIMIERUNG = new PCATableOfContentLabel("Optimierung" , "PCA/Optimierung" );
}

export function createPCATableOfContent(active: PCATableOfContentLabel | null): TableOfContentEntry<PCATableOfContentLabel> {
    return c(PCATableOfContentLabel.PCA, active, [
        c(PCATableOfContentLabel.MODEL, active, []),
        c(PCATableOfContentLabel.DATA_SPECIFICATION, active, []),
        c(PCATableOfContentLabel.COST_FUNCTION, active, []),
        c(PCATableOfContentLabel.OPTIMIERUNG, active, []),
    ])
}


export class KNNTableOfContentLabel extends TableOfContentLabel {
    public static readonly KNN = new KNNTableOfContentLabel("K-Nearest Neighbors", "KNN");
    public static readonly DATA_SPECIFICATION = new KNNTableOfContentLabel("Data Specification", "KNN/Data Specification");
    public static readonly MODEL = new KNNTableOfContentLabel("Model" , "KNN/Model" );
}

export function createKNNTableOfContent(active: KNNTableOfContentLabel | null): TableOfContentEntry<KNNTableOfContentLabel> {
    return c(KNNTableOfContentLabel.KNN, active, [
        c(KNNTableOfContentLabel.DATA_SPECIFICATION, active, []),
        c(KNNTableOfContentLabel.MODEL, active, []),
    ])
}


export class FNNTableOfContentLabel extends TableOfContentLabel {
    public static readonly FNN = new FNNTableOfContentLabel("(Feed-Forward) Neural Network", "NN");
    public static readonly DATA_SPECIFICATION = new FNNTableOfContentLabel("Specification", "NN/Specification");
    public static readonly MODEL = new FNNTableOfContentLabel("Model" , "NN/Model" );
    public static readonly COST_FUNCTION = new FNNTableOfContentLabel("Cost function" , "NN/Cost function" );
    public static readonly OPTIMIERUNG = new FNNTableOfContentLabel("Optimierung" , "NN/Optimierung" );
}

export function createFNNTableOfContent(active: FNNTableOfContentLabel | null): TableOfContentEntry<FNNTableOfContentLabel> {
    return c(FNNTableOfContentLabel.FNN, active, [
        c(FNNTableOfContentLabel.DATA_SPECIFICATION, active, []),
        c(FNNTableOfContentLabel.MODEL, active, []),
        c(FNNTableOfContentLabel.COST_FUNCTION, active, []),
        c(FNNTableOfContentLabel.OPTIMIERUNG, active, []),
    ])
}

export class KMeansTableOfContentLabel extends TableOfContentLabel {
    public static readonly K_MEANS = new KMeansTableOfContentLabel("K-Means", "k-means");
    public static readonly DATA_SPECIFICATION = new KMeansTableOfContentLabel("Data Specification", "k-means/Data Specification");
    public static readonly MODEL = new KMeansTableOfContentLabel("Model" , "k-means/Model" );
    public static readonly COST_FUNCTION = new KMeansTableOfContentLabel("Cost function" , "k-means/Cost function" );
    public static readonly OPTIMIERUNG = new KMeansTableOfContentLabel("Optimierung" , "k-means/Optimierung" );
}

export function createKMeansTableOfContent(active: KMeansTableOfContentLabel | null): TableOfContentEntry<KMeansTableOfContentLabel> {
    return c(KMeansTableOfContentLabel.K_MEANS, active, [
        c(KMeansTableOfContentLabel.DATA_SPECIFICATION, active, []),
        c(KMeansTableOfContentLabel.MODEL, active, []),
        c(KMeansTableOfContentLabel.COST_FUNCTION, active, []),
        c(KMeansTableOfContentLabel.OPTIMIERUNG, active, []),
    ])
}