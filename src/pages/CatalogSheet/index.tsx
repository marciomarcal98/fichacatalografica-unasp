import { 
  AuthorContainer, 
  Input, 
  FinalPaperInfo, 
  SelectContainer, 
  OrientationInfo, 
  SubmitButton, 
  SubjectsInfo } from "./styles"
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom"

export function CatalogSheet() {
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

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleLastnameChange(event: ChangeEvent<HTMLInputElement>) {
    setLastname(event.target.value)
  }

  function handlerPaperTypeChange(event: ChangeEvent<HTMLSelectElement>) {
    setPaperType(event.target.value)
  }

  function handleCourseChange(event: ChangeEvent<HTMLInputElement>) {
    setCourse(event.target.value)
  }

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleCodeChange(event: ChangeEvent<HTMLInputElement>) {
    setCode(event.target.value)
  }

  function handleConclusionYearChange(event: ChangeEvent<HTMLInputElement>) {
    setConslusionYear(event.target.value)
  }

  function handlePublicationYearChange(event: ChangeEvent<HTMLInputElement>) {
    setPublicationYear(event.target.value)
  }

  function handlePagesChange(event: ChangeEvent<HTMLInputElement>) {
    setPages(event.target.value)
  }

  function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value)
  }

  function handleLeaderNameChange(event: ChangeEvent<HTMLInputElement>) {
    setLeaderName(event.target.value)
  }

  function handleFirstSubjectChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstSubject(event.target.value)
  }

  function handleSecondSubjectChange(event: ChangeEvent<HTMLInputElement>) {
    setSecondSubject(event.target.value)
  }

  function handleThirdSubjectChange(event: ChangeEvent<HTMLInputElement>) {
    setThirdSubject(event.target.value)
  }

  function handleFourthSubjectChange(event: ChangeEvent<HTMLInputElement>) {
    setFourthSubject(event.target.value)
  }

  function handleFifthSubjectChange(event: ChangeEvent<HTMLInputElement>) {
    setFifthSubject(event.target.value)
  }

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

    navigate('/pdfpage', { replace: true, state: allInformations})
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <AuthorContainer>
          <span>Autor</span>
          <Input type="text" placeholder="Nome" onChange={handleNameChange} required />
          <Input type="text" placeholder="Sobrenome" onChange={handleLastnameChange} required />
        </AuthorContainer>
        <FinalPaperInfo>
          <span>Trabalho</span>
          <SelectContainer>
            <span>Tipo do trabalho:</span>
            <select defaultValue="DEFAULT" name="typeSelect" id="typeSelect" required onChange={handlerPaperTypeChange}>
              <option value="DEFAULT" disabled>Selecione</option>
              <option value="Trabalho de Conclusão de Curso (Graduação)">TCC - Graduação</option>
              <option value="Monografia (Especialização)">Monografia - Especialização</option>
              <option value="Dissertação (Mestrado)">Dissertação - Mestrado</option>
              <option value="Tese (Doutorado)">Tese - Doutorado</option>
            </select>
          </SelectContainer>
          <Input type="text" placeholder="Curso" onChange={handleCourseChange} required />
          <Input type="text" placeholder="Título do trabalho" onChange={handleTitleChange} required />
          <Input type="text" placeholder="Código Cutter" onChange={handleCodeChange} required />
          <Input type="number" placeholder="Ano de conclusão" onChange={handleConclusionYearChange} required />
          <Input type="number" placeholder="Ano de publicação" onChange={handlePublicationYearChange} required />
          <Input type="text" placeholder="Cidade" onChange={handleCityChange} required />
          <Input type="number" placeholder="Quantidade de páginas" onChange={handlePagesChange} required />
        </FinalPaperInfo>
        <OrientationInfo>
          <span>Orientação</span>
          <Input type="text" placeholder="Nome completo do orientador(a)" onChange={handleLeaderNameChange} required />
        </OrientationInfo>
        <SubjectsInfo>
          <span>Assuntos, palavras-chave <br/> <small>(mínimo 1, máximo 5)</small></span>
          <Input type="text" placeholder="Assunto 1" onChange={handleFirstSubjectChange} required />
          <Input type="text" placeholder="Assunto 2" onChange={handleSecondSubjectChange} />
          <Input type="text" placeholder="Assunto 3" onChange={handleThirdSubjectChange} />
          <Input type="text" placeholder="Assunto 4" onChange={handleFourthSubjectChange} />
          <Input type="text" placeholder="Assunto 5" onChange={handleFifthSubjectChange} />
        </SubjectsInfo>
        <SubmitButton disabled={paperType === ''} type="submit">Enviar</SubmitButton>
      </form>
    </main>
  )
}