import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import controleLivro from './controle/ControleLivros'; 
import controleEditora from './controle/ControleEditora'; 

function LivroDados() {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);
    const navigate = useNavigate();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();

        const autoresArray = autores.split('\n').map(author => author.trim());

        const novoLivro = {
            codLivro: 0, 
            titulo,
            resumo,
            autores: autoresArray,
            codEditora
        };

        controleLivro.incluir(novoLivro);

        navigate('/');
    };

    return (
        <main>
            <h1>Dados do Livro</h1>
            <form class="form-horizontal" onSubmit={incluir}>
                <div className="form-group">
                    <label class="col-md-4 control-label" for="textinput">Título:</label>
                    <div class="col-md-12">
                        <input class="form-control input-md"
                            type="text"
                            value={titulo}
                            onChange={(event) => setTitulo(event.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label class="col-md-4 control-label" for="textinput">Resumo:</label>
                    <div class="col-md-12">
                        <textarea class="form-control" id="textarea" name="textarea"
                            value={resumo}
                            onChange={(event) => setResumo(event.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label class="col-md-4 control-label" for="textinput">Autores (um por linha):</label>
                    <div class="col-md-12">
                        <textarea class="form-control" id="textarea" name="textarea"
                            value={autores}
                            onChange={(event) => setAutores(event.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label class="col-md-4 control-label" for="selectbasic">Editora:</label>
                    <div class="col-md-12">
                        <select id="selectbasic" name="selectbasic" class="form-control"
                            value={codEditora}
                            onChange={tratarCombo}
                        >
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Salvar dados</button>
            </form>
        </main >
    );
    }

export default LivroDados;
