import React from 'react';
import Header from "../HeaderBlock/Header";
import PageType from "../PageType/PageType";
import "../ErrorePage/css/Error.css"
import ErrorComponent from "../ErrorePage/ErrorComponent"

const ErrorePage = () => {
    return (
        <div className="Error">
            <Header bold_block={0} style_element="main_style"/>

            <div className="error_fake_page">
                <PageType title="СЕРВИСНАЯ СТРАНИЦА ОПЛАТЫ"/>
                <ErrorComponent/>
            </div>
        </div>
    );
};

export default ErrorePage;