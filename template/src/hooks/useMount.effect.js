import * as React from 'react'

const useMount = (func) => React.useEffect(() => func(), [])

export default useMount
