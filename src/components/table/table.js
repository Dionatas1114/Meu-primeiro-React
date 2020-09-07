import React from 'react';
import '../assets/app.css';
import Amazon from '../assets/aws.jpg';
import At from '../assets/at&t.jpg';
import Google from '../assets/gcs.jpg';
import HP from '../assets/hp.jpg';
import Windows from '../assets/az.jpg';


export default () => {

    return (
        <div>
            <div id='table'>
                <h1> TABELA DE SERVIÇOS</h1>
                <br/> <br/> <br/>
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Serviço</th>                    
                            <th>Amazon Web Services</th>                    
                            <th>AT&T Cloud Storage</th>                    
                            <th>Google Cloud Storage</th>                    
                            <th>HP Cloud</th>                    
                            <th>Windows Azure Blob Storage</th>
                        </tr>
                    </thead>
                <br/>
                    <tbody>
                        <tr>
                            <td>Imagem do Serviço</td>
                            <td><img src={Amazon}></img></td>
                            <td><img src={At}></img></td>
                            <td><img src={Google}></img></td>
                            <td><img src={HP}></img></td>
                            <td><img src={Windows}></img></td>
                        </tr>
                        <tr>
                            <td>Custo mensal por Gb de armazenamento remoto</td>
                            <td>$0,00099 - $0,023</td>
                            <td>$0.079</td>
                            <td>$0,020 - $0,12</td>
                            <td>Não encontrado</td>
                            <td>$0,020</td>
                        </tr>
                        <tr>
                            <td>Empresa desenvolvedora</td>
                            <td>Amazon</td>
                            <td>AT&T Synaptic</td>
                            <td>Google</td>
                            <td>HP</td>
                            <td>Microsoft</td>
                        </tr>
                        <tr>
                            <td>Ano de lançamento</td>
                            <td>2006</td>
                            <td>Não encontrado</td>
                            <td>2008</td>
                            <td>2012</td>
                            <td>2007</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id='foot'>
                <h1>&copy; GROWDEV</h1>
            </div>
        </div>
    );
}