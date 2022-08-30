// 📄 src/views/Home/Home.js
import React, { Component, Fragment } from 'react'

import { Layout } from 'antd'
import { Route, Link } from 'react-router-dom'

import Recommendation from '../Recommendation/Recommendation'
import Ranking from '../Ranking/Ranking'

import styles from './index.module.css'

const { Header, Content, Footer } = Layout

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header className={styles.header}>
                    <Link to="/recommendation">Recommendation </Link>
                    <Link to="/ranking"> Ranking</Link>
                </Header>
                <Content className={styles.content}>
                    {/*我们想要把子页面渲染在 Content 中，所以响应的路由就要放在Content中，这样在路由匹配到 /recommendation时，就会先加载父组件Home，在切换的时候也只会替换 Route 的部分，保留了 Home 页的内容 */}
                    <Route path="/recommendation" component={Recommendation} />
                    <Route path="/ranking" component={Ranking} />
                </Content>
                <Footer className={styles.footer}>CopyRight</Footer>
            </Fragment>
        )
    }
}

export default Home
