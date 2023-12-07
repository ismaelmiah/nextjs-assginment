declare interface YearSummary{
    Year: string,
    Incomes: Dictionary[],
    CumulativeIncome: Dictionary[],
    Costs: Dictionary[],
    CumulativeCosts: Dictionary[],
    ReconcillationIncome: ReconcillationModel,
    ReconcillationExpenses: ReconcillationModel,
    ReconcillationResult: Dictionary[],
    ReconcillationFinalResult: Dictionary[],
    ReconcillationCumulativeResult: Dictionary[],
}

type ReconcillationModel = {
    Name: string,
    Value: Dictionary[]
}

type  Dictionary = {
    Key: string,
    Value: string
}