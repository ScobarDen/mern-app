import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

const AuthPage = () => {
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: "", password: ""
    });
    const message = useMessage();

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", {...form});
            message(data.message);
        } catch (err) {
        }
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
                        <button className="btn waves-effect waves-light blue darken-4"
                                style={{marginRight: 10}}
                                disabled={loading}
                        >
                            Войти
                        </button>
                        <button
                            className="btn waves-effect waves-light red darken-4"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
