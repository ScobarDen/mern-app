import React from 'react';

const LinkCard = ({link}) => {
    return (
        <>
            <h2>Ссылка</h2>
            <p>Ваша ссылка: <a href={link.to} target="_blank" rel="noreferrer">{link.to}</a></p>
            <p>Откуда: <a href={link.from} target="_blank" rel="noreferrer">{link.from}</a></p>
            <p>Количество кликов пл ссылке: <strong>{link.clicks}</strong></p>
            <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong> </p>
        </>
    );
}

export default LinkCard;