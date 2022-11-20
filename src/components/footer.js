import '../static/styles/components/footer.less';

function Footer(){
    const year = new Date().getFullYear();
    return (
        <div id="footer">
            <p>Mi Empresa Digital &copy; Chile {year}</p>
        </div>
    )
}

export default Footer;