import './langButton.scss';

import {useState} from 'react';

const Langs = [
    {lang: "Eng"},
    {lang: "Рус"},
    {lang: "Fr"},
    {lang: "Ch"}
]

const LangButton = ({className, title}) => {
    
    const [lang, setLang] = useState(0)

    const changeLang = ()=>{
        lang === Langs.length-1 ? setLang(0) : setLang(lang+1)
    }

    return(
        <div className={`lang-button-wrapper pointer ${className}`} onClick={changeLang}>
            <button className="lang-button" >
                <div className="lang-button-frame"></div>
                {Langs[lang].lang}
            </button>
        </div>
    )
}

export default LangButton;