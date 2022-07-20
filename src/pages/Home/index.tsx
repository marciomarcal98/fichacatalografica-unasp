import { 
  AuthorContainer, 
  Input, 
  FinalPaperInfo, 
  SelectContainer, 
  OrientationInfo, 
  SubmitButton, 
  SubjectsInfo, 
  HomeContainer} from "./styles"
import { FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"

export function Home() {
  const[name, setName] = useState('')
  const[lastname, setLastname] = useState('')
  const[paperType, setPaperType] = useState('')
  const[course, setCourse] = useState('')
  const[title, setTitle] = useState('')
  const[code, setCode] = useState('')
  const[conclusionYear, setConslusionYear] = useState('')
  const[publicationYear, setPublicationYear] = useState('')
  const[pages, setPages] = useState('')
  const[city, setCity] = useState('')
  const[leaderName, setLeaderName] = useState('')
  const[firstSubject, setFirstSubject] = useState('')
  const[secondSubject, setSecondSubject] = useState('')
  const[thirdSubject, setThirdSubject] = useState('')
  const[fourthSubject, setFourthSubject] = useState('')
  const[fifthSubject, setFifthSubject] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const allInformations = {
      name,
      lastname,
      paperType,
      course,
      title,
      code,
      conclusionYear,
      publicationYear,
      pages,
      city,
      leaderName,
      subjects: [
        firstSubject, 
        secondSubject, 
        thirdSubject, 
        fourthSubject, 
        fifthSubject
      ]
    }

    navigate('/pdf', { 
      replace: true, 
      state: allInformations
    })
  }

  return (
    <HomeContainer>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <AuthorContainer>
            <span>Autor</span>
            <Input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} required />
            <Input type="text" placeholder="Sobrenome" onChange={(e) => setLastname(e.target.value)} required />
          </AuthorContainer>
          <FinalPaperInfo>
            <span>Trabalho</span>
            <SelectContainer>
              <span>Tipo do trabalho:</span>
              <select defaultValue="DEFAULT" name="typeSelect" id="typeSelect" required onChange={(e) => setPaperType(e.target.value)}>
                <option value="DEFAULT" disabled>Selecione</option>
                <option value="Trabalho de Conclusão de Curso (Graduação)">TCC - Graduação</option>
                <option value="Monografia (Especialização)">Monografia - Especialização</option>
                <option value="Dissertação (Mestrado)">Dissertação - Mestrado</option>
                <option value="Tese (Doutorado)">Tese - Doutorado</option>
              </select>
            </SelectContainer>
            <Input type="text" placeholder="Curso" onChange={(e) => setCourse(e.target.value)} required />
            <Input type="text" placeholder="Título do trabalho" onChange={(e) => setTitle(e.target.value)} required />
            <Input type="text" placeholder="Código Cutter" onChange={(e) => setCode(e.target.value)} required />
            <Input type="number" placeholder="Ano de conclusão" onChange={(e) => setConslusionYear(e.target.value)} required />
            <Input type="number" placeholder="Ano de publicação" onChange={(e) => setPublicationYear(e.target.value)} required />
            <Input type="text" placeholder="Cidade" onChange={(e) => setCity(e.target.value)} required />
            <Input type="number" placeholder="Quantidade de páginas" onChange={(e) => setPages(e.target.value)} required />
          </FinalPaperInfo>
          <OrientationInfo>
            <span>Orientação</span>
            <Input type="text" placeholder="Nome completo do orientador(a)" onChange={(e) => setLeaderName(e.target.value)} required />
          </OrientationInfo>
          <SubjectsInfo>
            <span>Assuntos, palavras-chave <br/> <small>(mínimo 1, máximo 5)</small></span>
            <Input type="text" placeholder="Assunto 1" onChange={(e) => setFirstSubject(e.target.value)} required />
            <Input type="text" placeholder="Assunto 2" onChange={(e) => setSecondSubject(e.target.value)} />
            <Input type="text" placeholder="Assunto 3" onChange={(e) => setThirdSubject(e.target.value)} />
            <Input type="text" placeholder="Assunto 4" onChange={(e) => setFourthSubject(e.target.value)} />
            <Input type="text" placeholder="Assunto 5" onChange={(e) => setFifthSubject(e.target.value)} />
          </SubjectsInfo>
          <SubmitButton disabled={paperType === ''} type="submit">Enviar</SubmitButton>
        </form>
      </main>
    </HomeContainer>
  )
}