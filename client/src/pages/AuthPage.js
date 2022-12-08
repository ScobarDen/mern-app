import React, {useState} from "react";

const AuthPage = () => {
    const [form, setForm] = useState({
        email: "", password: ""
    });

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи ссылки</h1>
                <div className="card blue-grey darken-3">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="Введите email..."
                                    id="email" type="text"
                                    className="validate color-input"
                                    name="email"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email" className="active">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input placeholder="Введите пароль..."
                                       id="password"
                                       type="password"
                                       className="validate color-input"
                                       name="password"
                                       onChange={changeHandler}
                                />
                                <label htmlFor="password" className="active">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn waves-effect waves-light blue darken-4" style={{marginRight: 10}}>Войти</button>
                        <button className="btn waves-effect waves-light red darken-4">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
