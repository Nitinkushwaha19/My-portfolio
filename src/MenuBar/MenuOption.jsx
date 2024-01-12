import './MenuOption.css';
export default function MenuOption({item,contactBtn}) {
    return(
        <div className="menu-option" onClick={contactBtn} >
            {item}
        </div>
    );
}