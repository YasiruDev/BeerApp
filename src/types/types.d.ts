type TYPE =
    | 'micro'
    | 'nano'
    | 'regional'
    | 'brewpub'
    | 'large'
    | 'planning'
    | 'bar'
    | 'contract'
    | 'proprietor'
    | 'closed'

type SORT = 'asc' | 'desc'

type DATA_TYPES = string | number | [] | {}

type ALERT_SEVERITY = 'error' | 'warning' | 'info' | 'success'

export type { TYPE, SORT, DATA_TYPES, ALERT_SEVERITY }
