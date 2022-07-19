import React from 'react';
import './Cadastro.css'
function Cadastro() {
    return (
        <div>


            <div className="form-wraper">

                <div className="logo-form">
                    <h1>Crie Sua Conta</h1>
                </div>


                <form>
                    <div className="info">
                        <h2>Informações Pessoais</h2>
                    </div>

                    <div className="inp">
                        <h3>Nome</h3>
                        <input type="nome" placeholder="Nome" />
                    </div>

                    <h3>Órgão Emissor</h3>
                    <div className="buttonEmissor">
                        <input className="buttoncrp" type="button" value="CRP" />
                        <input className="buttoncrm" type="button" value="CRM" />
                        <input className="buttoncrqe" type="button" value="RQE" />
                        <input className="buttoncfess" type="button" value="CFESS" />


                        <div className="inp">
                            <h3>Código do Órgão Emissor</h3>
                            <input type="text" placeholder="Código do Órgão Emissor" />
                        </div>

                        <div className="inp">
                            <h3>Data Nascimento</h3>
                            <input type="date" placeholder="Data Nascimento" />
                        </div>

                        <div className="inp">
                            <h3>Telefone</h3>
                            <input type="telefone" placeholder="Telefone" />
                        </div>

                        <div className="info">
                            <h2>Dados da Conta</h2>
                        </div>

                        <div className="inp">
                            <h3>E-mail</h3>
                            <input type="email" placeholder="E-mail" />
                        </div>

                        <div className="botao">
                            <input type="button" value="Criar Conta" />
                        </div>

                    </div>

                </form>

            </div>
        </div>

    )
}

export default Cadastro;