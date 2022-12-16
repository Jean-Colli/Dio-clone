import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdOutlinePerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';


import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, JaTenhoConta, CriarText, Row, Wrapper, Text } from './styles';

const Cadastro = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    
    const { control, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });
    

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input type="nome" placeholder="Nome Completo" leftIcon={<MdOutlinePerson />}  name="nome" control={control} />
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Text>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </Text>
                <Row>
                    <JaTenhoConta>Já tenho conta.</JaTenhoConta>
                    <CriarText onClick={handleClickSignIn}>Fazer login</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }