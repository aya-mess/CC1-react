import React, { useContext } from 'react';
import FrenchFlag from '../../assets/france.svg';
import SpanishFlag from '../../assets/spain.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import { Context } from '../../context/langContext';

export default function ToggleLangs() {
    const { setLang } = useContext(Context);

    return (
        <div className='container-langs'>
            <img onClick={() => setLang('FR')} src={FrenchFlag} alt="French Flag" />
            <img onClick={() => setLang('EN')} src={EnglishFlag} alt="English Flag" />
            <img onClick={() => setLang('ES')} src={SpanishFlag} alt="Spanish Flag" />
        </div>
    );
}