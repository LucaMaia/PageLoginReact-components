import logo from './logo.svg';
import Input from './componentes/input';
import Button from './componentes/button';
import './App.css';
import Footer from './componentes/footer';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                    <Input  
                        id="wallison"
                        placeholder="digite"
                        density="large"
                        label="CEP"
                    />

                    <Input  
                        id="wallison"
                        placeholder="digite"
                        density="large"
                        label="CPF"
                    />

                  <Button
                    backgroundDiv={false}
                    background="primary"
                    ativo={false}
                    inverted={false}
                    loading={false}
                    titulo="Botão"
                    tipoBlock={false}
                    disabled={false}
                  />


       
      </header>
    </div>
  );
}

export default App;
