import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material'
import '@fontsource/roboto'

function App() {
  return (
    <Container component="article" maxWidth="sm">

      <Typography align='center' variant="h3" component="h1">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro
        aoEnviar={aoEnviarform}

        validarCpf={validarCpf}
      />
    </Container>
  );
}
interface IErros {
  valido: boolean
  mensagem: string
}
interface IDadosLogin {
  nome: string
  sobrenome: string
  cpf: string
  promocoes: boolean
  novidades: boolean
}
function aoEnviarform(dados: IDadosLogin): void {
  console.log(dados)
}

function validarCpf(cpf: string): IErros {
  if (cpf.length !== 11) {
    return { valido: false, mensagem: 'CPF deve ter 11 dígitos' }
  } else {
    return { valido: true, mensagem: '' }
  }
}
export default App;
