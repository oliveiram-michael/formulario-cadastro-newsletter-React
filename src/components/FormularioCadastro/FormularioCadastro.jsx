import { TextField, Button, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    let [nome, setNome] = useState('')
    let [sobrenome, setSobrenome] = useState('')
    let [cpf, setCpf] = useState('')
    let [promocoes, setPromocoes] = useState(true)
    let [novidades, setNovidades] = useState(true)
    let [erros, setErros] = useState({ cpf: { valido: true, mensagem: '' } })

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })

            }}>

            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)

                    if (event.target.value.length > 15) {
                        setNome(event.target.value.substring(0, 15))
                    }
                }}
                id="nome"
                label="Nome"
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}

                id="sobrenome" label="Sobrenome" variant='outlined' fullWidth margin='normal' />

            <TextField
                onBlur={(event) => {
                    const eValido = validarCpf(cpf)
                    setErros({ cpf: eValido })
                }
                }
                error={!erros.cpf.valido}
                helperText={erros.cpf.mensagem}
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                id="cpf" label="CPF" variant='outlined' fullWidth margin='normal' />

            <FormControlLabel control={<Switch
                onChange={(event) => {
                    setPromocoes(event.target.checked)
                }}
                checked={promocoes} color='secondary' />} label="Promoções" />
            <FormControlLabel control={<Switch
                onChange={(event) => {
                    setNovidades(event.target.checked)
                }}
                checked={novidades} color='secondary' />} label="Novidades" />

            <Button variant='contained' color='primary' type="submit">Cadastrar</Button>

        </form>


    );
}

export default FormularioCadastro