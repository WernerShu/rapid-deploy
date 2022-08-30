import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Suspense } from 'react'
import router from '@/router/index'
import './App.scss'

function App() {
    return (
        <Router>
            <div id="App">
                <Suspense fallback={<div>加载中...</div>}>
                    {/* {router.map((item) => {
                        return <Route exact={item.exact} path={item.path} key={item.path} render={(props) => <item.component {...props} routes={item.children} />} />
                    })} */}
                </Suspense>
            </div>
        </Router>
    )
}

export default App
