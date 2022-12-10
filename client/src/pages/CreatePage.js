import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";

const CreatePage = () => {
    const [link, setLink] = useState('');
    const {request} = useHttp();
    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/links/generate', 'POST', {from: link});
                console.log(data);
            } catch (e) {
            }
        }
    }

    useEffect(() => {
        window.M.updateTextFields();
    }, []);


    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input
                        placeholder="Вcтавьте ссылку..."
                        id="link"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        onKeyUp={pressHandler}
                    />
                    <label htmlFor="email" className="active">Введите ссылку</label>
                </div>
            </div>
        </div>
    );
}

export default CreatePage;
