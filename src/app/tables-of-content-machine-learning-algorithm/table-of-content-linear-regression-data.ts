import {
    c,
    TableOfContentEntry,
    TableOfContentLabel
} from "../tables-of-content/table-of-content-data";


export class LinearRegressionTableOfContentLabel extends TableOfContentLabel {
    public static readonly LINEAR_REGRESSION = new LinearRegressionTableOfContentLabel("Linear Regression", "Linear Regression");
    public static readonly DATA_SPECIFICATION = new LinearRegressionTableOfContentLabel("Data Specification", "Linear Regression/Data Specification");
    public static readonly MODEL = new LinearRegressionTableOfContentLabel("Model" , "Model" );
    public static readonly OPTIMIERUNG = new LinearRegressionTableOfContentLabel("Optimierung" , "Optimierung" );
    public static readonly COST_FUNCTION = new LinearRegressionTableOfContentLabel("Cost function", "Cost function");
}

export function createLinearRegressionTableOfContent(active: LinearRegressionTableOfContentLabel | null): TableOfContentEntry<LinearRegressionTableOfContentLabel> {
    return c(LinearRegressionTableOfContentLabel.LINEAR_REGRESSION, active, [
        c(LinearRegressionTableOfContentLabel.DATA_SPECIFICATION, active, []),
        c(LinearRegressionTableOfContentLabel.MODEL, active, []),
        c(LinearRegressionTableOfContentLabel.COST_FUNCTION, active, []),
        c(LinearRegressionTableOfContentLabel.OPTIMIERUNG, active, []),
    ])
}
