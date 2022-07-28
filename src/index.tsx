import { createRoot } from 'react-dom/client'
import * as React from 'react'
import MyEditor from './editor'


const root = createRoot(document.getElementById('app'))
root.render(<MyEditor />)