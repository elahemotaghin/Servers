import React from 'react';
import '../assets/sass/footer.css'
import logoSrc from '../assets/img/logo192.png'

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            links:[
                {name: 'قوانین', href: '#'},
                {name: 'راهنما', href: '#'},
                {name: 'ارتباط با ما', href: '#'},
                {name: 'بنویسید...', href: '#'},
            ],
        }
    }
    render(){
        return (
            <footer className='footer'>
                <div className="logo-box">
                    <img src={logoSrc} alt='logo' className="logo-img"/>
                    <p className='more-information'>
                        این صفحه به کمک react ساخته شده است...
                    </p>
                </div>
                
                <div className='links'>
                    {this.state.links.map((item, index) => (
                        <a key={index} href={item.href} className='footer-link'>{item.name}</a>
                    ))}
                </div>
            </footer>
        );
    }
}
export default Footer;