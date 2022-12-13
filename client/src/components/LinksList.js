import React from 'react';
import {Link} from "react-router-dom";

const LinksList = ({links}) => {
    if (!links.length) {
        return <p className="center">Ссылок пока нет</p>
    }
    return (
        <>
            <table className="highlight">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Оригинал</th>
                    <th>Сокращенная</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {links.map((link, i) => {
                    return (
                        <tr key={link._id}>
                            <td>{i + 1}</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td><Link to={`/detail/${link._id}`}>Открыть</Link></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default LinksList;