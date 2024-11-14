import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/components/Layout/DefautLayout';

function App() {
    return (
        <Router
            future={{
                v7_startTransition: true,
            }}
        >
            <div className="App">
                <Routes>
                    {publicRoutes.map((publicRoute, key) => {
                        let Layout;
                        if (publicRoute.layout === null) {
                            Layout = Fragment;
                        } else if (publicRoute.layout) {
                            Layout = publicRoute.layout;
                        } else {
                            Layout = DefaultLayout;
                        }
                        return (
                            <Route
                                key={key}
                                path={publicRoute.path}
                                element={
                                    <Layout>
                                        <publicRoute.component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
