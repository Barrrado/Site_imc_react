import React from 'react';
import '../components/footer.css'

function Footer () {
    return(
    <>
    <div className='foot__conteiner'>
        <div className='foot__logo'>
            <div><p className='par__footer'>Este Site e Feito para estudos  do curso EBAC</p></div>
            <dir className='texto__footer'>Desenvolvido por <a href="https://github.com/Barrrado">Diego Barrado</a></dir>
    </div>
    </div>
    </>
);
}

export default Footer;
