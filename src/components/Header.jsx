import logo from '../assets/logo_coin.png';

export default function Header(){
    return <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Investment Calculator</h1>
    </header>
}