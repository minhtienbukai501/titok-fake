import Header from '~/components/Layout/Components/Header';

function HaveLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
        </div>
    );
}

export default HaveLayout;
